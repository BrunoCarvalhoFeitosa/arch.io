"use client"
import Image from "next/image"

interface CardProps {
    team: {
        name: string
        specialization: string
        image: string
    }
}

export const Card = ({ team }: CardProps) => {
    return (
        <div className="group relative overflow-hidden cursor-zoom-in">
            <div className="transition-all duration-300 brightness-40 group-hover:brightness-75">
                <Image
                    src={team.image}
                    alt={team.name}
                    width={800}
                    height={800}
                    className="transition-transform duration-300 group-hover:scale-125"
                />
            </div>
            <div className="absolute top-0 left-0 translate-y-20 transition-transform duration-500 group-hover:translate-y-0 w-full h-full flex flex-col justify-end p-10 z-10">
                <div className="flex flex-col">
                    <h2 className="GolosText text-3xl lg:text-2xl xl:text-4xl text-white">
                        {team.name}
                    </h2>
                    <p className="GolosText text-white">
                        {team.specialization}
                    </p>
                    <ul className="mt-4 flex items-center gap-x-2">
                        <li className="group/social size-10 flex justify-center items-center border border-white hover:bg-white rounded-full cursor-pointer">
                            <i className="ri-facebook-fill text-lg text-white group-hover/social:text-black" />
                        </li>
                        <li className="group/social size-10 flex justify-center items-center border border-white hover:bg-white rounded-full cursor-pointer">
                            <i className="ri-twitter-x-fill text-base text-white group-hover/social:text-black" />
                        </li>
                        <li className="group/social size-10 flex justify-center items-center border border-white hover:bg-white rounded-full cursor-pointer">
                            <i className="bi bi-instagram text-base text-white group-hover/social:text-black" />
                        </li>
                        <li className="group/social size-10 flex justify-center items-center border border-white hover:bg-white rounded-full cursor-pointer">
                            <i className="ri-linkedin-fill text-lg text-white group-hover/social:text-black" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
