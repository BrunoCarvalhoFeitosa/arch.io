import { NavLink } from "../types"
import sponsor1 from "@/public/icons/home/icon-sponsor-02.svg"
import sponsor2 from "@/public/icons/home/icon-sponsor-03.svg"
import sponsor3 from "@/public/icons/home/icon-sponsor-04.svg"
import sponsor4 from "@/public/icons/home/icon-sponsor-05.svg"

export const navLinks: NavLink[] = [
    {
        label: "Início",
        href: "/"
    },
    {
        label: "Projetos",
        href: "/projects"
    },
    {
        label: "Serviços",
        href: "/services"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Equipe",
        href: "/team"
    },
    {
        label: "Contato",
        href: "/contact"
    }
]

export const sponsorsData = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor2,
    sponsor1,
    sponsor4,
    sponsor3
]

export const aboutStatsData = [
    {
        value: 15,
        suffix: "+",
        title: "Anos de experiência",
        description: "Melhorando casas com projetistas mestres e especializados há mais de 15 anos."
    },
    {
        value: 190,
        suffix: "+",
        title: "Projetos entregues",
        description: "Mais de 190 projetos de sucesso entregues com qualidade e cuidado."
    },
    {
        value: 25,
        suffix: "+",
        title: "Fornecedores diversos",
        description: "Temos 25 fornecedores que nos entregam material, móveis e decoração."
    },
    {
        value: 328,
        suffix: "+",
        title: "Clientes satisfeitos",
        description: "Todos os nossos clientes estão satisfeitos com nosso trabalho e serviço"
    }
]

