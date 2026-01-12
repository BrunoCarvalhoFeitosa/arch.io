"use client"

import { ImageZoom } from "@/components/common/image-zoom"
import { Tag } from "@/components/common/tag"
import { Title } from "@/components/common/title"
import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"

const data = [
    {
      title: "Consultoria",
      content: (
        <div>
            <div className="mb-4">
                <p className="GolosText font-normal">
                    A consultoria em design de interiores e exteriores é a etapa inicial e estratégica de um projeto, 
                    pensada para orientar o cliente antes de qualquer decisão definitiva. É nesse momento que ideias 
                    são organizadas, necessidades são compreendidas e possibilidades reais são apresentadas de forma 
                    clara e objetiva. Mais do que escolher estilos ou cores, a consultoria tem como objetivo traduzir 
                    o estilo de vida, os desejos e as prioridades do cliente em soluções funcionais, estéticas e viáveis, 
                    respeitando o espaço, o orçamento e o contexto do imóvel.
                </p>
            </div>
          <div className="GolosText">
            <h3 className="text-lg font-bold">
                O que é feito durante a consultoria?
            </h3>
            <p className="mb-4">
                Durante essa fase, o designer realiza uma análise completa do projeto, que pode incluir:
            </p>
            <ul className="ml-5 flex flex-col gap-3 list-disc">
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Levantamento de necessidades
                    </h4>
                    <p>
                        Entendimento profundo de como o espaço será utilizado, quem irá utilizá-lo, quais são as 
                        expectativas estéticas, funcionais e emocionais do cliente.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Análise do espaço
                    </h4>
                    <p>
                        Avaliação do ambiente existente, considerando dimensões, iluminação natural, ventilação, 
                        circulação, estrutura, pontos técnicos e integração entre áreas internas e externas.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Definição de conceito e estilo
                    </h4>
                    <p>
                        Criação de uma direção conceitual para o projeto, alinhando referências visuais, estilos, 
                        sensações desejadas e identidade do cliente.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Sugestões de layout e organização
                    </h4>
                    <p>
                        Indicação das melhores disposições de móveis, fluxos de circulação e aproveitamento do espaço, 
                        visando conforto, funcionalidade e harmonia visual.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Orientação de materiais e acabamentos
                    </h4>
                    <p>
                        Recomendações iniciais de revestimentos, cores, texturas, mobiliário, iluminação e elementos 
                        decorativos adequados ao projeto.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Consultoria para áreas externas
                    </h4>
                    <p>
                        No design de exteriores e paisagismo, são avaliados fatores como clima, insolação, vegetação, 
                        áreas de convivência, circulação e integração com a arquitetura.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Direcionamento de orçamento e viabilidade
                    </h4>
                    <p>
                        Orientações realistas sobre custos, prioridades e possibilidades, ajudando o cliente a 
                        tomar decisões mais seguras antes de avançar para a execução.
                    </p>
                </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Protótipo",
      content: (
        <div>
          <div className="mb-4">
            <p className="GolosText font-normal">
                Protótipos digitais são desenvolvidos para transformar ideias e conceitos em uma representação visual 
                realista do projeto. Elas permitem que o cliente visualize o espaço antes da execução, facilitando o 
                entendimento das soluções propostas e tornando o processo de decisão mais seguro. Após a modelagem, 
                são aplicados materiais, cores, texturas, mobiliário, iluminação e elementos decorativos, 
                sempre alinhados ao conceito definido para o projeto. No caso de áreas externas, também são 
                considerados fatores  como vegetação, iluminação natural, clima e integração com o entorno. Por fim, 
                são geradas imagens, vídeos ou visualizações interativas que simulam o ambiente real, permitindo ajustes, 
                refinamentos e validações antes da etapa de execução. Essa fase garante maior previsibilidade, reduz erros 
                e assegura que o resultado final esteja alinhado às expectativas do cliente.
            </p>
          </div>
          <ul className="ml-5 flex flex-col gap-3 list-disc">
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Levantamento técnico do espaço
                    </h4>
                    <p>
                        Coleta de medidas, análise da estrutura existente e identificação de pontos técnicos e arquitetônicos.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Definição do layout
                    </h4>
                    <p>
                        Organização dos ambientes, circulação, posicionamento de móveis e integração entre áreas internas e externas.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                       Modelagem tridimensional (3D)
                    </h4>
                    <p>
                        Criação do modelo digital respeitando proporções, volumes e funcionalidade dos espaços.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Aplicação de materiais e acabamentos
                    </h4>
                    <p>
                        Inserção de cores, texturas, revestimentos e superfícies conforme o conceito do projeto.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Escolha de mobiliário e elementos decorativos
                    </h4>
                    <p>
                        Seleção de peças que reforçam o estilo, o conforto e a identidade do ambiente.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Estudo de iluminação
                    </h4>
                    <p>
                        Simulação da iluminação natural e artificial para valorizar o espaço e criar a atmosfera desejada.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Renderização e visualizações realistas
                    </h4>
                    <p>
                        Geração de imagens, vídeos ou experiências interativas para apresentação do projeto.
                    </p>
                </li>
            </ul>
        </div>
      ),
    },
    {
      title: "Validação",
      content: (
        <div>
          <div className="mb-4">
            <p className="GolosText font-normal">
                A etapa de validação com o cliente é um momento essencial do processo de design de interiores e exteriores. Nessa fase, o projeto desenvolvido é apresentado de forma detalhada, por meio de maquetes digitais, imagens realistas e especificações, permitindo que o cliente compreenda plenamente as soluções propostas. Durante a validação, o cliente pode analisar layout, materiais, cores, mobiliário, iluminação e a funcionalidade dos espaços, verificando se o projeto está alinhado às suas expectativas, necessidades e estilo de vida. Esse diálogo aberto possibilita ajustes, refinamentos e correções antes do início da execução. A importância dessa etapa está em garantir segurança e clareza para ambas as partes. A validação reduz riscos, evita retrabalhos e custos desnecessários, além de assegurar que o resultado final reflita exatamente o que foi planejado. Somente após a aprovação do cliente o projeto segue para a fase de execução, garantindo um processo mais organizado, eficiente e satisfatório.
            </p>
          </div>
          <ul className="ml-5 flex flex-col gap-3 list-disc">
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Apresentação do projeto completo
                    </h4>
                    <p>
                        Exibição das maquetes digitais, imagens realistas e soluções propostas para o espaço.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Análise de layout e funcionalidade
                    </h4>
                    <p>
                        Verificação da organização dos ambientes, circulação e aproveitamento dos espaços.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                       Avaliação estética e conceitual
                    </h4>
                    <p>
                        Conferência de cores, materiais, texturas, mobiliário e identidade visual do projeto.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Alinhamento com as expectativas do cliente
                    </h4>
                    <p>
                        Confirmação de que o projeto atende às necessidades, preferências e estilo de vida do cliente.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Coleta de feedback
                    </h4>
                    <p>
                        Espaço para sugestões, ajustes e esclarecimento de dúvidas antes da execução.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Ajustes e refinamentos finais
                    </h4>
                    <p>
                        Adequações necessárias para garantir total satisfação com o projeto.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Aprovação formal do projeto
                    </h4>
                    <p>
                        Validação final que autoriza o início da fase de execução.
                    </p>
                </li>
            </ul>
        </div>
      ),
    },
    {
      title: "Execução",
      content: (
        <div>
          <div className="mb-4">
            <p className="GolosText font-normal">
                Após a aprovação do projeto pelo cliente, inicia-se a fase de execução e acompanhamento, que transforma o planejamento em realidade. Esse é o momento em que todas as definições aprovadas são colocadas em prática de forma organizada e controlada.
            </p>
          </div>
          <ul className="ml-5 flex flex-col gap-3 list-disc">
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Elaboração do projeto executivo
                    </h4>
                    <p>
                        Desenvolvimento dos desenhos técnicos detalhados, especificações completas de materiais, mobiliário, 
                        iluminação e acabamentos, garantindo que tudo seja executado conforme o projeto aprovado.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Planejamento da execução
                    </h4>
                    <p>
                        Definição de cronograma, etapas da obra, prazos e organização das atividades, alinhando fornecedores, equipes e logística.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                       Orçamentação final e contratações
                    </h4>
                    <p>
                       Ajuste e validação dos custos finais, indicação ou contratação de fornecedores, prestadores de serviço e compra de materiais.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Início da obra ou implementação
                    </h4>
                    <p>
                        Execução do projeto conforme o planejamento, respeitando padrões técnicos, estéticos e funcionais definidos.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Acompanhamento e supervisão
                    </h4>
                    <p>
                        Monitoramento contínuo da obra para garantir qualidade, fidelidade ao projeto e resolução rápida de imprevistos.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Ajustes pontuais durante a execução
                    </h4>
                    <p>
                        Pequenas adequações técnicas, quando necessárias, sempre alinhadas e comunicadas ao cliente.
                    </p>
                </li>
                <li className="GolosText">
                    <h4 className="font-semibold">
                        Finalização e entrega
                    </h4>
                    <p>
                        Conferência final, acabamento dos detalhes e entrega do espaço pronto, funcional e alinhado às expectativas do cliente.
                    </p>
                </li>
            </ul>
        </div>
      ),
    }
  ];

export const Expertise = () => {
    return (
        <section className="mt-30 md:mt-56 pt-30 md:pt-56 px-[4%] md:px-[8%] lg:px-[5%] bg-[#CD950C]">
            <div>
                <Tag title="Nossa Expertise" />
                <div className="py-5">
                    <h3 className="flex flex-col CalSans text-xl md:text-4xl xl:text-6xl">
                        Entenda como a sua ideia<br/>sai do papel e se torna real.
                    </h3>
                </div>
                <div className="relative w-full overflow-clip">
                    <Timeline data={data} />
                </div>
            </div>
        </section>
    )
}
