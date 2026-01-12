"use client"
import Image from "next/image"
import CountUp from "react-countup"
import { Title } from "@/components/common/title"
import { ImageZoom } from "@/components/common/image-zoom"

export const Prices = () => {
    return (
        <section className="py-16 md:py-24 lg:py-32 px-[4%] md:px-[8%] lg:px-[5%]">
            <Title
                tagTitle="Preços e condições"
                titleOne="Condições especiais"
                titleTwo="Para clientes especiais"
                titleThree="Comece este ano com tudo."
            />
            <div className="mt-10 lg:mt-32 xl:mt-20 flex flex-col xl:flex-row items-center gap-10">
                <div className="w-full xl:w-1/2 order-2 lg:order-1">
                    <ImageZoom zoom={100}>
                        <Image
                            src="/images/home/image-price.jpg"
                            alt=""
                            width={580}
                            height={580}
                            className="w-full xl:w-125 h-145 object-cover"
                        />
                    </ImageZoom>
                </div>
                <div className="w-full lg:w-1/1 order-1 lg:order-2">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div>
                            <h4 className="mb-3 CalSans text-xl md:text-3xl">
                                Plano básico
                            </h4>
                            <p className="GolosText">
                                Nosso plano básico oferece recursos essenciais a um preço acessível, pronto para uso sem comprometer seu orçamento.
                            </p>
                            <div className="mt-5 py-3 flex items-start border-b border-[#8383834d]">
                                <div className="CalSans text-5xl md:text-7xl text-(--prim)">
                                    R$<CountUp
                                            start={0}
                                            end={799}
                                            duration={2.5}
                                            enableScrollSpy
                                        />.0
                                </div>
                                <div className="CalSans text-xl capitalize text-neutral-600">
                                    / Por mês
                                </div>
                            </div>
                            <ul className="my-4 flex flex-col gap-y-2">
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Individuais e pequenos projetos
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Acesso a recursos de design
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Biblioteca limitada de itens decorativos
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Suporte por e-mail
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Atualizações mensais
                                    </p>
                                </li>
                            </ul>
                            <button className="mt-3 py-3 pl-5 pr-10 bg-(--prim) GolosText text-xl transition-all duration-300 hover:shadow-md shadow-amber-600 cursor-pointer">
                                Comece agora
                            </button>
                        </div>
                        <div>
                            <h4 className="mb-3 CalSans text-xl md:text-3xl">
                                Plano premium
                            </h4>
                            <p className="GolosText">
                                Nosso plano básico oferece recursos essenciais a um preço acessível, pronto para uso sem comprometer seu orçamento.
                            </p>
                            <div className="mt-5 py-3 flex items-start border-b border-[#8383834d]">
                                <div className="CalSans text-5xl md:text-7xl text-(--prim)">
                                    R$<CountUp
                                            start={0}
                                            end={1399}
                                            duration={2.5}
                                            enableScrollSpy
                                        />.0
                                </div>
                                <div className="CalSans text-xl capitalize text-neutral-600">
                                    / Por mês
                                </div>
                            </div>
                            <ul className="my-4 flex flex-col gap-y-2">
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Equipes pequenas e empresas em crescimento
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Acesso total aos recursos de design
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Ampla biblioteca de itens decorativos
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Suporte prioritário por e-mail
                                    </p>
                                </li>
                                <li>
                                    <p className="flex items-center gap-1 GolosText">
                                        <i className="bi bi-check-circle-fill text-(--prim)" />
                                        Atualizações semanais
                                    </p>
                                </li>
                            </ul>
                            <button className="mt-3 py-3 pl-5 pr-10 bg-(--prim) GolosText text-xl transition-all duration-300 hover:shadow-md shadow-amber-600 cursor-pointer">
                                Comece agora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}