"use client"
import { Tag } from "../tag"

interface TitleProps {
    tagTitle: string
    titleOne: string
    titleTwo?: string
    titleThree?: string
}

export const Title = ({ tagTitle, titleOne, titleTwo, titleThree }: TitleProps) => {
    return (
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="pt-8 w-full lg:w-1/3 title">
                <Tag title={tagTitle} />
            </div>
            <div className="w-full lg:w-2/3">
                <h3 className="flex flex-col CalSans text-2xl md:text-4xl xl:text-6xl lg:text-center">
                    {titleOne && (
                        <span>
                            {titleOne}
                        </span>
                    )}
                    {titleTwo && (
                        <span className="text-(--prim)">
                            {titleTwo}
                        </span>
                    )}
                    {titleThree && (
                        <span>
                            {titleThree}
                        </span>
                    )}
                </h3>
            </div>
        </div>
    )
}
