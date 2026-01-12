"use client"
import Image from "next/image"
import { ImageZoom } from "@/components/common/image-zoom"

interface BannerProps {
    image: string
    title: string
}

export const Banner = ({ image,title }: BannerProps) => {
    return (
         <ImageZoom zoom={120}>
            <Image
                src={image}
                alt={title}
                width={2000}
                height={2000}
            />
         </ImageZoom>
    )
}