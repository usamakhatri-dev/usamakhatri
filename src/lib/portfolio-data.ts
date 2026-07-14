export const RESUME_URL =
  "https://drive.google.com/file/d/1sWhyhRta6DR6pIQ3nDBrHgjubEEXFTNX/view?usp=sharing";

export const socials = {
  email: "usamakhatri150@gmail.com",
  linkedin: "https://www.linkedin.com/in/usama-muhammad-hussain-81711935b/",
};

export type ProjectCategory = "UI/UX" | "Web Design" | "Mobile App";

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

export const projects: Project[] = [];