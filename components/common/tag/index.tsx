"use client"
import { cn } from "@/lib/utils"

interface TagProps {
    title: string
    className?: string
}

export const Tag = ({ title, className }: TagProps) => {
    return (
        <div className={cn(
            "py-2 px-4 flex items-center gap-2 w-fit border rounded-full",
            className ? className : "border-gray-400 bg-white"
        )}>
            <div className="w-2.5 h-2.5 block rounded-full bg-(--prim) animate-ping" />
            <h2 className="GolosText font-bold">
                {title}
            </h2>
        </div>
    )
}
