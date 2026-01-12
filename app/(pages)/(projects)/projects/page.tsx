import { Title } from "@/components/common/title"
import { Card } from "./_components/card"
import { projectsData } from "@/app/utils/constants"
import { BannerBreadcrumb } from "@/components/common/banner-breadcrumb"

const ProjectsPage = () => {
    return (
        <main>
            <BannerBreadcrumb
                image="/images/common/image-banner-breadcrumb.jpeg"
                title="Projetos arquitetados"
                urls={["Home", "Projetos"]}
            />
            <div className="py-20 px-[4%] md:px-[8%] lg:px-[5%]">
                <div className="w-full pb-18 lg:pt-10 lg:pb-24">
                    <Title
                        tagTitle="Projetos arquitetados"
                        titleOne="Projetos arquitetados"
                        titleTwo="pela nossa competente"
                        titleThree="equipe de profissionais."
                    />
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 lg:gap-y-10">
                    {projectsData.map((project, index) => (
                        <Card
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage
