import { BannerBreadcrumb } from "@/components/common/banner-breadcrumb"
import { Title } from "@/components/common/title"
import { Card } from "./_components/card"
import { teamData } from "@/app/utils/constants"

const TeamPage = () => {
    return (
        <main>
            <BannerBreadcrumb
                image="/images/common/image-banner-breadcrumb.jpeg"
                title="Equipe"
                urls={["Home", "Equipe"]}
            />
            <div className="w-full pt-20 pb-12 lg:pt-32 px-[4%] md:px-[8%] lg:px-[5%]">
                <Title
                    tagTitle="Equipe de profissionais"
                    titleOne="Nossa equipe de profissionais"
                    titleTwo="Altamente qualificados para"
                    titleThree="Atender a sua necessidade."
                />
                <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {teamData.map((team, index) => (
                        <Card key={index} team={team} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default TeamPage
