"use client"
import { useMemo, useRef, useState } from "react"
import { motion } from "motion/react"
import DottedMap from "dotted-map"
import { useTheme } from "next-themes"

interface MapProps {
    dots?: Array<{
        start: { lat: number; lng: number; label?: string }
        end: { lat: number; lng: number; label?: string }
    }>
    lineColor?: string
}

export default function WorldMap({
    dots = [],
    lineColor = "#0ea5e9",
}: MapProps) {
    const svgRef = useRef<SVGSVGElement>(null)
    const { resolvedTheme } = useTheme()
    const [activeLabel, setActiveLabel] = useState<string | null>(null)

    if (!resolvedTheme) {
        return null
    }

    const svgMap = useMemo(() => {
        const map = new DottedMap({ height: 100, grid: "diagonal" })

        return map.getSVG({
        radius: 0.4,
        color: resolvedTheme === "dark" ? "#334155" : "#cbd5f5",
        shape: "circle",
        backgroundColor: resolvedTheme === "dark" ? "#020617" : "#ffffff",
        })
    }, [resolvedTheme])

    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360)
        const y = (90 - lat) * (400 / 180)
        return { x, y }
    }

    const createCurvedPath = (
        start: { x: number; y: number },
        end: { x: number; y: number }
    ) => {
        const midX = (start.x + end.x) / 2
        const midY = Math.min(start.y, end.y) - 50
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
    }

  const renderLabel = (
        id: string,
        x: number,
        y: number,
        label?: string,
        align: "start" | "end" = "start"
  ) => {
        if (!label || activeLabel !== id) {
            return null
        }

        return (
            <g>
                <rect
                    x={x + (align === "start" ? 4 : -label.length * 6 - 6)}
                    y={y - 18}
                    rx={4}
                    ry={4}
                    width={label.length * 6 + 8}
                    height={16}
                    fill={resolvedTheme === "dark" ? "#020617" : "#eee"}
                />
                <text
                    x={x + (align === "start" ? 8 : -8)}
                    y={y - 6}
                    textAnchor={align === "start" ? "start" : "end"}
                    fontSize="8"
                    fontWeight="700"
                    fill={resolvedTheme === "dark" ? "#e5e7eb" : "#0f172a"}
                    className="select-none GolosText font-bold"
                >
                    {label}
                </text>
            </g>
        )
    }

    return (
        <div className="w-full aspect-[2/1] rounded-lg relative overflow-hidden bg-white dark:bg-black">
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                alt="world map"
                draggable={false}
                className="absolute inset-0 w-full h-full pointer-events-none select-none
                [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
            />
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="absolute inset-0 w-full h-full select-none"
            >
                <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {dots.map((dot, i) => {
                    const start = projectPoint(dot.start.lat, dot.start.lng)
                    const end = projectPoint(dot.end.lat, dot.end.lng)
                    const startId = `start-${i}`
                    const endId = `end-${i}`

                    return (
                        <g key={i}>
                            <motion.path
                                d={createCurvedPath(start, end)}
                                fill="none"
                                stroke="url(#path-gradient)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: i * 0.4 }}
                            />
                            <g
                                onMouseEnter={() => setActiveLabel(startId)}
                                onMouseLeave={() => setActiveLabel(null)}
                                onClick={() => setActiveLabel(activeLabel === startId ? null : startId)}
                                className="cursor-pointer"
                            >
                                <circle cx={start.x} cy={start.y} r="3" fill={lineColor} />
                                <circle cx={start.x} cy={start.y} r="3" fill={lineColor} opacity="0.5">
                                    <animate attributeName="r" from="3" to="10" dur="1.5s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                                {renderLabel(startId, start.x, start.y, dot.start.label, "start")}
                            </g>
                            <g
                                onMouseEnter={() => setActiveLabel(endId)}
                                onMouseLeave={() => setActiveLabel(null)}
                                onClick={() => setActiveLabel(activeLabel === endId ? null : endId)}
                                className="cursor-pointer"
                            >
                                <circle cx={end.x} cy={end.y} r="3" fill={lineColor} />
                                <circle cx={end.x} cy={end.y} r="3" fill={lineColor} opacity="0.5">
                                    <animate attributeName="r" from="3" to="10" dur="1.5s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                                {renderLabel(endId, end.x, end.y, dot.end.label, "end")}
                            </g>
                        </g>
                    )
                })}
            </svg>
        </div>
    )
}
