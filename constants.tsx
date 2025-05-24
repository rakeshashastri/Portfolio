
import React from 'react';
import { ProfileData, NavItem } from './types';

// Heroicons (outline style)
export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-10.5a2.25 2.25 0 0 1-2.25-2.25V14.15M16.5 18.225v-6.428a2.25 2.25 0 0 0-.9-1.763l-4.5-3.441a2.25 2.25 0 0 0-2.7 0L3.9 9.035a2.25 2.25 0 0 0-.9 1.763v6.428m15 0A2.25 2.25 0 0 0 21 16.5V9a2.25 2.25 0 0 0-2.25-2.25h-1.5A2.25 2.25 0 0 0 15 9v7.5m-6.75 0v-6.428a2.25 2.25 0 0 0-.9-1.763l-4.5-3.441a2.25 2.25 0 0 0-2.7 0L3.9 9.035a2.25 2.25 0 0 0-.9 1.763v6.428" />
  </svg>
);

export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v5.556" />
  </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

export const CommandLineIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);


export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a7.5 7.5 0 0 1-7.5 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12.75c0 .414-.168.786-.437 1.062a4.5 4.5 0 0 1-5.626-1.062A4.5 4.5 0 0 1 5.436 7.312a4.5 4.5 0 0 1 1.062-1.062 4.5 4.5 0 0 1 5.626 1.062A4.5 4.5 0 0 1 9.75 12.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12.75c0 .414.168.786.437 1.062a4.5 4.5 0 0 0 5.626-1.062A4.5 4.5 0 0 0 18.563 7.312a4.5 4.5 0 0 0-1.062-1.062 4.5 4.5 0 0 0-5.626 1.062A4.5 4.5 0 0 0 14.25 12.75Z" />
  </svg>
);

export const EnvelopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.776 13.019H3.561V9h3.552v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const StackOverflowIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg aria-hidden="true" className={className || "w-6 h-6"} viewBox="0 0 32 37">
    <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="currentColor" opacity="0.5"/>
    <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5Z" fill="currentColor"/>
    <path d="m9.1 15.2 15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="currentColor"/>
  </svg>
);


