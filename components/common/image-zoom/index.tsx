"use client"
import { useState } from "react"
import { Lens } from "@/components/ui/lens"

interface ImageZoomProps {
    children: React.ReactNode
    zoom?: number
}

export const ImageZoom = ({ children, zoom }: ImageZoomProps) => {
    const [hovering, setHovering] = useState<boolean>(false)

    return (
        <div>
            <div className="relative z-10">
                <Lens zoom={zoom} hovering={hovering} setHovering={setHovering}>
                    {children}
                </Lens>
            </div>
        </div>
    )
}
