"use client"

export const Info = () => {
    return (
        <div className="pt-20 flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="flex flex-col">
                <h2 className="mb-2 text-2xl font-bold text-neutral-500">
                    Endereço
                </h2>
                <p className="GolosText text-xl font-bold">
                    Avenida Paulista, 9212
                </p>
                <p className="GolosText">
                    São Paulo, BRA
                </p>
            </div>
            <div className="flex flex-col">
                <h2 className="mb-2 text-2xl font-bold text-neutral-500">
                    Suporte
                </h2>
                <p className="GolosText text-xl font-bold text-(--prim)">
                    +55 (11) 98765-4321
                </p>
                <p className="GolosText">
                    archi.io@gmail.com
                </p>
            </div>
        </div>
    )
}
