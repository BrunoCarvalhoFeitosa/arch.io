"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/common/logo"
import { MenuDesktop } from "@/components/common/menu-desktop"
import { MenuMobile } from "@/components/common/menu-mobile"

export const Navbar = () => {
    const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false)
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    
    const toggleDropdown = (label: string) => {
        setOpenDropdowns((prev) => (prev[label] ? {} : {[label]: true}))
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <nav className={cn(
            "w-full sticky top-0 bg-(--white) duration-500 transition-all z-100",
            isScrolled ? "shadow-md" : "shadow-none"
        )}>
            <div className="py-5 px-[4%] md:px-[8%] lg:px-[5%] flex justify-between items-center">
                <div className="w-full flex items-center gap-5">
                    <Logo fontSize="text-4xl md:text-5xl" />
                    <MenuDesktop isScrolled={isScrolled} />
                    <MenuMobile
                        menuMobileOpen={menuMobileOpen}
                        setMenuMobileOpen={setMenuMobileOpen}
                        openDropdowns={openDropdowns}
                        setOpenDropdowns={setOpenDropdowns}
                        toggleDropdown={toggleDropdown}
                    />
                </div>
            </div>
        </nav>
    )
}
