export interface NavItem {
  name: string;
  href: string;
}

export interface ContactLink {
  name: string;
  url: string;
  // MODIFIED: Changed React.ReactNode to React.ReactElement<{ className?: string }>
  icon: React.ReactElement<{ className?: string }>;
  ariaLabel: string;
}

export interface StackOverflowStats {
  reputation: string;
  reached: string;
  answers: number;
  questions: number;
  topTags: string[];
}

export interface Skill {
  name: string;
  icon?: React.ReactNode; // Optional: if we want icons per skill
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  logoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  location: string;
  about: string;
  profileImageUrl?: string; // Added profile image URL
  contactLinks: ContactLink[];
  stackOverflowStats: StackOverflowStats;
  skills: SkillCategory[];
  experiences: Experience[];
  education: EducationItem[];
  projects: Project[];
}