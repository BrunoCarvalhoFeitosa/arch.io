"use client"
import { Tag } from "@/components/common/tag"

export const Newsletter = () => {
    return (
        <section className="mx-auto pb-10 max-w-4xl flex flex-col justify-center items-center">
            <Tag title="Assine a newsletter" />
            <div className="my-4">
                <h6 className="flex flex-col CalSans text-2xl md:text-5xl xl:text-6xl text-center">
                    <span>
                        Assine nossa newsletter e
                    </span>
                    <span className="text-(--prim)">
                        fique por dentro das novidades.
                    </span>
                </h6>
                <p className="mt-5 GolosText text-center">
                    Receba conteúdos exclusivos sobre design de interiores e exteriores, tendências do mercado, dicas práticas, inspirações e novidades selecionadas por nossos especialistas. Aprenda algo novo a cada edição e acompanhe de perto tudo o que está transformando o setor. Informação de qualidade, direto no seu e-mail.
                </p>
                <form className="relative mt-4 mx-auto w-[80%]">
                    <input
                        type="email"
                        placeholder="Digite seu endereço de e-mail"
                        className="pl-3 py-5 w-full GolosText border-b border-[#8383834d] outline-none"
                    />
                    <button className="absolute top-1/2 -translate-y-2/4 right-0 group/button flex size-12 items-center justify-center rounded-full bg-(--prim) transition-all duration-300 hover:shadow-md shadow-amber-600 cursor-pointer">
                        <i className="bi bi-arrow-up-right text-xl transition-transform duration-300 rotate-45 lg:group-hover/button:rotate-45" />
                    </button>
                </form>
            </div>
        </section>
    )
}