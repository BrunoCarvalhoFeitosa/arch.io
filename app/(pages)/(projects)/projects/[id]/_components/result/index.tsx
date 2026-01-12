"use client"
import { Project } from "@/app/types"

interface ResultProps {
    project: Project
}

export const Result = ({ project }: ResultProps) => {
    return (
        <div className="w-full">
            <div className="mb-8">
                <h5 className="mb-3 CalSans text-3xl">
                    Incrível resultado
                </h5>
                <p className="GolosText">
                    O desenvolvimento deste projeto foi uma verdadeira jornada de criatividade e precisão. Desde o início, nosso objetivo foi transformar a visão do cliente em um espaço funcional, elegante e que realmente refletisse o estilo de vida desejado. Durante o processo, realizamos diversas etapas de planejamento, estudos de layout, seleção de materiais e testes de soluções de iluminação, ventilação e conforto térmico, garantindo que cada detalhe tivesse propósito e contribuísse para a experiência geral da residência.
                </p>
                <p className="my-3 GolosText">
                    A criação das áreas externas, incluindo a piscina aquecida com iluminação sofisticada e o jardim cuidadosamente planejado, exigiu coordenação entre paisagismo, arquitetura e engenharia, para que os ambientes fossem ao mesmo tempo estéticos e confortáveis. A área de churrasco coberta foi projetada para integrar o interior e o exterior, oferecendo uma experiência completa de convivência, sempre pensando na praticidade e no bem-estar dos moradores.
                </p>
                <p className="GolosText">
                    Ao longo de cada etapa, mantivemos constante comunicação com o cliente, ajustando detalhes, incorporando ideias e garantindo que o projeto estivesse alinhado às expectativas iniciais. A entrega final foi recebida com entusiasmo, pois cada espaço refletia o cuidado, a qualidade e a atenção aos detalhes que foram dedicados durante o processo. O resultado não foi apenas uma casa, mas um lar que combina conforto, funcionalidade e beleza, proporcionando ao cliente uma experiência completa de morar e viver com estilo.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
                <div className="flex flex-col justify-center items-center">
                    <p className="CalSans text-3xl">
                        ({project.roomSize} m²)
                    </p>
                    <p className="GolosText text-base md:text-xl">
                        Sala
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="CalSans text-3xl">
                        ({project.bedroomSize} m²)
                    </p>
                    <p className="GolosText text-base md:text-xl">
                        Quarto
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="CalSans text-3xl">
                        ({project.kitchenSize} m²)
                    </p>
                    <p className="GolosText text-base md:text-xl">
                        Cozinha
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="CalSans text-3xl">
                        ({project.bathroomSize} m²)
                    </p>
                    <p className="GolosText text-base md:text-xl">
                        Banheiro
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="CalSans text-3xl">
                        ({project.workspaceSize} m²)
                    </p>
                    <p className="GolosText text-base md:text-xl">
                        Espaço de trabalho
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="CalSans text-3xl">
                        ({project.garageSize} m²)
                    </p>
                    <p className="GolosText text-base md:text-xl">
                        Garagem
                    </p>
                </div>
            </div>
        </div>
    )
}
