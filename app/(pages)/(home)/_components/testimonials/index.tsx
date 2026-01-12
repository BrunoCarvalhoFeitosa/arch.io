"use client"
import { Tag } from "@/components/common/tag"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { testimonialsData } from "@/app/utils/constants"

export const Testimonials = () => {
    return (
        <section className="w-full px-[8%] lg:px-[5%]">
            <div className="mx-auto max-w-3xl">
                <div className="flex justify-center">
                    <Tag
                        title="O que os clientes acham"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="my-4 CalSans text-2xl md:text-5xl xl:text-6xl text-center">
                        Eis o que os nossos clientes <br />
                        <span className="text-(--prim)">dizem em termos elogiosos.</span>
                    </h3>
                    <p className="GolosText text-center">
                        Abaixo deixamos uma seleção dos clientes que ficaram satisfeitos 
                        com os projetos que entregamos e solicitaram outros serviços novamente.
                    </p>
                </div>
            </div>
            <AnimatedTestimonials testimonials={testimonialsData} />
        </section>
    )
}
