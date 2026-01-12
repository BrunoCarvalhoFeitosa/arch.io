"use client"
import Image from "next/image"
import { ImageZoom } from "@/components/common/image-zoom"

export const Banner = () => {
    return (
        <section className="w-full">
            <ImageZoom zoom={150}>
                <Image
                    src="/images/home/image-banner.jpeg"
                    alt=""
                    width={2800}
                    height={2000}
                />
            </ImageZoom>
        </section>
    )
}