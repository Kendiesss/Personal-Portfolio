export interface Experience {
  id: string;
  jobTitle: string;
  companyName: string;
  duration: string;
  responsibilities: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  schoolName: string;
  graduationYear: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  previewImageUrl: string;
  projectLink: string;
  tags: string[];
}

export interface PersonalDetails {
  name: string;
  email: string;
  gitHubUrl: string;
  linkedInUrl: string;
  shortDescription: string;
  tagline: string;
  role: string;
  profileImageUrl?: string;
}
