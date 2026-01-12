"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
    fontSize: string
    color?: string
}

export const Logo = ({ fontSize, color }: LogoProps) => {
    return (
        <Link
            href="/"
            className={cn(
                "flex items-center Audiowide font-bold text-black",
                fontSize,
                color
            )}
        >
            <div>
                Arch
            </div>
            <div className="text-(--prim)">
                .io
            </div>
        </Link>
    )
}
