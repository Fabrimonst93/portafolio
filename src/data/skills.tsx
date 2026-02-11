export interface Skill {
  alt: string
  src: string
  padding?: string
}

export const SKILLS: Skill[] = [
  { alt: "CSS", src: "/icons/css-icon.svg", padding: "p-2.5" },
  { alt: "JavaScript", src: "/icons/javascript-icon.svg", padding: "p-3.5" },
  { alt: "React", src: "/icons/react-icon.svg", padding: "p-2" },
  { alt: "Tailwind CSS", src: "/icons/tailwind-icon.svg", padding: "p-2" },
  { alt: "SQL", src: "/icons/sql-icon.svg", padding: "p-3" },
  { alt: "MongoDB", src: "/icons/mongo-icon.svg", padding: "p-2" },
  { alt: "Git", src: "/icons/git-icon.svg", padding: "p-2" },
];