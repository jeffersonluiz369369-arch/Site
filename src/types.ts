export interface ServiceCompact {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SolutionItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface MethodologyStep {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: "Search" | "Compass" | "User" | "Rocket" | "Microscope"; 
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: "site" | "app" | "marketing" | "branding";
  description: string;
  imageSrc: string;
  client: string;
  outcome: string;
  accentColor: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
}

export interface EcoNode {
  id: string;
  label: string;
  description: string;
  subText: string;
  color: string;
  position: { x: number; y: number }; // percentage position for responsive custom map
}
