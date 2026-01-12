"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Title } from "@/components/common/title"
import { faqData } from "@/app/utils/constants"

export const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="w-full pt-10 md:pt-0 lg:pt-20 px-[4%] md:px-[8%] lg:px-[5%]">
            <Title
                tagTitle="Perguntas frequentes"
                titleOne="Respostas rápidas e claras"
                titleTwo="Para perguntais mais comuns"
                titleThree="Realizadas pelos nossos clientes."
            />
            <div className="w-full">
                <div className="my-12 lg:my-24">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="py-8 border-b border-[#8383834d]"
                        >
                            <button
                                className="w-full flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(index)}
                            >
                                <div>
                                    <h4 className="flex items-center gap-5">
                                        <span className="CalSans text-(--prim) text-3xl md:text-5xl">
                                            {item.id}
                                        </span>
                                        <span className="pr-8 md:pr-0 GolosText text-base md:text-2xl text-left font-bold">
                                            {item.question}
                                        </span>
                                    </h4>
                                </div>
                                <div>
                                    <i className={cn(
                                        "text-4xl text-(--prim)",
                                        openIndex === index ? "bi bi-dash" : "bi bi-plus"
                                    )}/>
                                </div>
                            </button>
                            <div className={cn(
                                " transition-all duration-300 ease-in-out",
                                openIndex === index ? "py-3 max-h-75 opacity-100" : "py-0 max-h-0 opacity-0"
                            )}>
                                <p className="GolosText">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}