"use client"

import { Logo } from "../logo"

export const Footer = () => {
    return (
        <footer className="w-full pt-20 px-[4%] md:px-[8%] lg:px-[5%] overflow-hidden bg-black">
            <div className="lg:mb-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-16 lg:gap-0 text-white">
                <Logo fontSize="text-4xl" color="text-white" />
                <div className="text-center lg:text-left">
                    <div className="mb-5 flex flex-col lg:flex-row items-center gap-x-2">
                        <div className="w-6 h-2 bg-white" />
                        <p className="GolosText">
                            Institucional
                        </p>
                    </div>
                    <ul className="flex flex-col gap-y-3 GolosText">
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Sobre nós
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Serviços
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Galeria
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Blog
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Nossa equipe
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Fale conosco
                        </li>
                    </ul>
                </div>
                <div className="text-center lg:text-left">
                    <div className="mb-5 flex flex-col lg:flex-row items-center gap-x-2">
                        <div className="w-6 h-2 bg-white" />
                        <p className="GolosText">
                            Segurança
                        </p>
                    </div>
                    <ul className="flex flex-col gap-y-3 GolosText">
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Privacidade
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Cookies
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Acessibilidade
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Conduta e ética
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Central de ajuda
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Termos e condições
                        </li>
                    </ul>
                </div>
                <div className="text-center lg:text-left">
                    <div className="mb-5 flex flex-col lg:flex-row items-center gap-x-2">
                        <div className="w-6 h-2 bg-white" />
                        <p className="GolosText">
                            Externo
                        </p>
                    </div>
                    <ul className="flex flex-col gap-y-3 GolosText">
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Projetos
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Parceiros
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Programa de parceiros
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Programa de afiliados
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Termos e condições
                        </li>
                        <li className="transition-all duration-200 hover:text-(--prim) cursor-pointer">
                            Suporte
                        </li>
                    </ul>
                </div>
                <div className="text-center lg:text-left">
                    <div>
                        <p className="GolosText text-(--prim) text-2xl font-bold">
                            +55 (11) 98765-4321
                        </p>
                        <p className="my-2 GolosText text-lg text-white">
                            archi.io@gmail.com
                        </p>
                        <div className="mt-3 flex justify-center lg:justify-start items-center gap-x-4">
                            <i className="bi bi-instagram text-xl transition-transform duration-200 ease-in hover:-translate-y-1 cursor-pointer" />
                            <i className="bi bi-tiktok text-xl transition-transform duration-200 ease-in hover:-translate-y-1 cursor-pointer" />
                            <i className="bi bi-whatsapp text-xl transition-transform duration-200 ease-in hover:-translate-y-1 cursor-pointer" />
                            <i className="bi bi-twitter-x text-xl transition-transform duration-200 ease-in hover:-translate-y-1 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="translate-y-8 lg:translate-y-10 w-full flex justify-center overflow-hidden">
                <h6 className="Audiowide text-[80px] md:text-[150px] lg:text-[300px] md:leading-35 lg:leading-62.5 text-[#090909]">
                    Arch.io
                </h6>
            </div>
        </footer>
    )
}