
import { Project, Skill } from './types';

export const DEVELOPER_NAME = "Muniira";
export const DEVELOPER_TITLE = "Full Stack Web Developer";
export const BIO = "I build pixel-perfect, accessible, and high-performance web applications. With 5 years of experience in the modern JavaScript ecosystem, I focus on turning complex problems into elegant, user-centric solutions.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    description: "An environmental tracking dashboard visualizing real-time air quality and noise pollution data across metropolitan areas.",
    image: "https://picsum.photos/seed/eco/800/500",
    tags: ["React", "D3.js", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "NexFlow CRM",
    description: "A lightweight customer relationship management tool designed for small startups, featuring automated lead tracking.",
    image: "https://picsum.photos/seed/crm/800/500",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Studio Pulse",
    description: "A collaborative music production platform allowing artists to share stems and feedback in real-time.",
    image: "https://picsum.photos/seed/music/800/500",
    tags: ["WebSockets", "React", "Node.js"],
    link: "#",
    github: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "JS", category: "Frontend" },
  { name: "TypeScript", icon: "TS", category: "Frontend" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Tailwind", icon: "🌊", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Backend" },
  { name: "Gemini AI", icon: "✨", category: "Tools" },
  { name: "Git", icon: "🌿", category: "Tools" }
];