export const testimonialsData = [
    {
      quote: "Fechei dois projetos grandes com a empresa e todos os prazos foram cumpridos, além do serviço ser bem prestado.",
      name: "Sarah Bucch",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Contratei os serviços da empresa para a decoração do comércio e todos os clientes elogiam o ambiente.",
      name: "Beatriz Rodrigues",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1741605115327-2255e13c293e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Tirei do papel um projeto pessoal que eu tinha e a empresa foi rigorosa nos mínimos detalhes, estou muito satisfeita.",
      name: "Eleonor Croff",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1739439300726-25d8f217299b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Suporte excepcional e recursos robustos. É raro encontrar uma empresa que cumpra todas as suas promessas.",
      name: "Gabriela Santos",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1739544253608-9bfed322f2f4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]

export const faqData = [
    {
        id: "01",
        question: "Quais serviços de design vocês oferecem?",
        answer: "Oferecemos projetos completos de design de interiores e exteriores, incluindo concepção do layout, escolha de materiais, cores, mobiliário, iluminação, paisagismo e acompanhamento da execução do projeto."
    },
    {
        id: "02",
        question: "Vocês trabalham com projetos residenciais e comerciais?",
        answer: "Sim. Atuamos tanto em projetos residenciais (casas, apartamentos, áreas externas) quanto comerciais (escritórios, lojas, restaurantes, clínicas e espaços corporativos)."
    },
    {
        id: "03",
        question: "O projeto é personalizado de acordo com o meu estilo e orçamento?",
        answer: "Com certeza. Todos os projetos são desenvolvidos de forma personalizada, respeitando o estilo, as necessidades funcionais e o orçamento definido pelo cliente."
    },
    {
        id: "04",
        question: "Como funciona o processo de criação do projeto?",
        answer: "O processo inclui briefing inicial, estudo conceitual, desenvolvimento do layout, definição de materiais e acabamentos, apresentação em 3D e, se contratado, acompanhamento da execução."
    },
    {
        id: "05",
        question: "Vocês oferecem visualização em 3D dos projetos?",
        answer: "Sim. Utilizamos imagens e modelos 3D realistas para que o cliente possa visualizar o resultado final antes do início da obra ou reforma."
    },
    {
        id: "06",
        question: "O acompanhamento da obra está incluído?",
        answer: "O acompanhamento da obra é um serviço opcional. Ele pode ser contratado separadamente para garantir que o projeto seja executado conforme o planejado."
    },
    {
        id: "07",
        question: "Qual é o prazo médio para entrega de um projeto?",
        answer: "O prazo varia conforme a complexidade e o tamanho do projeto, mas geralmente leva entre 2 a 8 semanas após a aprovação do briefing e das etapas iniciais."
    },
    {
        id: "08",
        question: "Como posso solicitar um orçamento?",
        answer: "Basta entrar em contato conosco por telefone, e-mail ou formulário do site. Agendaremos uma conversa inicial para entender suas necessidades e elaborar uma proposta personalizada."
    },
    {
        id: "09",
        question: "Vocês trabalham com fornecedores e profissionais parceiros?",
        answer: "Sim. Contamos com uma rede de fornecedores e profissionais parceiros de confiança, como marceneiros, iluminadores, paisagistas e empreiteiros, garantindo qualidade, prazos e um resultado final alinhado ao projeto."
    },
    {
        id: "10",
        question: "É possível contratar apenas a consultoria de design, sem projeto completo?",
        answer: "Sim. Oferecemos serviços de consultoria pontual para orientação sobre layout, escolha de cores, mobiliário, iluminação ou decoração, ideal para quem busca direcionamento profissional sem a necessidade de um projeto completo."
    },
]

export const blogData = [
    {
        id: 1,
        image: "/images/home/image-blog-1.jpg",
        imageDet: "/images/home/image-blog-01.jpg",
        tag: "Design interior",
        link: "/blog",
        postBy: "Admin",
        date: "Junho 2, 2025",
        title: "Tendências de design funcional que combinam estilo e conforto.",
        description: "O design de interiores moderno tem como objetivo criar um espaço elegante, funcional e esteticamente agradável que reflita a vida contemporânea. Seja para renovar um único cômodo ou redesenhar toda a sua casa.",
        textInteriorDesign: "O design de interior vai muito além da estética — ele transforma a forma como você vive e se relaciona com os espaços. Um projeto bem planejado valoriza cada detalhe, melhora a funcionalidade do ambiente e cria sensações de conforto, sofisticação e identidade. Seja em residências ou comércios, o design certo potencializa o uso dos espaços, otimiza a iluminação, harmoniza cores e materiais e reflete a personalidade de quem vive ou trabalha ali. Investir em design de interior é investir em qualidade de vida e valorização do imóvel. Com soluções personalizadas, criamos ambientes elegantes, práticos e atemporais, pensados para atender suas necessidades hoje e no futuro. Seu espaço merece ser vivido com estilo, conforto e propósito.",
        textLandscaping: "O paisagismo é a arte de transformar áreas externas em verdadeiros refúgios de bem-estar e beleza. Um projeto bem executado valoriza o imóvel, cria ambientes acolhedores e integra natureza e arquitetura de forma harmoniosa. Jardins, áreas de lazer e espaços verdes planejados corretamente trazem equilíbrio, frescor e sofisticação ao dia a dia. Mais do que plantar, o paisagismo envolve planejamento, escolha adequada de espécies, iluminação, circulação e manutenção. Desenvolvemos projetos personalizados que unem estética, funcionalidade e sustentabilidade, criando espaços externos que encantam, valorizam e convidam a aproveitar cada momento ao ar livre.",
        textDesign: "O design 2D/3D é uma ferramenta essencial para transformar ideias em projetos claros, realistas e seguros. Com plantas técnicas e imagens em 3D, é possível visualizar o resultado final antes mesmo da execução, evitando erros, retrabalhos e surpresas indesejadas. Essa etapa garante mais precisão nas decisões e maior controle sobre cada detalhe do projeto. Com visualizações realistas, você consegue entender proporções, materiais, cores e iluminação de forma clara e objetiva. O design 2D/3D traz confiança, agilidade e assertividade, tornando o processo criativo mais eficiente e o resultado final muito mais alinhado às suas expectativas.",
        textFurniture: "A mobília certa é fundamental para transformar um espaço em um ambiente funcional, confortável e cheio de personalidade. Cada peça deve ser pensada para atender às necessidades do dia a dia, ao mesmo tempo em que complementa o estilo e a identidade do projeto. Móveis bem escolhidos otimizam espaços, valorizam o layout e elevam o nível estético do ambiente. Trabalhamos com seleção e especificação de mobília que alia design, ergonomia e durabilidade. Seja sob medida ou pronta, cada escolha é estratégica para garantir conforto, praticidade e sofisticação. O resultado são ambientes equilibrados, elegantes e pensados para durar.",
        categories: [
            {
                category: "Design interior"
            },
            {
                category: "Paisagismo"
            },
            {
                category: "Design 2D/3D"
            },
            {
                category: "Mobília"
            },
        ]
    },
    {
        id: 2,
        image: "/images/home/image-blog-2.jpg",
        imageDet: "/images/home/image-blog-02.jpg",
        tag: "Design interior",
        link: "/blog",
        postBy: "Admin",
        date: "Junho 2, 2025",
        title: "Tendências de design funcional que combinam estilo e conforto.",
        description: "O design de interiores moderno tem como objetivo criar um espaço elegante, funcional e esteticamente agradável que reflita a vida contemporânea. Seja para renovar um único cômodo ou redesenhar toda a sua casa.",
        textInteriorDesign: "O design de interior vai muito além da estética — ele transforma a forma como você vive e se relaciona com os espaços. Um projeto bem planejado valoriza cada detalhe, melhora a funcionalidade do ambiente e cria sensações de conforto, sofisticação e identidade. Seja em residências ou comércios, o design certo potencializa o uso dos espaços, otimiza a iluminação, harmoniza cores e materiais e reflete a personalidade de quem vive ou trabalha ali. Investir em design de interior é investir em qualidade de vida e valorização do imóvel. Com soluções personalizadas, criamos ambientes elegantes, práticos e atemporais, pensados para atender suas necessidades hoje e no futuro. Seu espaço merece ser vivido com estilo, conforto e propósito.",
        textLandscaping: "O paisagismo é a arte de transformar áreas externas em verdadeiros refúgios de bem-estar e beleza. Um projeto bem executado valoriza o imóvel, cria ambientes acolhedores e integra natureza e arquitetura de forma harmoniosa. Jardins, áreas de lazer e espaços verdes planejados corretamente trazem equilíbrio, frescor e sofisticação ao dia a dia. Mais do que plantar, o paisagismo envolve planejamento, escolha adequada de espécies, iluminação, circulação e manutenção. Desenvolvemos projetos personalizados que unem estética, funcionalidade e sustentabilidade, criando espaços externos que encantam, valorizam e convidam a aproveitar cada momento ao ar livre.",
        textDesign: "O design 2D/3D é uma ferramenta essencial para transformar ideias em projetos claros, realistas e seguros. Com plantas técnicas e imagens em 3D, é possível visualizar o resultado final antes mesmo da execução, evitando erros, retrabalhos e surpresas indesejadas. Essa etapa garante mais precisão nas decisões e maior controle sobre cada detalhe do projeto. Com visualizações realistas, você consegue entender proporções, materiais, cores e iluminação de forma clara e objetiva. O design 2D/3D traz confiança, agilidade e assertividade, tornando o processo criativo mais eficiente e o resultado final muito mais alinhado às suas expectativas.",
        textFurniture: "A mobília certa é fundamental para transformar um espaço em um ambiente funcional, confortável e cheio de personalidade. Cada peça deve ser pensada para atender às necessidades do dia a dia, ao mesmo tempo em que complementa o estilo e a identidade do projeto. Móveis bem escolhidos otimizam espaços, valorizam o layout e elevam o nível estético do ambiente. Trabalhamos com seleção e especificação de mobília que alia design, ergonomia e durabilidade. Seja sob medida ou pronta, cada escolha é estratégica para garantir conforto, praticidade e sofisticação. O resultado são ambientes equilibrados, elegantes e pensados para durar.",
        categories: [
            {
                category: "Design interior"
            },
            {
                category: "Paisagismo"
            },
            {
                category: "Design 2D/3D"
            },
            {
                category: "Mobília"
            },
        ]
    },
    {
        id: 3,
        image: "/images/home/image-blog-3.jpg",
        imageDet: "/images/home/image-blog-03.jpg",
        tag: "Design interior",
        link: "/blog",
        postBy: "Admin",
        date: "Junho 2, 2025",
        title: "Tendências de design funcional que combinam estilo e conforto.",
        description: "O design de interiores moderno tem como objetivo criar um espaço elegante, funcional e esteticamente agradável que reflita a vida contemporânea. Seja para renovar um único cômodo ou redesenhar toda a sua casa.",
        textInteriorDesign: "O design de interior vai muito além da estética — ele transforma a forma como você vive e se relaciona com os espaços. Um projeto bem planejado valoriza cada detalhe, melhora a funcionalidade do ambiente e cria sensações de conforto, sofisticação e identidade. Seja em residências ou comércios, o design certo potencializa o uso dos espaços, otimiza a iluminação, harmoniza cores e materiais e reflete a personalidade de quem vive ou trabalha ali. Investir em design de interior é investir em qualidade de vida e valorização do imóvel. Com soluções personalizadas, criamos ambientes elegantes, práticos e atemporais, pensados para atender suas necessidades hoje e no futuro. Seu espaço merece ser vivido com estilo, conforto e propósito.",
        textLandscaping: "O paisagismo é a arte de transformar áreas externas em verdadeiros refúgios de bem-estar e beleza. Um projeto bem executado valoriza o imóvel, cria ambientes acolhedores e integra natureza e arquitetura de forma harmoniosa. Jardins, áreas de lazer e espaços verdes planejados corretamente trazem equilíbrio, frescor e sofisticação ao dia a dia. Mais do que plantar, o paisagismo envolve planejamento, escolha adequada de espécies, iluminação, circulação e manutenção. Desenvolvemos projetos personalizados que unem estética, funcionalidade e sustentabilidade, criando espaços externos que encantam, valorizam e convidam a aproveitar cada momento ao ar livre.",
        textDesign: "O design 2D/3D é uma ferramenta essencial para transformar ideias em projetos claros, realistas e seguros. Com plantas técnicas e imagens em 3D, é possível visualizar o resultado final antes mesmo da execução, evitando erros, retrabalhos e surpresas indesejadas. Essa etapa garante mais precisão nas decisões e maior controle sobre cada detalhe do projeto. Com visualizações realistas, você consegue entender proporções, materiais, cores e iluminação de forma clara e objetiva. O design 2D/3D traz confiança, agilidade e assertividade, tornando o processo criativo mais eficiente e o resultado final muito mais alinhado às suas expectativas.",
        textFurniture: "A mobília certa é fundamental para transformar um espaço em um ambiente funcional, confortável e cheio de personalidade. Cada peça deve ser pensada para atender às necessidades do dia a dia, ao mesmo tempo em que complementa o estilo e a identidade do projeto. Móveis bem escolhidos otimizam espaços, valorizam o layout e elevam o nível estético do ambiente. Trabalhamos com seleção e especificação de mobília que alia design, ergonomia e durabilidade. Seja sob medida ou pronta, cada escolha é estratégica para garantir conforto, praticidade e sofisticação. O resultado são ambientes equilibrados, elegantes e pensados para durar.",
        categories: [
            {
                category: "Design interior"
            },
            {
                category: "Paisagismo"
            },
            {
                category: "Design 2D/3D"
            },
            {
                category: "Mobília"
            },
        ]
    }
]

export const projectsData = [
    {
        id: 1,
        principalImage: "/images/projects/one/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Real Carden",
        description: "Essa residência moderna é o exemplo perfeito de elegância e funcionalidade, projetada para quem valoriza conforto e entretenimento. A área externa é um verdadeiro refúgio: uma piscina aquecida com iluminação sofisticada cria o ambiente ideal para relaxar ou receber convidados a qualquer hora do dia. O amplo quintal, rodeado por um jardim cuidadosamente planejado, oferece privacidade e integração com a natureza, proporcionando momentos de lazer em meio ao verde. Para os amantes de gastronomia e convivência, a área coberta de churrasco é um destaque à parte: equipada com uma espaçosa mesa para seis pessoas, é o lugar perfeito para refeições ao ar livre, encontros com amigos ou celebrações familiares. Uma impressionante porta de vidro de 3 metros de largura conecta essa área ao interior da casa, garantindo luminosidade natural, amplitude visual e uma transição fluida entre os espaços internos e externos. Cada detalhe foi pensado para unir estética, conforto e funcionalidade, tornando esta casa um verdadeiro sonho de morar e receber.",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "01/01/2018",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/one/image-house-01.jpg"
            },
            {
                src: "/images/projects/one/image-house-02.jpg"
            },
            {
                src: "/images/projects/one/image-house-03.jpg"
            },
            {
                src: "/images/projects/one/image-house-04.jpg"
            },
            {
                src: "/images/projects/one/image-house-05.jpg"
            },
            {
                src: "/images/projects/one/image-house-06.jpg"
            },
            {
                src: "/images/projects/one/image-house-07.jpg"
            },
            {
                src: "/images/projects/one/image-house-08.jpg"
            },
            {
                src: "/images/projects/one/image-house-09.jpg"
            },
            {
                src: "/images/projects/one/image-house-10.jpg"
            },
            {
                src: "/images/projects/one/image-house-11.jpg"
            },
            {
                src: "/images/projects/one/image-house-12.jpg"
            },
            {
                src: "/images/projects/one/image-house-13.jpg"
            },
            {
                src: "/images/projects/one/image-house-14.jpg"
            },
            {
                src: "/images/projects/one/image-house-15.jpg"
            },
            {
                src: "/images/projects/one/image-house-16.jpg"
            },
            {
                src: "/images/projects/one/image-house-17.jpg"
            },
            {
                src: "/images/projects/one/image-house-18.jpg"
            },
            {
                src: "/images/projects/one/image-house-19.jpg"
            },
            {
                src: "/images/projects/one/image-house-20.jpg"
            },
            {
                src: "/images/projects/one/image-house-21.jpg"
            },
            {
                src: "/images/projects/one/image-house-22.jpg"
            },
            {
                src: "/images/projects/one/image-house-23.jpg"
            },
            {
                src: "/images/projects/one/image-house-24.jpg"
            },
            {
                src: "/images/projects/one/image-house-25.jpg"
            },
            {
                src: "/images/projects/one/image-house-26.jpg"
            },
            {
                src: "/images/projects/one/image-house-27.jpg"
            }
        ]
    },
    {
        id: 2,
        principalImage: "/images/projects/two/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Saara",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "13/09/2019",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/two/image-house-01.jpg"
            },
            {
                src: "/images/projects/two/image-house-02.jpg"
            },
            {
                src: "/images/projects/two/image-house-03.jpg"
            },
            {
                src: "/images/projects/two/image-house-04.jpg"
            },
            {
                src: "/images/projects/two/image-house-05.jpg"
            },
            {
                src: "/images/projects/two/image-house-06.jpg"
            },
            {
                src: "/images/projects/two/image-house-07.jpg"
            },
            {
                src: "/images/projects/two/image-house-08.jpg"
            },
            {
                src: "/images/projects/two/image-house-09.jpg"
            },
            {
                src: "/images/projects/two/image-house-10.jpg"
            },
            {
                src: "/images/projects/two/image-house-11.jpg"
            },
            {
                src: "/images/projects/two/image-house-12.jpg"
            },
            {
                src: "/images/projects/two/image-house-13.jpg"
            },
            {
                src: "/images/projects/two/image-house-14.jpg"
            },
            {
                src: "/images/projects/two/image-house-15.jpg"
            },
            {
                src: "/images/projects/two/image-house-16.jpg"
            },
            {
                src: "/images/projects/two/image-house-17.jpg"
            },
            {
                src: "/images/projects/two/image-house-18.jpg"
            },
            {
                src: "/images/projects/two/image-house-19.jpg"
            },
            {
                src: "/images/projects/two/image-house-20.jpg"
            },
            {
                src: "/images/projects/two/image-house-21.jpg"
            }
        ]
    },
    {
        id: 3,
        principalImage: "/images/projects/three/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Rio Moinho",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "23/06/2020",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/three/image-house-01.jpg"
            },
            {
                src: "/images/projects/three/image-house-02.jpg"
            },
            {
                src: "/images/projects/three/image-house-03.jpg"
            },
            {
                src: "/images/projects/three/image-house-04.jpg"
            },
            {
                src: "/images/projects/three/image-house-05.jpg"
            },
            {
                src: "/images/projects/three/image-house-06.jpg"
            },
            {
                src: "/images/projects/three/image-house-07.jpg"
            },
            {
                src: "/images/projects/three/image-house-08.jpg"
            },
            {
                src: "/images/projects/three/image-house-09.jpg"
            },
            {
                src: "/images/projects/three/image-house-10.jpg"
            },
            {
                src: "/images/projects/three/image-house-11.jpg"
            },
            {
                src: "/images/projects/three/image-house-12.jpg"
            },
            {
                src: "/images/projects/three/image-house-13.jpg"
            },
            {
                src: "/images/projects/three/image-house-14.jpg"
            },
            {
                src: "/images/projects/three/image-house-15.jpg"
            },
            {
                src: "/images/projects/three/image-house-16.jpg"
            }
        ]
    },
    {
        id: 4,
        principalImage: "/images/projects/four/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Dream",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "05/07/2021",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/four/image-house-01.jpg"
            },
            {
                src: "/images/projects/four/image-house-02.jpg"
            },
            {
                src: "/images/projects/four/image-house-03.jpg"
            },
            {
                src: "/images/projects/four/image-house-04.jpg"
            },
            {
                src: "/images/projects/four/image-house-05.jpg"
            },
            {
                src: "/images/projects/four/image-house-06.jpg"
            },
            {
                src: "/images/projects/four/image-house-07.jpg"
            },
            {
                src: "/images/projects/four/image-house-08.jpg"
            },
            {
                src: "/images/projects/four/image-house-09.jpg"
            },
            {
                src: "/images/projects/four/image-house-10.jpg"
            },
            {
                src: "/images/projects/four/image-house-11.jpg"
            },
            {
                src: "/images/projects/four/image-house-12.jpg"
            },
            {
                src: "/images/projects/four/image-house-13.jpg"
            },
            {
                src: "/images/projects/four/image-house-14.jpg"
            },
            {
                src: "/images/projects/four/image-house-15.jpg"
            },
            {
                src: "/images/projects/four/image-house-16.jpg"
            },
            {
                src: "/images/projects/four/image-house-17.jpg"
            },
            {
                src: "/images/projects/four/image-house-18.jpg"
            },
            {
                src: "/images/projects/four/image-house-19.jpg"
            },
            {
                src: "/images/projects/four/image-house-20.jpg"
            },
            {
                src: "/images/projects/four/image-house-21.jpg"
            },
            {
                src: "/images/projects/four/image-house-22.jpg"
            },
            {
                src: "/images/projects/four/image-house-23.jpg"
            },
            {
                src: "/images/projects/four/image-house-24.jpg"
            },
            {
                src: "/images/projects/four/image-house-25.jpg"
            },
            {
                src: "/images/projects/four/image-house-26.jpg"
            },
            {
                src: "/images/projects/four/image-house-27.jpg"
            },
            {
                src: "/images/projects/four/image-house-28.jpg"
            },
            {
                src: "/images/projects/four/image-house-29.jpg"
            },
            {
                src: "/images/projects/four/image-house-30.jpg"
            },
            {
                src: "/images/projects/four/image-house-31.jpg"
            },
            {
                src: "/images/projects/four/image-house-32.jpg"
            },
            {
                src: "/images/projects/four/image-house-33.jpg"
            },
            {
                src: "/images/projects/four/image-house-34.jpg"
            }
        ]
    },
    {
        id: 5,
        principalImage: "/images/projects/five/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Granny",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "09/04/2022",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/five/image-house-01.jpg"
            },
            {
                src: "/images/projects/five/image-house-02.jpg"
            },
            {
                src: "/images/projects/five/image-house-03.jpg"
            },
            {
                src: "/images/projects/five/image-house-04.jpg"
            },
            {
                src: "/images/projects/five/image-house-05.jpg"
            },
            {
                src: "/images/projects/five/image-house-06.jpg"
            },
            {
                src: "/images/projects/five/image-house-07.jpg"
            },
            {
                src: "/images/projects/five/image-house-08.jpg"
            },
            {
                src: "/images/projects/five/image-house-09.jpg"
            },
            {
                src: "/images/projects/five/image-house-10.jpg"
            },
            {
                src: "/images/projects/five/image-house-11.jpg"
            },
            {
                src: "/images/projects/five/image-house-12.jpg"
            },
            {
                src: "/images/projects/five/image-house-13.jpg"
            },
            {
                src: "/images/projects/five/image-house-14.jpg"
            },
            {
                src: "/images/projects/five/image-house-15.jpg"
            },
            {
                src: "/images/projects/five/image-house-16.jpg"
            },
            {
                src: "/images/projects/five/image-house-17.jpg"
            },
            {
                src: "/images/projects/five/image-house-18.jpg"
            },
            {
                src: "/images/projects/five/image-house-19.jpg"
            }
        ]
    },
    {
        id: 6,
        principalImage: "/images/projects/six/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Desert",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "13/03/2023",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/six/image-house-01.jpg"
            },
            {
                src: "/images/projects/six/image-house-02.jpg"
            },
            {
                src: "/images/projects/six/image-house-03.jpg"
            },
            {
                src: "/images/projects/six/image-house-04.jpg"
            },
            {
                src: "/images/projects/six/image-house-05.jpg"
            },
            {
                src: "/images/projects/six/image-house-06.jpg"
            },
            {
                src: "/images/projects/six/image-house-07.jpg"
            },
            {
                src: "/images/projects/six/image-house-08.jpg"
            },
            {
                src: "/images/projects/six/image-house-09.jpg"
            },
            {
                src: "/images/projects/six/image-house-10.jpg"
            },
            {
                src: "/images/projects/six/image-house-11.jpg"
            },
            {
                src: "/images/projects/six/image-house-12.jpg"
            },
            {
                src: "/images/projects/six/image-house-13.jpg"
            },
            {
                src: "/images/projects/six/image-house-14.jpg"
            },
            {
                src: "/images/projects/six/image-house-15.jpg"
            },
            {
                src: "/images/projects/six/image-house-16.jpg"
            },
            {
                src: "/images/projects/six/image-house-17.jpg"
            },
            {
                src: "/images/projects/six/image-house-18.jpg"
            },
            {
                src: "/images/projects/six/image-house-19.jpg"
            },
            {
                src: "/images/projects/six/image-house-20.jpg"
            },
            {
                src: "/images/projects/six/image-house-21.jpg"
            },
            {
                src: "/images/projects/six/image-house-22.jpg"
            },
            {
                src: "/images/projects/six/image-house-23.jpg"
            },
            {
                src: "/images/projects/six/image-house-24.jpg"
            },
            {
                src: "/images/projects/six/image-house-25.jpg"
            }
        ]
    },
    {
        id: 7,
        principalImage: "/images/projects/seven/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Connect Lounge",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "29/11/2024",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/seven/image-house-01.jpg"
            },
            {
                src: "/images/projects/seven/image-house-02.jpg"
            },
            {
                src: "/images/projects/seven/image-house-03.jpg"
            },
            {
                src: "/images/projects/seven/image-house-04.jpg"
            },
            {
                src: "/images/projects/seven/image-house-05.jpg"
            },
            {
                src: "/images/projects/seven/image-house-06.jpg"
            },
            {
                src: "/images/projects/seven/image-house-07.jpg"
            },
            {
                src: "/images/projects/seven/image-house-08.jpg"
            },
            {
                src: "/images/projects/seven/image-house-09.jpg"
            },
            {
                src: "/images/projects/seven/image-house-10.jpg"
            },
            {
                src: "/images/projects/seven/image-house-11.jpg"
            },
            {
                src: "/images/projects/seven/image-house-12.jpg"
            },
            {
                src: "/images/projects/seven/image-house-13.jpg"
            },
            {
                src: "/images/projects/seven/image-house-14.jpg"
            },
            {
                src: "/images/projects/seven/image-house-15.jpg"
            }
        ]
    },
    {
        id: 8,
        principalImage: "/images/projects/eight/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial Glasses",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "01/02/2025",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/eight/image-house-01.jpg"
            },
            {
                src: "/images/projects/eight/image-house-02.jpg"
            },
            {
                src: "/images/projects/eight/image-house-03.jpg"
            },
            {
                src: "/images/projects/eight/image-house-04.jpg"
            },
            {
                src: "/images/projects/eight/image-house-05.jpg"
            },
            {
                src: "/images/projects/eight/image-house-06.jpg"
            },
            {
                src: "/images/projects/eight/image-house-07.jpg"
            },
            {
                src: "/images/projects/eight/image-house-08.jpg"
            },
            {
                src: "/images/projects/eight/image-house-09.jpg"
            },
            {
                src: "/images/projects/eight/image-house-10.jpg"
            },
            {
                src: "/images/projects/eight/image-house-11.jpg"
            },
            {
                src: "/images/projects/eight/image-house-12.jpg"
            },
            {
                src: "/images/projects/eight/image-house-13.jpg"
            },
            {
                src: "/images/projects/eight/image-house-14.jpg"
            }
        ]
    },
    {
        id: 9,
        principalImage: "/images/projects/nine/image-house-01.jpg",
        tag: "Residencial",
        title: "Casa Residencial RZ",
        description: "O design desta residência foi concebido a partir de um conceito contemporâneo que valoriza linhas limpas, volumes bem definidos e a integração entre os ambientes internos e externos. A arquitetura moderna se expressa através de uma composição equilibrada de materiais, cores neutras e elementos naturais, criando uma estética atemporal e sofisticada. Os espaços foram planejados para proporcionar fluidez e amplitude, com ambientes integrados que favorecem a circulação, a entrada de luz natural e a ventilação cruzada. Grandes aberturas em vidro desempenham um papel fundamental no conceito do projeto, promovendo uma conexão visual constante com a área externa e reforçando a sensação de continuidade entre interior e exterior. ",
        architect: "Bruno Carvalho Feitosa",
        projectType: "Residencial",
        client: "John Doe",
        terms: "6 meses",
        strategy: "Minimalista",
        budget: "13480000",
        roomSize: "60",
        bedroomSize: "30",
        bathroomSize: "20",
        workspaceSize: "28",
        kitchenSize: "40",
        garageSize: "40",
        country: "Brasil",
        state: "São Paulo",
        date: "29/08/2025",
        clientIdeas: [
            {
                title: "Comodidades modernas:",
                description: "Incorporando eletrodomésticos de cozinha de última geração, tecnologia para casas inteligentes e acessórios de banheiro luxuosos."
            },
            {
                title: "Espaços de convivência abertos:",
                description: "Criar espaços de convivência integrados para melhorar a fluidez e a conexão entre os ambientes internos e externos."
            },
            {
                title: "Móveis de madeira natural:",
                description: "Utilizando madeira reciclada, pedra e fibras naturais para evocar uma sensação de harmonia com o ambiente circundante."
            },
            {
                title: "Janelas amplas:",
                description: "Instalar janelas do chão ao teto para maximizar a entrada de luz natural e proporcionar vistas desobstruídas do oceano."
            },
            {
                title: "Quintal amplo e espaçoso:",
                description: "Projetar amplas áreas externas, incluindo deck, piscina e jardim, para relaxamento e lazer."
            },
            {
                title: "Sala de trabalho",
                description: "Projetar cômodo para trabalho, onde tenha espaço suficiente e tenha conforto."
            },
        ],
        images: [
            {
                src: "/images/projects/nine/image-house-01.jpg"
            },
            {
                src: "/images/projects/nine/image-house-02.jpg"
            },
            {
                src: "/images/projects/nine/image-house-03.jpg"
            },
            {
                src: "/images/projects/nine/image-house-04.jpg"
            },
            {
                src: "/images/projects/nine/image-house-05.jpg"
            },
            {
                src: "/images/projects/nine/image-house-06.jpg"
            },
            {
                src: "/images/projects/nine/image-house-07.jpg"
            },
            {
                src: "/images/projects/nine/image-house-08.jpg"
            },
            {
                src: "/images/projects/nine/image-house-09.jpg"
            },
            {
                src: "/images/projects/nine/image-house-10.jpg"
            },
            {
                src: "/images/projects/nine/image-house-11.jpg"
            },
            {
                src: "/images/projects/nine/image-house-12.jpg"
            },
            {
                src: "/images/projects/nine/image-house-13.jpg"
            },
            {
                src: "/images/projects/nine/image-house-14.jpg"
            },
            {
                src: "/images/projects/nine/image-house-15.jpg"
            },
            {
                src: "/images/projects/nine/image-house-16.jpg"
            },
            {
                src: "/images/projects/nine/image-house-17.jpg"
            },
            {
                src: "/images/projects/nine/image-house-18.jpg"
            },
            {
                src: "/images/projects/nine/image-house-19.jpg"
            },
            {
                src: "/images/projects/nine/image-house-20.jpg"
            }
        ]
    },
]

