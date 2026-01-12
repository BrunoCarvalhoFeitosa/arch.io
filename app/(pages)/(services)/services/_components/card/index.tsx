"use client"
import Image from "next/image"

interface CardProps {
    service: {
        id: number
        image: string
        title: string
        description: string
    }
}

export const Card = ({ service }: CardProps) => {
    return (
        <div className="group relative overflow-hidden cursor-zoom-in">
            <div className="transition-all duration-300 brightness-40 group-hover:brightness-75">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={800}
                    className="transition-transform duration-300 group-hover:scale-125"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-10">
                <div className="CalSans text-4xl text-white">
                    0{service.id}
                </div>
                <div className="flex flex-col gap-y-2">
                    <h2 className="GolosText text-3xl text-white">
                        {service.title}
                    </h2>
                    <p className="GolosText text-sm text-white">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
