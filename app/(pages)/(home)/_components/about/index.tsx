"use client"
import Image from "next/image"
import CountUp from "react-countup"
import { Title } from "@/components/common/title"
import { aboutStatsData } from "@/app/utils/constants"
import { ImageZoom } from "@/components/common/image-zoom"

export const About = () => {
    return (
        <section className="w-full py-12 px-[4%] md:px-[8%] lg:px-[5%] about">
            <Title
                tagTitle="Sobre a Arch.io"
                titleOne="Nós desenvolvemos"
                titleTwo="designs de interiores, artesanato"
                titleThree="espaços elegantes e atemporais."
            />
            <div className="mt-16 lg:mt-32 xl:mt-16 w-full xl:w-[85%] lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                <ImageZoom zoom={120}>
                    <Image
                        src="/images/home/image-about-01.jpg"
                        alt=""
                        width={1000}
                        height={1000}
                        className="transition-transform duration-500 w-full lg:w-117.5 h-72 md:h-96 lg:h-125 object-cover lg:rounded-3xl shadow-xl cursor-pointer"
                    />
                </ImageZoom>
                <ImageZoom zoom={120}>
                    <Image
                        src="/images/home/image-about-02.jpg"
                        alt=""
                        width={1000}
                        height={1000}
                        className="lg:mt-14 transition-transform duration-500 w-full lg:w-117.5 h-72 md:h-96 lg:h-125 object-cover lg:rounded-3xl shadow-xl cursor-pointer"
                    />
                </ImageZoom>
                <ImageZoom zoom={120}>
                    <Image
                        src="/images/home/image-about-03.jpg"
                        alt=""
                        width={1000}
                        height={1000}
                        className="lg:mt-28 transition-transform duration-500 w-full lg:w-117.5 h-72 md:h-96 lg:h-125 object-cover lg:rounded-3xl shadow-xl cursor-pointer"
                    />
                </ImageZoom>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {aboutStatsData.map((item, index) => (
                    <div key={index}>
                        <div className="mb-3">
                            <h4 className="CalSans font-bold text-5xl tracking-normal">
                                <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={2.5}
                                    enableScrollSpy
                                />
                                {item.suffix}
                            </h4>
                        </div>
                        <div className="py-6 border-t border-[#8383834d]">
                            <h5 className="CalSans text-xl xl:text-2xl">
                                {item.title}
                            </h5>
                            <p className="GolosText text-neutral-400">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
