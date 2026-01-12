"use client"
import Image from "next/image"
import { ImageZoom } from "../image-zoom"

interface LightboxProps {
    openLightbox: boolean
    setOpenLightBox: (openLightbox: boolean) => void
    image: string
}

export const Lightbox = ({ openLightbox, setOpenLightBox, image }: LightboxProps) => {
    
    const handleCloseLightbox = () => {
        setOpenLightBox(false)
    }

    return (
        <>
            {openLightbox && (
                <div className="fixed top-0 left-0 w-full h-dvh overflow-hidden z-200">
                    <div
                        className="w-full h-full bg-black/95 cursor-pointer"
                        onClick={handleCloseLightbox}
                    />
                    <div className="absolute top-6 right-8 flex items-center gap-x-2">
                        <button
                            type="button"
                            className="size-8 flex justify-center items-center cursor-pointer"
                            onClick={handleCloseLightbox}
                        >
                            <i className="ri-close-fill text-4xl text-white" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[88dvw] overflow-hidden">
                        <ImageZoom zoom={140}>
                            <Image
                                src={image}
                                alt=""
                                width={2000}
                                height={2000}
                                className="w-full h-135 md:h-[80dvh] object-cover"
                            />
                        </ImageZoom>
                    </div>
                </div>
            )}
        </>
    )
}
