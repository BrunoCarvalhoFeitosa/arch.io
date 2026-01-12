"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { navLinks } from "@/app/utils/constants"

interface MenuMobileProps {
    menuMobileOpen: boolean
    setMenuMobileOpen: (menuMobileOpen: boolean) => void
    openDropdowns: Record<string, boolean>
    setOpenDropdowns: (openDropdowns: Record<string, boolean>) => void
    toggleDropdown: (label: string) => void
}

export const MenuMobile = ({ menuMobileOpen, setMenuMobileOpen, openDropdowns, setOpenDropdowns, toggleDropdown }: MenuMobileProps) => {
    return (
        <div className="lg:hidden flex flex-1 justify-end">
            <div>
                <button
                    type="button"
                    onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                    className="text-2xl"
                >
                    <i className={cn(
                        "transition-all duration-300",
                        menuMobileOpen ? "ri-close-line" : "ri-menu-3-line"
                    )} />
                </button>
            </div>
            <div className={cn(
                "lg:hidden absolute top-20 left-0 w-full bg-(--white) border-t border-zinc-200 overflow-hidden transition-all",
                menuMobileOpen ? "py-4 max-h-175 opacity-100" : "max-h-0 py-0 opacity-0"
            )}>
                <div className="space-y-3">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            {link.dropdown ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => toggleDropdown(link.label)}
                                        className="py-3 px-4 w-full flex justify-between items-center text-left font-medium"
                                    >
                                        {link.label}
                                        <i className={cn(
                                            "ri-arrow-down-s-line transition-transform duration-300",
                                            openDropdowns[link.label] ? "rotate-180" : ""
                                        )} />
                                    </button>
                                    <div className={cn(
                                        "pl-6 pr-4 bg-gray-800/10 transition-all",
                                        openDropdowns[link.label] ? "max-h-75 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
                                    )}>

                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="block py-2 pl-4 hover:text-(--prim) transition"
                                                onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="block py-3 px-4 text-(--text) Audiowide text-lg font-medium hover:text-(--prim-color) transition"
                                    onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
