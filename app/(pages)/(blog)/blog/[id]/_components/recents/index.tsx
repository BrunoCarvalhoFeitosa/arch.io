"use client"
import Image from "next/image"
import Link from "next/link"
import { BlogPost } from "@/app/types"

interface RecentsProps {
    posts: BlogPost[]
}

export const Recents = ({ posts }: RecentsProps) => {
    return (
        <div className="pt-12">
            <h3 className="mb-3 CalSans text-xl md:text-2xl">
                Posts recentes
            </h3>
            <div className="flex flex-col gap-y-3">
                {posts.map((post) => (
                    <Link href={`${post.link}/${post.id}`}>
                        <div
                            key={post.id}
                            className="flex flex-col md:flex-row items-center gap-3"
                        >
                            <div>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={500}
                                    height={500}
                                    className="w-full md:w-[240px] md:h-[150px] object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="GolosText text-neutral-500">
                                    {post.date}
                                </p>
                                <h4 className="CalSans text-lg">
                                    {post.title}
                                </h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
