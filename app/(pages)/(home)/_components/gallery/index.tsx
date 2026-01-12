"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const galleryData = [
    {
        id: 1,
        tag: "Residencial",
        number: "01",
        location: "Londres, Inglaterra",
        year: 2026,
        background: "/images/home/image-gallery-01.jpg",
        title: (
            <>
                Industrial <br /> Elegance Condo
            </>
        )
    },
    {
        id: 2,
        tag: "Residencial",
        number: "02",
        location: "Londres, Inglaterra",
        year: 2026,
        background: "/images/home/image-gallery-02.jpg",
        title: (
            <>
                Serene <br /> Space Studio
            </>
        )
    },
    {
        id: 3,
        tag: "Residencial",
        number: "03",
        location: "Londres, Inglaterra",
        year: 2026,
        background: "/images/home/image-gallery-03.jpg",
        title: (
            <>
                Urban Zen <br /> Apartment
            </>
        )
    },
]

const GalleryItem = ({ item }: { item: any }) => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 0.7]
    )

    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 200]
    )

    return (
        <motion.div
            ref={ref}
            className="Paralex-wrap sticky top-0 left-0 h-full z-40"
            style={{
                backgroundImage: `url(${item.background})`,
                scale,
                y: translateY,
                zIndex: item.id * 1
            }}
        >
            <div className="relative Paralex-content h-[80dvh] flex flex-col justify-between py-14 px-[8%] z-10">
                <div className="flex justify-between items-center gap-5">
                    <span className="py-2 px-4 GolosText text-white uppercase border border-gray-300">
                        {item.tag}
                    </span>
                    <span className="GolosText text-8xl font-extrabold text-(--prim)">
                        {item.number}
                    </span>
                </div>
                <div className="text-gray-300">
                    <h5 className="CalSans text-6xl md:text-8xl">
                        {item.title}
                    </h5>
                    <p className="mt-2 GolosText text-lg">
                        {item.location}
                    </p>
                    <p className="GolosText text-lg">
                        {item.year}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export const Gallery = () => {
    return (
        <section className="w-full">
            {galleryData.map((item) => (
                <GalleryItem
                    key={item.id}
                    item={item}
                />
            ))}
        </section>
    )
}
