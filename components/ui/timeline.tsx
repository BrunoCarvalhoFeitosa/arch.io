"use client"
import React, { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion } from "motion/react"

interface TimelineEntry {
    title: string
    content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setHeight(rect.height)
        }
    }, [ref])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div
            className="w-full"
            ref={containerRef}
        >
            <div ref={ref} className="relative pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row justify-start md:pt-20 md:gap-10"
                    >
                        <div className="sticky hidden md:flex flex-col md:flex-row z-40 items-center top-40 self-start lg:max-w-sm md:w-full py-4 bg-[#CFAF99] lg:bg-transparent">
                            <div className="absolute top-7 md:top-auto left-3 md:left-3 w-10 h-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-black dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                                {item.title}
                            </h3>
                        </div>
                        <div className="relative pt-8 md:pt-0 pr-4 md:pl-16 lg:pl-4 w-full">
                            <h3 className="md:hidden block CalSans text-xl md:text-2xl mb-4 text-left">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="hidden md:flex absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99% [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-white via-black to-transparent from-0% via-10% rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}
