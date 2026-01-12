"use client"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/app/types"

interface CardProps {
    project: Project
    index: number
}

export const Card = ({ project, index }: CardProps) => {
    return (
        <Link
            key={index}
            href={`/projects/${project.id}`}
        >
            <div className="flex flex-col gap-y-3">
                <div className="relative h-100 overflow-hidden">
                    <Image
                        src={project.principalImage}
                        alt={project.title}
                        width={700}
                        height={700}
                        className="w-full h-full brightness-40 transition-all duration-300 hover:brightness-75 hover:scale-110 object-cover object-center"
                    />
                    <div className="absolute top-6 left-6 py-2 px-4 GolosText text-white uppercase border border-gray-300 z-10">
                        {project.tag}
                    </div>
                </div>
                <div>
                    <h2 className="GolosText text-2xl font-bold">
                        {project.title}
                    </h2>
                    <p className="GolosText text-lg text-neutral-500">
                        {project.state}, {project.country}
                    </p>
                    <p className="GolosText text-neutral-500">
                        {project.date}
                    </p>
                </div>
            </div>
        </Link>
    )
}