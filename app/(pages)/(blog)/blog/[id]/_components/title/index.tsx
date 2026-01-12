"use client"

import { BlogPost } from "@/app/types"

interface TitleProps {
    blog: BlogPost
}

export const Title = ({ blog }: TitleProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="px-3 py-2 bg-(--prim) Audiowide text-xl">
                    {blog.categories[0].category}
                </div>
                <div className="flex items-center gap-2">
                    <p className="GolosText text-neutral-500">
                        Publicado por <strong className="text-(--prim)">{blog.postBy}</strong>
                    </p>
                    <span className="GolosText">
                        -
                    </span>
                    <p className="GolosText text-neutral-500">
                        {blog.date}
                    </p>
                </div>
            </div>
            <div className="py-5 flex flex-col gap-3">
                <h1 className="CalSans text-2xl md:text-4xl lg:text-5xl">
                    {blog.title}
                </h1>
                <p>
                    {blog.description}
                </p>
            </div>
        </div>
    )
}