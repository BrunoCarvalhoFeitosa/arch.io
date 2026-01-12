"use client"
import Link from "next/link"
import { navLinks } from "@/app/utils/constants"

interface MenuDesktopProps {
    isScrolled: boolean
}

export const MenuDesktop = ({ isScrolled }: MenuDesktopProps) => {
    return (
        <div className="hidden lg:flex justify-between items-center flex-1">
            <div className="flex relative space-x-6 menu-link ms-10">
                {navLinks.map((link) => link.dropdown ? (
                    <div key={link.label} className="relative group z-20">
                        <Link
                            href={link.href}
                            className="flex items-center gap-1 text-xl menu-links hover:text-(--prim) transition-all duration-300"
                        >
                            {link.label} <i className="ri-arrow-down-s-line" />
                        </Link>
                        <div className="absolute left-0 top-8 min-w-45 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-(--white) shadow-xl border border-gray-50/10 rounded-lg z-10">
                            {link.dropdown && link.dropdown.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block py-2 px-4 text-md rounded-md hover:text-(--prim) transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-xl hover:text-(--prim) transition-all duration-300"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="hidden xl:flex items-center gap-5">
                <div className="flex gap-3">
                    <div className="flex items-center">
                        <i className="bi bi-telephone-inbound text-2xl py-2 px-3 rounded-full" />
                        <div className="flex flex-col justify-center">
                            <p className="leading-none">
                                Ligue agora
                            </p>
                            <h3 className="GolosText text-(--prim)">
                                +55 (11) 98765-4321
                            </h3>
                        </div>
                    </div>
                    <div className="hidden 2xl:block">
                        <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden GolosText text-white transition duration-300 ease-out border border-(--prim) shadow-md group cursor-pointer">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-(--prim) group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-(--prim) transition-all duration-300 transform group-hover:translate-x-full ease">
                                Obter uma cotação
                            </span>
                            <span className="relative invisible">
                                Obter uma cotação
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}