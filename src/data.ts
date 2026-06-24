import { PersonalDetails, Experience, EducationEntry, Project } from "./types";
import avatarImage from "./assets/images/avatar.jpg";
import cyberseLink from "./assets/images/CyberseLink.png";
import aetherSpend from "./assets/images/AetherSpend.png";
import webAI from "./assets/images/WebAI.png";
import cyberFitness from "./assets/images/cyberFitness.png";
import creatives from "./assets/images/creatives.png";
import cryptPh from "./assets/images/cryptPh.png";



export const personalDetails: PersonalDetails = {
  name: "JOHN KEN B. ANGELES",
  email: "jkenangeles9@gmail.com",
  gitHubUrl: "https://github.com/Kendiesss",
  linkedInUrl: "https://www.linkedin.com/in/john-ken-angeles-6b6b99268/",
  tagline: "Building High-Performance & Seamless Web Experiences",
  role: "Software Engineer",
  shortDescription: "[YOUR_SHORT_DESCRIPTION]",
  profileImageUrl: avatarImage,
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    jobTitle: "Software Engineer",
    companyName: "iWave Inc.",
    duration: "2025 to Present",
    responsibilities: [
      "Full Stack Web Developer",
      "Full Stack Mobile Developer",
      "API and System Testing",
    ],
  }
];

export const educationList: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "[DEGREE/CERTIFICATION_1]",
    schoolName: "[SCHOOL/INSTITUTION_NAME_1]",
    graduationYear: "[GRADUATION_YEAR_1]",
  },
  {
    id: "edu-2",
    degree: "[DEGREE/CERTIFICATION_2]",
    schoolName: "[SCHOOL/INSTITUTION_NAME_2]",
    graduationYear: "[GRADUATION_YEAR_2]",
  },
];

export const technicalSkills: string[] = [
  "[TECH_SKILL_1_e.g._JavaScript]",
  "[TECH_SKILL_2_e.g._React]",
  "[TECH_SKILL_3_e.g._TypeScript]",
  "[TECH_SKILL_4_e.g._TailwindCSS]",
  "[TECH_SKILL_5_e.g._Node.js]",
  "[TECH_SKILL_6_e.g._Python]",
];

export const softSkills: string[] = [
  "[SOFT_SKILL_1_e.g._Communication]",
  "[SOFT_SKILL_2_e.g._Problem-Solving]",
  "[SOFT_SKILL_3_e.g._Team_Leadership]",
  "[SOFT_SKILL_4_e.g._Continuous_Learning]",
  "[SOFT_SKILL_5_e.g._Adaptability]",
  "[SOFT_SKILL_6_e.g._Critical_Thinking]",
];

export const projectsList: Project[] = [
  {
    id: "proj-1",
    title: "Cyberse Link",
    description: "The next generation AI communication platform. Connect, collaborate, and evolve in the digital frontier.",
    previewImageUrl: cyberseLink,
    projectLink: "https://cyberse-link.vercel.app",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "proj-2",
    title: "AetherSpend",
    description: "Budget Tracker AI Web App",
    previewImageUrl: aetherSpend,
    projectLink: "https://aether-spend.vercel.app",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "proj-3",
    title: "WebAI",
    description: "Personal Interactive Web AI",
    previewImageUrl: webAI,
    projectLink: "https://ai-web-five-swart.vercel.app",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
    {
    id: "proj-4",
    title: "CYBER FITNESS",
    description: "Online Fitness Web App",
    previewImageUrl: cyberFitness,
    projectLink: "https://cyber-fitness.vercel.app",
    tags: ["Next.js", "GraphQL", "Tailwind CSS"],
  },
    {
    id: "proj-5",
    title: "Personal Creatives Portfolio",
    description: "A personal portfolio used for showcasing the previous creative projects specifically, publication materials.",
    previewImageUrl: creatives,
    projectLink: "https://portfolio-tau-three-69.vercel.app",
    tags: ["Next.js", "GraphQL", "Tailwind CSS"],
  },
    {
    id: "proj-6",
    title: "CryptPH",
    description: "your one-stop platform for mastering cryptocurrency trading with cryptocurrency data, educational content, and accessible tools.",
    previewImageUrl: cryptPh,
    projectLink: "https://crypt-ph.vercel.app",
    tags: ["Next.js", "GraphQL", "Tailwind CSS"],
  },
  















];
