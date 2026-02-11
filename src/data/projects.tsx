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
    title: "Portfolio Personal",
    description: "Mi sitio web personal optimizado para SEO y performance, con animaciones suaves.",
    image: "/projects/portfolio.png",
    techStack: ["Vite", "Tailwind", "React", "Typescript", "i18n"],
    githubUrl: "https://github.com/tu-usuario/portfolio",
  },
  {
    title: "Social Media App",
    description: "Una aplicación de red social que permite a los usuarios compartir posts, crear comunidades, dar likes y comentar en publicaciones, utilizando Next.js y MongoDB.",
    image: "/projects/dashboard.png",
    techStack: ["NextJs", "Tailwind", "React", "Typescript", "MongoDB", "Clerk"],
    githubUrl: "https://github.com/tu-usuario/repo",
    liveUrl: "https://tu-deploy.vercel.app",
  },
  {
    title: "Instagram Clone",
    description: "Una aplicación de Instagram clonada con funcionalidades de compartir fotos, y comentar en publicaciones.",
    image: "/projects/portfolio.png",
    techStack: ["Vite", "Tailwind", "React", "Typescript", "AppWrite"],
    githubUrl: "https://github.com/tu-usuario/portfolio",
  },
]