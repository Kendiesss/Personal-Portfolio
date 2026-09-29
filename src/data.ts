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
  shortDescription: "Software Engineer with a strong foundation in full-stack development, project management, and AI integration. Passionate about building high-performance web applications and leveraging AI technologies to deliver efficient, scalable solutions.",
  profileImageUrl: avatarImage,
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    jobTitle: "Software Engineer",
    companyName: "iWave Inc.",
    duration: "July 2025 to Present",
    responsibilities: [
      "Web Support",
      "API and System Testing",
    ],
  },
    {
    id: "exp-2",
    jobTitle: "IT Intern",
    companyName: "iWave Inc.",
    duration: "February 2025 to June 2025",
    responsibilities: [
      "Full Java Stack Web Developer",
      "Full Java Stack Mobile Developer",
      "API and System Testing",
    ],
  },
];

export const educationList: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "INFORMATION TECHNOLOGY",
    schoolName: "University of Santo Tomas",
    graduationYear: "June 2025",
  },
];

export const technicalSkills: string[] = [
  "Java",
  "JavaScript",
  "ReactJS",
  "Tailwind CSS",
  "React Native",
  "Python",
  "SQL",
  "AI Engineering and Prompting"
];

export const softSkills: string[] = [
  "Team Leadership and Motivation",
  "Problem Solving",
  "Communication",
  "Continuous_Learning",
  "Adaptability",
  "Critical Thinking",
  "Stakeholder & Expectation Management",
  "Time Management & Prioritization",
  "Conflict Resolution & Negotiation"
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
