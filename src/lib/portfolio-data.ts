export const RESUME_URL =
  "https://drive.google.com/file/d/1sWhyhRta6DR6pIQ3nDBrHgjubEEXFTNX/view?usp=sharing";

export const socials = {
  email: "usamakhatri150@gmail.com",
  linkedin: "https://www.linkedin.com/in/usama-muhammad-hussain-81711935b/",
};

import cityvoice from "@/assets/project-cityvoice.jpg";
import agentixAi from "@/assets/project-agentix-ai.jpg";

export type ProjectCategory = "UI/UX" | "Web Design" | "Mobile App" | "AI SaaS Website";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  label: string;
  image: string;
  description: string;
  link: string;
  linkLabel: string;
  tech?: string[];
}

export const projects: Project[] = [
  {
    id: "cityvoice",
    title: "CityVoice — AI Civic Reporting Platform",
    category: "UI/UX",
    label: "Featured 01",
    image: cityvoice,
    description:
      "CityVoice is an AI-powered civic issue reporting platform that helps citizens report public infrastructure and municipal problems — road damage, garbage, water leakage, sewerage overflow, street light failures, and flooding. Designed with location-based reporting, progress tracking, and a modern mobile-first interface to bridge citizens and government departments.",
    link: "https://cityvoice-demo.netlify.app/",
    linkLabel: "Live Demo",
    tech: ["React", "Tailwind CSS", "AI", "Figma"],
  },
  {
    id: "agentix-ai",
    title: "Agentix AI",
    category: "AI SaaS Website",
    label: "Featured 02",
    image: agentixAi,
    description:
      "Agentix AI is a modern AI SaaS website showcasing AI-powered solutions with a clean, premium, and fully responsive user interface. It features smooth animations, professional sections, and a conversion-focused design for businesses and startups.",
    link: "https://agentix-ai-template.vercel.app/",
    linkLabel: "Live Demo",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
];