"use client"
import { Project } from "@/app/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
import { ImageZoom } from "@/components/common/image-zoom"

interface CarouselProps {
    project: Project
}

export const Carousel = ({ project }: CarouselProps) => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[Autoplay]}
            breakpoints={{
                1921: { slidesPerView: 3 },
                1025: { slidesPerView: 2 },
                0: { slidesPerView: 1 }
            }}
        >
                {project.images.map((image, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <ImageZoom zoom={150}>
                            <Image
                                src={image.src}
                                alt="Patrocinador"
                                width={1200}
                                height={1200}
                                className="w-[1200px] h-[600px] object-cover transition-transform duration-200 cursor-pointer"
                            />
                        </ImageZoom>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}