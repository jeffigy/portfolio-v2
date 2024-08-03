import DentriCare from "@/assets/projects/dentricare.png";
import ShareCipe from "@/assets/projects/sharecipe.png";
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
    title: "ShareCipe",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MongoDB",
      "ChakraUI",
      "Express",
    ],
    imageUrl: DentriCare,
  },
  {
    title: "ShareCipe",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Firebase", "Zustand"],
    imageUrl: ShareCipe,
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
  },
] as const;
