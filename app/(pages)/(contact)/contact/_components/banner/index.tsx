"use client"
import Image from "next/image"

export const Banner = () => {
    return (
        <div className="w-full lg:w-108 xl:w-150">
            <Image
                src="/images/home/image-about-01.jpg"
                alt=""
                width={500}
                height={400}
                className="w-full"
            />
        </div>
    )
}
