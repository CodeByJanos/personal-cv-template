export type Locale = "hu" | "en";
export type ContactKind = "email" | "phone" | "location" | "linkedin" | "github" | "web";

export interface ContactItem { label: string; value: string; href?: string; kind: ContactKind }
export interface Experience { company: string; role: string; location: string; period: string; summary?: string; achievements: string[]; technologies: string[] }
export interface Project {
  name: string;
  description: string;
  features: string[];
  technologies: Record<string, string[]>;
  role: string[];
  href?: string;
}
export interface Education { institution: string; degree: string; period: string; details?: string }
export interface Certification { name: string; issuer: string; year: string; details?: string }
export interface Language { name: string; level: string }

export interface CvLabels {
  summary: string; highlights: string; experience: string; projects: string;
  skills: string; education: string; certifications: string; languages: string;
  interests: string; print: string; language: string;
  projectFeatures: string; projectTechnologies: string; projectRole: string;
}

export interface CvData {
  locale: Locale; labels: CvLabels; name: string; title: string; tagline: string; initials: string;
  contacts: ContactItem[]; summary: string; highlights: string[]; experience: Experience[];
  projects: Project[]; skills: Record<string, string[]>; education: Education[];
  certifications: Certification[]; languages: Language[]; interests: string[];
}
