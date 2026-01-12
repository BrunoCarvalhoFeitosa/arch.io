export type NavLink = {
    label: string
    href: string
    dropdown?: {
        label: string
        href: string
    }[]
}

interface ClientIdea {
  title: string
  description: string
}

interface ProjectImage {
  src: string
}

export interface Project {
  id: number
  principalImage: string
  tag: string
  title: string
  description: string
  architect: string
  projectType: string
  client: string
  terms: string
  strategy: string
  budget: string
  roomSize: string
  bedroomSize: string
  bathroomSize: string
  workspaceSize: string
  kitchenSize: string
  garageSize: string
  country: string
  state: string
  date: string
  clientIdeas: ClientIdea[]
  images: ProjectImage[]
}

export interface BlogCategory {
  category: string
}

export interface BlogPost {
  id: number
  image: string
  imageDet: string
  tag: string
  link: string
  postBy: string
  date: string
  title: string
  description: string
  textInteriorDesign: string
  textLandscaping: string
  textDesign: string
  textFurniture: string
  categories: BlogCategory[]
}
