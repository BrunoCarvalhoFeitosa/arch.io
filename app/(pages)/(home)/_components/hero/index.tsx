"use client"
import { useState } from "react"
import Image from "next/image"
import { Tag } from "@/components/common/tag"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { ImageZoom } from "@/components/common/image-zoom"
import { Lightbox } from "@/components/common/lightbox"

export const Hero = () => {
    const [openLightbox, setOpenLightBox] = useState<boolean>(false)
    
    const handleOpenLightBox = () => {
        setOpenLightBox(true)
    }

    return (
        <section className="relative w-full px-[4%] md:px-[8%] lg:px-[5%] py-10 flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-6 items-center">
            <BackgroundRippleEffect />
            <Lightbox
                openLightbox={openLightbox}
                setOpenLightBox={setOpenLightBox}
                image="/images/home/image-hero-01.jpeg"
            />
            <div className="relative w-full lg:w-1/2 z-10">
                <Tag title="Design sólido e confiável" />
                <div className="relative z-10">
                    <h1 className="my-5 CalSans text-4xl md:text-6xl lg:text-4xl 2xl:text-8xl">
                        <span className="flex items-center gap-3">
                            <span>
                                Encontre
                            </span>
                            <span className="flex relative">
                                <Image
                                    src="/images/home/image-hero-01.jpeg"
                                    alt=""
                                    width={300}
                                    height={80}
                                    className="w-75 h-16 md:h-24 lg:h-20 xl:h-30 object-cover rounded-full"
                                />
                                <button
                                    onClick={() => handleOpenLightBox()}
                                    className="absolute top-2/4 right-3 -translate-y-2/4 flex justify-center items-center size-12 md:size-14 rounded-full bg-black opacity-85 cursor-pointer"
                                >
                                    <i className="bi bi-play-fill text-3xl md:text-4xl text-white" />
                                </button>
                            </span>
                        </span>
                        <span>
                            inspirações para design e interiores
                        </span>
                    </h1>
                    <p className="w-full md:w-[60%] GolosText text-gray-700">
                        Quer seja a sua casa, escritório ou um projeto comercial, estamos sempre empenhados em dar vida à sua visão e construir aquilo que você sempre idealizou e nunca conseguiu tirar do papel.
                    </p>
                    <div className="hidden lg:block">
                        <button
                            type="button"
                            className="group mt-3 py-3 pl-5 pr-10 bg-(--prim) GolosText text-xl transition-all duration-300 hover:shadow-md shadow-amber-600 cursor-pointer"
                        >
                            Obtenha nossos serviços
                            <i className="bi bi-arrow-right ps-2 group-hover:animate-caret-blink group-hover:translate-x-3" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 xl:translate-y-40 overflow-hidden z-10">
                <ImageZoom>
                  <Image
                      src="/images/home/image-hero-01.jpeg"
                      alt=""
                      width={2000}
                      height={600}
                      className="w-500 h-85 md:h-150 object-cover brightness-100 hover:scale-110 transition-transform duration-300 cursor-zoom-in"
                  />
                </ImageZoom>
            </div>
            <div className="lg:hidden">
                <button
                    type="button"
                    className="group mt-3 py-3 pl-5 pr-10 bg-(--prim) GolosText text-xl rounded-full transition-all duration-300 hover:shadow-md shadow-amber-600 cursor-pointer"
                >
                    Obtenha nossos serviços
                    <i className="bi bi-arrow-right ps-2 group-hover:animate-caret-blink group-hover:translate-x-3" />
                </button>
            </div>
        </section>
    )
}
