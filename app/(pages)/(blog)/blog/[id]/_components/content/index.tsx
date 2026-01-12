"use client"
import { BlogPost } from "@/app/types"

interface ContentProps {
    content: BlogPost
}

export const Content = ({ content }: ContentProps) => {
    return (
        <div className="pt-8">
            <div className="mb-6">
                <h5 className="CalSans text-xl md:text-3xl">
                    Design de interior
                </h5>
                <p className="mt-3 GolosText">
                    {content.textInteriorDesign}
                </p>
            </div>
            <div className="mb-6">
                <h5 className="CalSans text-xl md:text-3xl">
                    Paisagismo
                </h5>
                <p className="mt-3 GolosText">
                    {content.textLandscaping}
                </p>
            </div>
            <div className="mb-6">
                <h5 className="CalSans text-xl md:text-3xl">
                    Design 2D/3D
                </h5>
                <p className="mt-3 GolosText">
                    {content.textDesign}
                </p>
            </div>
            <div className="mb-6">
                <h5 className="CalSans text-xl md:text-3xl">
                    Mobília
                </h5>
                <p className="mt-3 GolosText">
                    {content.textFurniture}
                </p>
            </div>
        </div>
    )
}