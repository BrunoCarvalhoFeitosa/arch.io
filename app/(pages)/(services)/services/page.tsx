import { servicesData } from "@/app/utils/constants"
import { BannerBreadcrumb } from "@/components/common/banner-breadcrumb"
import { Title } from "@/components/common/title"
import { Card } from "./_components/card"

const ServicesPage = () => {
    return (
        <main>
            <BannerBreadcrumb
                image="/images/common/image-banner-breadcrumb.jpeg"
                title="Serviços que prestamos"
                urls={["Home", "Serviços"]}
            />
            <div className="pt-32 px-[4%] md:px-[8%] lg:px-[5%]">
                <Title
                    tagTitle="Serviços que prestamos"
                    titleOne="Serviços de excelência que"
                    titleTwo="Oferecemos aos nossos clientes"
                    titleThree="Da consultoria à entrega final."
                />
                <div className="py-16 grid grid-cols-1 md:grid-cols-3">
                    {servicesData.map((service) => (
                        <Card
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default ServicesPage
