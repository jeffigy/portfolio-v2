import DentriCare from "@/assets/projects/dentricare.png";
import ShareCipe from "@/assets/projects/sharecipe.png";
import Mobicare from "@/assets/projects/mobicare.png";
import { ProjectType } from "@/types/Project";
import { Github, Linkedin } from "lucide-react";
export const Links = [
  {
    name: "Home",
    hash: "home",
  },
  {
    name: "About",
    hash: "about",
  },
  {
    name: "Skills",
    hash: "skills",
  },
  {
    name: "Projects",
    hash: "projects",
  },
  {
    name: "Contact",
    hash: "contact",
  },
];

export const SkillsData = [
  "HTML",
  "CSS",
  "Javascript",
  "ReactJS",
  "Firebase",
  "ChakraUI",
  "MongoDB",
  "Git",
  "Figma",
  "Typescript",
  "Express",
  "Cloudinary",
  "Nodemailer",
  "TailwindCSS",
];

export const projectsData: ProjectType[] = [
  {
    title: "DentriCare",
    description:
      "DentriCare is a simple dental management web application designed to simplify the task of dental practices.",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "Redux Toolkit",
      "MongoDB",
      "ChakraUI",
    ],
    imageUrl: DentriCare,
    demoLink: "https://dentricare.onrender.com/",
    githubLink: "https://github.com/jeffigy/DentriCare",
    status: "done",
  },
  {
    title: "ShareCipe",
    description:
      "ShareCipe is a recipe sharing platform that connects food enthusiasts, enabling them to discover and share their love and passion for food.",
    tags: ["React", "TypeScript", "Firebase", "Zustand"],
    imageUrl: ShareCipe,
    demoLink: "https://sharecipe.vercel.app/auth",
    githubLink: "https://github.com/jeffigy/ShareCipe",
    status: "done",
  },
  {
    title: "MobiCare",
    description: "A simple web application for managing repair tasks",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "React-Query",
      "Express",
      "MongoDB",
      "Nodemailer",
      "Cloudinary",
    ],
    imageUrl: Mobicare,
    demoLink: "https://mobicare.onrender.com",
    githubLink: "https://github.com/jeffigy/MobiCare",
    status: "done",
  },
];

export const socialLinks = [
  {
    link: "https://www.linkedin.com/in/jeffy-evangelista/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    link: "https://github.com/jeffigy",
    icon: Github,
    label: "Github",
  },
];
