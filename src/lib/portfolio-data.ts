import loginui from "@/assets/project-loginui.jpg";
import cityvoice from "@/assets/project-cityvoice.jpg";

export const RESUME_URL =
  "https://drive.google.com/file/d/1sWhyhRta6DR6pIQ3nDBrHgjubEEXFTNX/view?usp=sharing";

export const socials = {
  email: "usamakhatri150@gmail.com",
  linkedin: "https://www.linkedin.com/in/usama-muhammad-hussain-81711935b/",
};

export type ProjectCategory = "Branding" | "UI/UX";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  label: string;
  image: string;
  description: string;
  link: string;
  linkLabel: string;
}

export const projects: Project[] = [
  {
    id: "loginui",
    title: "Mobile Login UI Design",
    category: "UI/UX",
    label: "UI/UX 01",
    image: loginui,
    description:
      "A clean and user-friendly mobile login experience. A simple, intuitive interface letting users sign in or create an account without confusion. The process covered research, wireframing and UI development — minimal modern design, clear user flow, consistent components and a mobile-friendly layout.",
    link: "https://www.figma.com/proto/fjXXJCU837LMt5ixEQ0aRr/Login-UI?node-id=1-51&page-id=0%3A1&starting-point-node-id=1%3A11&t=tTfMWl5PGRlsBSyE-1",
    linkLabel: "Open Figma Prototype",
  },
  {
    id: "cityvoice",
    title: "CityVoice — Civic Engagement App",
    category: "UI/UX",
    label: "UI/UX 02",
    image: cityvoice,
    description:
      "CityVoice is a community-driven platform that lets residents report local issues, share feedback, and stay informed about city developments. Designed with a clean, accessible UI, the app features voice-first input, real-time topic feeds, and impact dashboards — built to make civic participation effortless.",
    link: "https://cityvoice-demo.netlify.app/",
    linkLabel: "Live Demo",
  },
];