"use client"
import Image from "next/image"

interface BannerBreadcrumbProps {
    image: string
    title: string
    urls: Array<string>
}

export const BannerBreadcrumb = ({ image, title, urls }: BannerBreadcrumbProps) => {
    return (
        <section className="relative w-full">
            <div className="w-full h-[60dvh] brightness-25 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={2000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-full z-10">
                <h1 className="CalSans text-2xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white">
                    {title}
                </h1>
                <div className="flex justify-center items-center gap-x-2">
                    {urls.map((url, index) => (
                        <div
                            key={index}
                            className="GolosText text-lg md:text-2xl text-white"
                        >
                            {url}
                            {index !== urls.length - 1 && (
                                <i className="ml-2.5 ri-arrow-right-wide-fill" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}