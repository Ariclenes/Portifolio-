
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'whatsapp' | 'telegram' | 'email' | 'phone';
  url: string;
  label?: string;
  value?: string; // For displaying phone numbers directly
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'layout' | 'smartphone' | 'server' | 'database' | 'cpu' | 'shield' | 'hard-drive' | 'landmark' | 'printer';
}

export interface ProfileConfig {
  githubUsername: string;
  customAvatarUrl?: string;
  fullName: string;
  title: string;
  about: string;
  initials: string;
  availability: {
    status: string;
    type: string;
  };
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}