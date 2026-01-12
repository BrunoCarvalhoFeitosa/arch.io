"use client"
import { Project } from "@/app/types"

interface IdeaProps {
    project: Project
}

export const Idea = ({ project }: IdeaProps) => {
    return (
        <div className="py-10">
            <div className="mb-7">
                <h4 className="CalSans text-3xl">
                    Ideia do cliente
                </h4>
                <p className="GolosText">
                    Após alguns encontros com o cliente, pudemos entender a sua necessidade e idealizamos o projeto de maneira digital. As exigências do cliente foram:
                </p>
            </div>
            {project.clientIdeas.map((idea, index) => (
                <div key={index} className="mt-3">
                    <h5 className="CalSans text-lg">
                        {idea.title}
                    </h5>
                    <p className="GolosText">
                        {idea.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
