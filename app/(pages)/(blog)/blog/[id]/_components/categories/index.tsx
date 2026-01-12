"use client"
import { BlogCategory } from "@/app/types"

interface CategoriesProps {
    categories: BlogCategory[]
}

export const Categories = ({ categories }: CategoriesProps) => {
    return (
        <div className="xl:pt-18">
            <h2 className="CalSans text-xl md:text-2xl">
                Categorias
            </h2>
            <ul className="mt-3">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="py-3 GolosText border-b border-[#8383834d] font-semibold"
                    >
                        {category.category}
                    </li>
                ))}
            </ul>
        </div>
    )
}