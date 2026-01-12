"use client"

import { ImageZoom } from "@/components/common/image-zoom"
import { Title } from "@/components/common/title"
import Image from "next/image"

export const Services = () => {
    return (
        <section className="w-full pt-36 px-[4%] md:px-[8%] lg:px-[5%]">
            <Title
                tagTitle="Serviços que oferecemos"
                titleOne="Explore nossos"
                titleTwo="serviços de design de interiores"
                titleThree="projetamos e decoramos tudo."
            />
            <div className="lg:mt-20 py-10 flex flex-col justify-between items-start md:items-center gap-6 lg:gap-14">
                <div className="pb-5 group flex flex-col md:flex-row justify-between w-full gap-2 md:gap-8 hover:border-b hover:border-[#8383834d] transition-all duration-200 cursor-pointer">
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-2 md:gap-8">
                        <h4 className="CalSans text-4xl">
                            01
                        </h4>
                        <div className="service-content">
                            <h6 className="mb-3 CalSans text-xl lg:text-2xl xl:text-4xl">
                                Design de interior para residencias
                            </h6>
                            <p className="GolosText text-neutral-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam sequi vitae tenetur asperiores similique. Est ipsa consequuntur voluptas odio laudantium similique, sequi saepe vel, delectus accusamus incidunt corrupti quasi.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-4">
                        <div className="flex-1 lg:opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <ImageZoom zoom={80}>
                                <Image
                                    src="/images/home/image-service-01.jpg"
                                    alt="Design de interior para residencias"
                                    className="w-90 h-37.5 lg:scale-30 group-hover:scale-100 transition-transform duration-500 service-img object-cover rounded-md border"
                                    width={500}
                                    height={500}
                                />
                            </ImageZoom>
                        </div>
                        <button className="flex justify-center items-center size-12 bg-(--prim) rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-amber-600 cursor-pointer">
                            <i className="bi bi-arrow-up-right text-xl transition-transform duration-300 group-hover:rotate-45" />
                        </button>
                    </div>
                </div>
                <div className="pb-5 group flex flex-col md:flex-row justify-between w-full gap-2 md:gap-8 hover:border-b hover:border-[#8383834d] transition-all duration-200 cursor-pointer">
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-2 md:gap-8">
                        <h4 className="CalSans text-4xl">
                            02
                        </h4>
                        <div className="service-content">
                            <h6 className="mb-3 CalSans text-xl lg:text-2xl xl:text-4xl">
                                Design de interior para comércios
                            </h6>
                            <p className="GolosText text-neutral-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam sequi vitae tenetur asperiores similique. Est ipsa consequuntur voluptas odio laudantium similique, sequi saepe vel, delectus accusamus incidunt corrupti quasi.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-4">
                        <div className="flex-1 lg:opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <ImageZoom zoom={80}>
                                <Image
                                    src="/images/home/image-service-02.jpg"
                                    alt="Design de interior para comércios"
                                    className="w-90 h-37.5 lg:scale-30 group-hover:scale-100 transition-transform duration-500 service-img object-cover rounded-md border"
                                    width={500}
                                    height={500}
                                />
                            </ImageZoom>
                        </div>
                        <button className="flex justify-center items-center size-12 bg-(--prim) rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-amber-600 cursor-pointer">
                            <i className="bi bi-arrow-up-right text-xl transition-transform duration-300 group-hover:rotate-45" />
                        </button>
                    </div>
                </div>
                <div className="pb-5 group flex flex-col md:flex-row justify-between w-full gap-2 md:gap-8 hover:border-b hover:border-[#8383834d] transition-all duration-200 cursor-pointer">
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-2 md:gap-8">
                        <h4 className="CalSans text-4xl">
                            03
                        </h4>
                        <div className="service-content">
                            <h6 className="mb-3 CalSans text-xl lg:text-2xl xl:text-4xl">
                                Consultoria para criação de projeto
                            </h6>
                            <p className="GolosText text-neutral-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam sequi vitae tenetur asperiores similique. Est ipsa consequuntur voluptas odio laudantium similique, sequi saepe vel, delectus accusamus incidunt corrupti quasi.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-4">
                        <div className="flex-1 lg:opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <ImageZoom zoom={80}>
                                <Image
                                    src="/images/home/image-service-03.jpg"
                                    alt="Consultoria para criação de projeto"
                                    className="w-90 h-37.5 lg:scale-30 group-hover:scale-100 transition-transform duration-500 service-img object-cover rounded-md border"
                                    width={500}
                                    height={500}
                                />
                            </ImageZoom>
                        </div>
                        <button className="flex justify-center items-center size-12 bg-(--prim) rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-amber-600 cursor-pointer">
                            <i className="bi bi-arrow-up-right text-xl transition-transform duration-300 group-hover:rotate-45" />
                        </button>
                    </div>
                </div>
                <div className="pb-5 group flex flex-col md:flex-row justify-between w-full gap-2 md:gap-8 hover:border-b hover:border-[#8383834d] transition-all duration-200 cursor-pointer">
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-2 md:gap-8">
                        <h4 className="CalSans text-4xl">
                            04
                        </h4>
                        <div className="service-content">
                            <h6 className="mb-3 CalSans text-xl lg:text-2xl xl:text-4xl">
                                Design de exterior e paisagismo
                            </h6>
                            <p className="GolosText text-neutral-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam sequi vitae tenetur asperiores similique. Est ipsa consequuntur voluptas odio laudantium similique, sequi saepe vel, delectus accusamus incidunt corrupti quasi.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-4">
                        <div className="flex-1 lg:opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <ImageZoom zoom={80}>
                                <Image
                                    src="/images/home/image-service-04.jpg"
                                    alt="Design de exterior e paisagismo"
                                    className="w-90 h-37.5 lg:scale-30 group-hover:scale-100 transition-transform duration-500 service-img object-cover rounded-md border"
                                    width={500}
                                    height={500}
                                />
                            </ImageZoom>
                        </div>
                        <button className="flex justify-center items-center size-12 bg-(--prim) rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-amber-600 cursor-pointer">
                            <i className="bi bi-arrow-up-right text-xl transition-transform duration-300 group-hover:rotate-45" />
                        </button>
                    </div>
                </div>
                <div className="pb-5 group flex flex-col md:flex-row justify-between w-full gap-2 md:gap-8 hover:border-b hover:border-[#8383834d] transition-all duration-200 cursor-pointer">
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-2 md:gap-8">
                        <h4 className="CalSans text-4xl">
                            05
                        </h4>
                        <div className="service-content">
                            <h6 className="mb-3 CalSans text-xl lg:text-2xl xl:text-4xl">
                                Renovação e Remodelagem de interiores
                            </h6>
                            <p className="GolosText text-neutral-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam sequi vitae tenetur asperiores similique. Est ipsa consequuntur voluptas odio laudantium similique, sequi saepe vel, delectus accusamus incidunt corrupti quasi.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-4">
                        <div className="flex-1 lg:opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <ImageZoom zoom={80}>
                                <Image
                                    src="/images/home/image-service-05.jpg"
                                    alt="Renovação e Remodelagem de interiores"
                                    className="w-90 h-37.5 lg:scale-30 group-hover:scale-100 transition-transform duration-500 service-img object-cover rounded-md border"
                                    width={500}
                                    height={500}
                                />
                            </ImageZoom>
                        </div>
                        <button className="flex justify-center items-center size-12 bg-(--prim) rounded-full transition-all duration-300 group-hover:shadow-md group-hover:shadow-amber-600 cursor-pointer">
                            <i className="bi bi-arrow-up-right text-xl transition-transform duration-300 group-hover:rotate-45" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative px-[10%] flex justify-end">
                <Image
                    src="/images/home/image-service-06.png"
                    alt="Design de interior para residencias"
                    className="absolute right-0"
                    width={800}
                    height={800}
                />
            </div>
        </section>
    )
}