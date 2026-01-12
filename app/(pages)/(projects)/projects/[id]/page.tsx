import Link from "next/link"
import { Carousel } from "./_components/carousel"
import { projectsData } from "@/app/utils/constants"
import { Title } from "./_components/title"
import { Details } from "./_components/details"
import { Banner } from "./_components/banner"
import { Concept } from "./_components/concept"
import { Idea } from "./_components/idea"
import { Result } from "./_components/result"
import "swiper/css"

interface ProjectIdPageProps {
  params: {
    id: string
  }
}

const ProjectIdPage = async ({ params }: ProjectIdPageProps) => {
    const { id } = await params
    const projectId = Number(id)
    const project = projectsData.find(
        (p) => p.id === projectId
    )

    if (!project) {
        return (
            <main className="py-20 px-4 min-h-[50dvh] flex flex-col justify-center items-center">
                <span className="CalSans text-3xl font-bold text-(--prim)">
                    404
                </span>
                <h1 className="CalSans text-center text-5xl">
                    Projeto não encontrado
                </h1>
                <p className="GolosText">
                    O projeto que você procurava não existe ou não foi encontrado.
                </p>
                <div className="flex items-center gap-5 mt-4">
                    <Link
                        href="/projects"
                        className="py-3 px-4 bg-(--prim) GolosText"
                    >
                        Voltar para projetos
                    </Link>
                    <Link
                        href="/contact"
                        className="GolosText"
                    >
                        Contatar suporte
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div className="w-full">
                <Banner project={project} />
                <div className="py-10 px-[4%] md:px-[8%] lg:px-[5%] flex flex-col">
                    <Title project={project} />
                    <Details project={project} />
                    <Concept project={project} />
                    <Idea project={project} />
                    <Result project={project} />
                </div>
                <Carousel project={project} />
            </div>
        </main>
    )
}

export default ProjectIdPage
