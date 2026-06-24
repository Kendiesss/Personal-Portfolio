import { PersonalDetails, Experience, EducationEntry, Project } from "./types";
import avatarImage from "./assets/images/avatar.jpg";
import cyberseLink from "./assets/images/CyberseLink.png";

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
    title: "[PROJECT_TITLE_2]",
    description: "[PROJECT_DESCRIPTION_2]",
    previewImageUrl: "[PROJECT_PREVIEW_IMAGE_URL_2]",
    projectLink: "[PROJECT_LINK_2]",
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: "proj-3",
    title: "[PROJECT_TITLE_3]",
    description: "[PROJECT_DESCRIPTION_3]",
    previewImageUrl: "[PROJECT_PREVIEW_IMAGE_URL_3]",
    projectLink: "[PROJECT_LINK_3]",
    tags: ["Next.js", "GraphQL", "Tailwind CSS"],
  },
];
