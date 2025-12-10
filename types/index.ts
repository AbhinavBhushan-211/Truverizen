import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

// --- Navigation Types ---
export interface NavItem {
  label: string;
  href?: string;
  type?: 'link' | 'dropdown';
  items?: { label: string; href: string; desc?: string }[];
}

// --- Content/Service Types ---
export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  bgColor?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  color: string;
}

export interface Industry {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

// --- Detail Page Types ---
export interface ServiceDetailContent {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: {
    title: string;
    items: string[];
    icon: LucideIcon;
  }[];
  processStep?: {
    step: string;
    title: string;
    desc: string;
  }[];
  techStack?: string[];
}

export interface IndustryDetailContent {
  id: string;
  name: string;
  heroImage?: string;
  description: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
}

// --- Product/Feature Types ---
export interface ProductData {
  id: string;
  badge: string;
  title: string;
  titleHighlight: string;
  titleHighlightColor: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  theme: 'light' | 'dark';
  align: 'left' | 'right';
  linkTo: string;
}

export enum SectionId {
  HOME = 'home',
  PHILOSOPHY = 'philosophy',
  SERVICES = 'services',
  TARA = 'tara',
  INDUSTRIES = 'industries',
  CONTACT = 'contact'
}
