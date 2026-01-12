"use client"
import { Project } from "@/app/types"
import { parseBudget } from "@/app/utils/helpers"
import CountUp from "react-countup"

interface DetailsProps {
    project: Project
}

export const Details = ({ project }: DetailsProps) => {
    return (
        <div className="py-3 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
            <div className="flex flex-col">
                <h3 className="GolosText text-xl font-black">
                    Arquiteto
                </h3>
                <p className="GolosText">
                    {project.architect}
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="GolosText text-xl font-black">
                    Tipo de projeto
                </h3>
                <p className="GolosText">
                    {project.projectType}
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="GolosText text-xl font-black">
                    Cliente
                </h3>
                <p className="GolosText">
                    {project.client}
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="GolosText text-xl font-black">
                    Duração contrato
                </h3>
                <p className="GolosText">
                    {project.terms}
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="GolosText text-xl font-black">
                    Estratégia
                </h3>
                <p className="GolosText">
                    {project.strategy}
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="GolosText text-xl font-black">
                    Entrega
                </h3>
                <p className="GolosText">
                    {project.date}
                </p>
            </div>
            <div className="flex flex-col">
                <h3 className="GolosText text-xl font-black">
                    Orçamento
                </h3>
                <p className="GolosText">
                    <CountUp
                        start={0}
                        end={parseBudget(project.budget)}
                        duration={2.5}
                        separator="."
                        decimal="," 
                        decimals={2}
                        prefix="R$ "
                        enableScrollSpy
                    />
                </p>
            </div>
        </div>
    )
}

