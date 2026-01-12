"use client"
import { Project } from "@/app/types"

interface ConceptProps {
    project: Project
}

export const Concept = ({ project }: ConceptProps) => {
    return (
        <div className="pt-12">
            <h2 className="CalSans text-4xl">
                Design/conceito
            </h2>
            <p className="mt-2 GolosText">
                {project.description}
            </p>
        </div>
    )
}
