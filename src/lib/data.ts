import DentriCare from "@/assets/projects/dentricare.png";
import ShareCipe from "@/assets/projects/sharecipe.png";
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

export const projectsData = [
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
  },
  {
    title: "ShareCipe",
    description:
      "ShareCipe is a recipe sharing platform that connects food enthusiasts, enabling them to discover and share their love and passion for food.",
    tags: ["React", "TypeScript", "Firebase", "Zustand"],
    imageUrl: ShareCipe,
    demoLink: "https://sharecipe.vercel.app/auth",
    githubLink: "https://github.com/jeffigy/ShareCipe",
  },
  {
    title: "Perfil",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Express",
      "MongoDB",
      "Nodemailer",
      "Cloudinary",
    ],
    imageUrl: "",
    demoLink: "",
    githubLink: "",
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
