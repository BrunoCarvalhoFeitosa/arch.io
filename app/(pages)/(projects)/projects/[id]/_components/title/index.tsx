"use client"
import Link from "next/link"
import { Project } from "@/app/types"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

interface TitleProps {
    project: Project
}

export const Title = ({ project }: TitleProps) => {
    return (
        <div>
            <div className="-translate-y-17">
                <Link href="/projects" className="py-3 px-3 flex items-center gap-1 w-fit bg-(--prim)">
                    <HiOutlineArrowNarrowLeft className="text-3xl" />
                    <span className="Audiowide text-xl">
                        Ver outros projetos
                    </span>
                </Link>
            </div>
            <div className="pb-4 border-b border-gray-300">
                <h1 className="CalSans text-3xl md:text-5xl font-bold">
                    {project.title}
                </h1>
                <p className="GolosText text-lg text-neutral-500">
                    {project.state}, {project.country}
                </p>
            </div>
        </div>
    )
}
