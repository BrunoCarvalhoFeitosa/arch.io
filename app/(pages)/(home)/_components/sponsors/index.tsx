"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { sponsorsData } from "@/app/utils/constants"
import "swiper/css"

export const Sponsors = () => {
    return (
        <section className="w-full xl:mt-44 lg:pb-6 px-[4%] md:px-[8%] lg:px-[5%]">
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 1500 }}
                modules={[Autoplay]}
                breakpoints={{
                    1200: { slidesPerView: 5 },
                    991: { slidesPerView: 4 },
                    575: { slidesPerView: 2 },
                    0: { slidesPerView: 2 }
                }}
                className="sponsors-swiper"
            >
                {sponsorsData.map((image, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <Image
                            src={image}
                            alt="Patrocinador"
                            width={200}
                            height={200}
                            className="w-50 h-45 object-contain scale-95 hover:scale-110 transition-transform duration-200 sponsors-image cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}