export const servicesData = [
    {
        id: 1,
        title: "Design de interior residencial",
        image: "/images/services/image-services-01.jpg",
        description: "Projetos personalizados que transformam sua casa em um ambiente funcional, confortável e com identidade única."
    },
    {
        id: 2,
        title: "Design de interior comercial",
        image: "/images/services/image-services-02.jpg",
        description: "Soluções estratégicas que valorizam sua marca, otimizam espaços e criam experiências atrativas para clientes."
    },
    {
        id: 3,
        title: "Design de exteriores e paisagismo",
        image: "/images/services/image-services-03.jpg",
        description: "Planejamento e criação de áreas externas harmoniosas, unindo estética, natureza e funcionalidade."
    },
    {
        id: 4,
        title: "Renovação e remodelação",
        image: "/images/services/image-services-04.jpg",
        description: "Requalificação de espaços com foco em modernização, eficiência e valorização do imóvel."
    },
    {
        id: 5,
        title: "Criação de layout interior 2D/3D",
        image: "/images/services/image-services-05.jpg",
        description: "Visualização completa do projeto através de plantas e imagens realistas para decisões mais seguras e assertivas."
    },
    {
        id: 6,
        title: "Consultoria",
        image: "/images/services/image-services-06.jpg",
        description: "Orientação especializada para escolhas de layout, materiais, cores e soluções que melhor atendem às suas necessidades."
    },
]

export const teamData = [
    {
        name: "Olívia Peterson",
        specialization: "Design de interior",
        image: "/images/team/image-team-01.jpg"
    },
    {
        name: "Mark Jackson",
        specialization: "Co-Founder & CEO",
        image: "/images/team/image-team-02.jpg"
    },
    {
        name: "Valeria Novikova",
        specialization: "Espicialista em iluminação",
        image: "/images/team/image-team-03.jpg"
    },
    {
        name: "Helen Reeves",
        specialization: "Material Consultant",
        image: "/images/team/image-team-04.jpg"
    },
    {
        name: "Jake Nicholson",
        specialization: "3D Visualization",
        image: "/images/team/image-team-05.jpg"
    },
    {
        name: "Alex Podzemsky",
        specialization: "Graphics Designer",
        image: "/images/team/image-team-06.jpg"
    }
]
