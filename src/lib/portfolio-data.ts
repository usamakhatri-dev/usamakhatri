import wearon from "@/assets/project-wearon.jpg";
import scented from "@/assets/project-scented.jpg";
import nexora from "@/assets/project-nexora.jpg";
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
    id: "wearon",
    title: "WEARON — Men's Fashion Brand Identity",
    category: "Branding",
    label: "Branding 01",
    image: wearon,
    description:
      "WEARON is a modern men's fashion brand focused on everyday essentials — pants, shirts, t-shirts and uppers. A bold, confident and versatile identity reflecting strength, style and simplicity, covering logo design, a full visual identity system and realistic mockups. Core values: confidence, simplicity, strength and modern style.",
    link: "https://www.behance.net/gallery/244043213/WEARON-Mens-Fashion-Brand-Identity",
    linkLabel: "View on Behance",
  },
  {
    id: "scented",
    title: "Scented Soul — Luxury Perfume Brand Identity",
    category: "Branding",
    label: "Branding 02",
    image: scented,
    description:
      "A luxury perfume brand designed to reflect elegance, depth and a premium sensory experience. Crafted with Adobe Illustrator, Photoshop and AI-powered tools, it includes logo & identity design, bottle mockups, promotional visuals, social creatives and a refined luxury palette — moody, timeless and emotionally appealing.",
    link: "https://www.behance.net/gallery/243717711/Scented-Soul-Luxury-Perfume-Brand-Identity",
    linkLabel: "View on Behance",
  },
  {
    id: "nexora",
    title: "NEXORA — Software Company Branding",
    category: "Branding",
    label: "Branding 03",
    image: nexora,
    description:
      "A modern software company delivering future-ready digital solutions. A clean, minimal and tech-driven identity built around a unique 'N' + 'X' mark symbolizing next-gen innovation and excellence. Includes logo variations, brand guidelines and real-world mockups — signage, billboard, laptop, mug and app icon.",
    link: "https://www.behance.net/gallery/247043379/NEXORA-Software-Company-Branding",
    linkLabel: "View on Behance",
  },
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