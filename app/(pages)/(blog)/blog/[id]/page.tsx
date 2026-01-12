import { blogData } from "@/app/utils/constants"
import { Title } from "./_components/title"
import { BannerBreadcrumb } from "@/components/common/banner-breadcrumb"
import { Categories } from "./_components/categories"
import { Banner } from "./_components/banner"
import { Recents } from "./_components/recents"
import { Content } from "./_components/content"
import Link from "next/link"

interface BlogIdPageProps {
  params: {
    id: string
  }
}

const BlogIdPage = async ({ params }: BlogIdPageProps) => {
    const { id } = await params
    const blogId = Number(id)
    const blog = blogData.find(
        (b) => b.id === blogId
    )

    if (!blog) {
        return (
            <main className="py-20 px-4 min-h-[50dvh] flex flex-col justify-center items-center">
                <span className="CalSans text-3xl font-bold text-(--prim)">
                    404
                </span>
                <h1 className="CalSans text-center text-5xl">
                    Post não encontrado
                </h1>
                <p className="GolosText">
                    O post que você procurava não existe ou não foi encontrado.
                </p>
                <div className="flex items-center gap-5 mt-4">
                    <Link
                        href="/blog"
                        className="py-3 px-4 bg-(--prim) GolosText"
                    >
                        Voltar para posts
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

    console.log("blog", blog)

    return (
        <main className="w-full">
            <BannerBreadcrumb
                image="/images/common/image-banner-breadcrumb.jpeg"
                title="Blog"
                urls={["Home", "Blog"]}
            />
            <div className="py-12 flex flex-col xl:flex-row px-[4%] md:px-[8%] lg:px-[5%] gap-10 xl:gap-20">
                <div className="w-full xl:w-[60%]">
                    <Title blog={blog} />
                    <Banner image={blog.image} title={blog.title} />
                    <Content content={blog} />
                </div>
                <aside className="w-full xl:flex-1 xl:sticky xl:top-8 xl:h-full">
                    <Categories categories={blog.categories} />
                    <Recents posts={blogData} />
                </aside>
            </div>
        </main>
    )
}

export default BlogIdPage