export const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const PROFILE_DATA: ProfileData = {
  name: "Rakesha Shastri",
  title: "Engineering Lead - Mobile, Native iOS and Android",
  headline: "Engineering Lead - Mobile (Native iOS & Android) | Architecture | High-Level & Low-Level Design",
  location: "Chennai, Tamil Nadu, India",
  profileImageUrl: "https://i.sstatic.net/Q8g6Y.jpg?s=256", 
  about: `Dedicated Engineering Lead with a passion for building high-quality mobile applications. Currently leading mobile development efforts at Zoho, specializing in native iOS and Android platforms. Expertise in software architecture, high-level, and low-level design.`,
  contactLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rakeshashastri', icon: <LinkedInIcon />, ariaLabel: "Rakesha Shastri's LinkedIn Profile" },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/7734643/rakesha-shastri', icon: <StackOverflowIcon />, ariaLabel: "Rakesha Shastri's Stack Overflow Profile" },
    { name: 'GitHub', url: 'https://github.com/rakeshashastri', icon: <GitHubIcon />, ariaLabel: "Rakesha Shastri's GitHub Profile" },
    { name: 'Email', url: 'mailto:rakesha.shastri13@gmail.com', icon: <EnvelopeIcon />, ariaLabel: "Email Rakesha Shastri" },
  ],
  stackOverflowStats: {
    reputation: "11,242",
    reached: "~768k",
    answers: 254,
    questions: 13,
    topTags: ["swift", "ios", "keyboard-events", "nsnotificationcenter", "swift4.2"],
  },
  skills: [
    { 
      category: 'Core Competencies', 
      items: [
        { name: 'Architecture' }, { name: 'High-Level Design (HLD)' }, { name: 'Low-Level Design (LLD)' },
        { name: 'Team Leadership' }, { name: 'Agile Methodologies' }
      ]
    },
    { 
      category: 'Mobile Development', 
      items: [
        { name: 'iOS Development' }, { name: 'Android Development' }, { name: 'Swift' }, 
        { name: 'Objective-C' }, { name: 'Kotlin' }, { name: 'Java (for Android)' },
        { name: 'UIKit' }, { name: 'SwiftUI' } , { name: 'Core Data / Realm' }, { name: 'XCTest / Espresso' },
        { name: 'Accessibility (VoiceOver, Dynamic Type)'}, {'name': 'SiriKit & App Shortcuts'}
      ]
    },
    { 
      category: 'Tools & Platforms', 
      items: [
        { name: 'Xcode' }, { name: 'Android Studio' }, { name: 'Git & GitHub/GitLab' }, 
        { name: 'JIRA' }, { name: 'CI/CD (e.g., Jenkins, Fastlane)' }
      ]
    },
  ],
  experiences: [
    {
      role: "Engineering Lead",
      company: "Zoho",
      period: "August 2022 - Present",
      description: "Leading mobile application development teams for native iOS and Android platforms. Focusing on architecture, design, and delivery of high-quality mobile solutions within an agile environment. Overseeing the development of Zoho Campaigns for iOS, iPadOS, ensuring a cohesive and feature-rich user experience across Apple's ecosystem.",
      technologies: ["iOS", "Android", "Swift", "Kotlin", "Mobile Architecture", "Team Leadership", "Agile"],
      logoUrl: "https://www.zoho.com/sites/zweb/images/zoho_general_pages/zoho-logo-512.png" 
    },
    {
      role: "iOS Developer",
      company: "Zoho",
      period: "August 2017 - July 2022 (5 years)",
      description: "Developed and maintained feature-rich iOS applications, contributing to the full software development lifecycle from concept and design through to testing and deployment. Collaborated with cross-functional teams to deliver user-centric features, including key contributions to the Zoho Campaigns iOS app.",
      technologies: ["iOS", "Swift", "Objective-C", "UIKit", "Core Data", "REST APIs", "XCTest"],
      logoUrl: "https://www.zoho.com/sites/zweb/images/zoho_general_pages/zoho-logo-512.png" 
    },
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant",
      period: "February 2017 - July 2017 (6 months)",
      description: "Underwent intensive training and contributed to software development projects, gaining foundational experience in programming, software engineering practices, and working in a team-based environment.",
      technologies: ["Software Development Fundamentals", "Programming Concepts"],
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology - BTech, Computer Science",
      institution: "Sree Chitra Thirunal College of Engineering, Pappanamcode, Thiruvanthapuram",
      period: "2012 - 2016",
      description: "Completed a comprehensive B.Tech program in Computer Science, focusing on core computing principles, data structures, algorithms, and software development methodologies."
    }
  ],
  projects: [
    {
      title: "Zoho Campaigns for iOS & iPadOS: Mobile Email Marketing",
      description: "Led and contributed to the Zoho Campaigns app for iPhone and iPad, delivering a comprehensive email marketing suite on mobile. Engineered an intuitive UI/UX for campaign creation, real-time analytics, and contact management. Implemented iOS/iPadOS-specific features including interactive Widgets, Rich Notifications, Siri Shortcuts for quick actions, Live Text for content creation, Spotlight Search, iPad multitasking (Slide Over, Split View, Stage Manager), Drag-and-drop for report building and list management, Apple Pencil support (Scribble & Drawing Canvas), and extensive accessibility features (VoiceOver, Audio Graphs, Dynamic Text Size).",
      technologies: ["iOS", "iPadOS", "Swift", "UIKit", "CoreData", "SiriKit", "Widgets", "Accessibility", "API Integration"],
      imageUrl: "https://img.youtube.com/vi/FYD85YgtPho/maxresdefault.jpg",
      liveUrl: "https://www.youtube.com/watch?v=FYD85YgtPho",
      repoUrl: "#" 
    }
  ],
};
