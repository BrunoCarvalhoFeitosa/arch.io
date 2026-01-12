"use client"
import { Project } from "@/app/types"
import Image from "next/image"
import { ImageZoom } from "@/components/common/image-zoom"

interface BannerProps {
    project: Project
}

export const Banner = ({ project }: BannerProps) => {
    return (
        <div className="relative h-[65dvh] brightness-85 overflow-hidden">
            <ImageZoom zoom={160}>
                <Image
                    src={project.principalImage}
                    alt={project.title}
                    width={2000}
                    height={2000}
                    className="w-500 h-225 object-cover object-bottom"
                />
            </ImageZoom>
        </div>
    )
}
