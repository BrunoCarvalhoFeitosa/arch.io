import { BannerBreadcrumb } from "@/components/common/banner-breadcrumb"
import { Title } from "@/components/common/title"
import { Info } from "./_components/info"
import { Banner } from "./_components/banner"
import { Form } from "./_components/form"
import { Map } from "./_components/map"

const ContactPage = () => {
    return (
        <main>
            <BannerBreadcrumb
                image="/images/common/image-banner-breadcrumb.jpeg"
                title="Entre em contato conosco"
                urls={["Home", "Contato"]}
            />
            <div className="w-full pt-20 pb-12 lg:pt-32 px-[4%] md:px-[8%] lg:px-[5%]">
                <Title
                    tagTitle="Entre em contato conosco"
                    titleOne="Tem um projeto em mente?"
                    titleTwo="Entre em contato conosco e "
                    titleThree="Vamos idealiza-lo juntos."
                />
                <Info />
                <div className="mt-8 flex flex-col lg:flex-row gap-10">
                    <Banner />
                    <Form />
                </div>
            </div>
            <Map />
        </main>
    )
}

export default ContactPage
