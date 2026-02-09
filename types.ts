import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'founder' | 'advisor' | 'corporate';
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  details?: string;
}

export interface SkillNode {
  category: string;
  skills: string[];
  icon: LucideIcon;
  level: number; // 0-100
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export enum ViewState {
  BOOT = 'BOOT',
  HUB = 'HUB',
  PROFILE = 'PROFILE',
  PROJECTS = 'PROJECTS',
  EXPERIENCE = 'EXPERIENCE',
  CONTACT = 'CONTACT'
}