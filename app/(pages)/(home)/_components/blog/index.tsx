"use client"
import { blogData } from "@/app/utils/constants"
import { Title } from "@/components/common/title"
import Image from "next/image"

export const Blog = () => {
    return (
        <section className="w-full py-16 lg:py-36 px-[4%] md:px-[8%] lg:px-[5%]">
            <Title
                tagTitle="Blogs e artigos recentes"
                titleOne="Confira nossos blogs e"
                titleTwo="Nossos artigos mais recentes"
                titleThree="E fique por dentro de tudo."
            />
            <div className="pt-24 w-full flex flex-col lg:flex-row gap-5">
                <div className="lg:w-[45%]">
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src="/images/home/image-blog-1.jpg"
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full hover:scale-125 transition-transform duration-300 ease-in-out cursor-zoom-in"
                            />
                        </div>
                        <div className="absolute top-4 left-4 w-fit py-2 px-4 bg-(--prim) rounded-full GolosText font-light uppercase text-white">
                            Design interior
                        </div>
                    </div>
                    <div className="py-3">
                        <p className="GolosText">
                            Publicado por <strong className="text-(--prim)">admin</strong>
                        </p>
                        <h6 className="mt-3 CalSans text-3xl md:text-4xl">
                            Tendências de design funcional que combinam estilo e conforto.
                        </h6>
                        <p className="mt-3 GolosText">
                            O design de interiores moderno tem como objetivo criar um espaço elegante, funcional e esteticamente agradável que reflita a vida contemporânea. Seja para renovar um único cômodo ou redesenhar toda a sua casa.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 lg:flex-1">
                    {blogData.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col lg:flex-row items-center gap-5"
                        >
                            <div className="relative w-full lg:w-[50%] overflow-hidden">
                                <div className="overflow-hidden rounded-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        className="w-full lg:h-60 object-cover hover:scale-125 transition-transform duration-300 ease-in-out cursor-zoom-in"
                                    />
                                </div>
                                <div className="absolute top-4 left-4 w-fit py-2 px-4 bg-(--prim) rounded-full GolosText font-light uppercase text-white">
                                    Design interior
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-1">
                                <div className="flex items-center gap-1 GolosText text-neutral-500">
                                    <span className="mr-2">
                                        {item.date}
                                    </span>
                                    <span className="size-1.5 bg-(--prim) rounded-full" />
                                    <span className="">
                                        Publicado por <strong className="text-(--prim)">{item.postBy}</strong>
                                    </span>
                                </div>
                                <div className="mt-4 flex flex-col gap-y-2">
                                    <h6 className="CalSans text-2xl">
                                        {item.title}
                                    </h6>
                                    <p className="GolosText">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}