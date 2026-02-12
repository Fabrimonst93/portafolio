export interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
}


export const PROJECTS: Project[] = [
  {
    title: "projects.pp.title",
    description: "projects.pp.description",
    image: "/Portafolio.png",
    techStack: ["Vite", "Tailwind", "React", "Typescript", "i18n"],
    githubUrl: "https://github.com/Fabrimonst93/portafolio",
  },
  {
    title: "projects.sm.title",
    description: "projects.sm.description",
    image: "/Threads.png",
    techStack: ["NextJs", "Tailwind", "React", "Typescript", "MongoDB", "Clerk", "Uploadthing"],
    githubUrl: "https://github.com/Fabrimonst93/Threads-app",
    liveUrl: "https://threads-app-beta-six.vercel.app",
  },
  {
    title: "projects.ic.title",
    description: "projects.ic.description",
    image: "/Snapgram.png",
    techStack: ["Vite", "Tailwind", "React", "Typescript", "AppWrite", "Uploadthing"],
    githubUrl: "https://github.com/Fabrimonst93/Practica",
    liveUrl: "https://practica-olive-mu.vercel.app/",
  },
]