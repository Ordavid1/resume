import { 
  Cpu, 
  Globe, 
  Terminal, 
  Briefcase, 
  User, 
  Code,
  Zap,
  Layout,
  MessageSquare
} from 'lucide-react';
import { Experience, Project, SkillNode, NavItem, ViewState, Education } from './types';

export const PERSONAL_INFO = {
  name: "Or David",
  title: "AI Product Architect & Founder",
  email: "ordavidone@gmail.com",
  phone: "+972-526272842",
  linkedin: "linkedin.com/in/ordavid",
  tagline: "Utilizing years of business savviness into applied Generative AI products",
  bio: [
    "Combining 7 years of GTM and BizDev skills with 4 years as a Generative AI product leader.",
    "I build AI infrastructures, design agentic workflows, build GTM and business roadmaps, and lead disruptive products from 0->1."
  ],
  profileImage: "/public/favicon/profile.jpg"
};

export const EDUCATION: Education[] = [
  {
    degree: "International MBA",
    field: "Strategy and Business Development",
    institution: "(IDC), Herzliya",
    year: "2018-2020"
  },
  {
    degree: "Master’s (LL.M)",
    field: "Business Law",
    institution: "Berkeley Law, CA, US & Tel-Aviv University",
    year: "2015-2016",
    details: "top 5%"
  },
  {
    degree: "Bachelor’s (LL.B)",
    field: "IP Law",
    institution: "Haifa University",
    year: "2011-2015",
    details: "Israeli Bar Lawyer, 2016"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'kali',
    title: 'Kali Ventures',
    description: 'Enterprise Data Infrastructure enhancing how enterprises interact with their knowledge. An organizational AI brain processing all data for natural interaction.',
    url: 'https://kali.ventures',
    tech: ['GenAI', 'RAG', 'Enterprise', 'Data Infra'],
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: 'configure',
    title: 'Configure News',
    description: 'AI-driven news configuration and aggregation platform.',
    url: 'https://configure.news',
    tech: ['AI Aggregation', 'Web App', 'News API'],
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: 'resume',
    title: 'CV Resume Optimizer',
    description: 'AI-powered tool to optimize resumes for ATS and job descriptions.',
    url: 'https://cvresumeoptimizer.com',
    tech: ['LLM', 'Resume Parsing', 'Career Tech'],
    image: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: 'postgen',
    title: 'AI Post Generator',
    description: 'Automated content creation tool for social media and blogs.',
    url: 'https://aipostgenerator.marketing',
    tech: ['Content AI', 'Marketing Tech', 'Automation'],
    image: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: 'budget',
    title: 'Budget Control (בקרה תקציבית)',
    description: 'Financial management tool for budget tracking and control.',
    url: 'https://בקרהתקציבית.xyz',
    tech: ['FinTech', 'Analytics', 'Dashboard'],
    image: 'https://picsum.photos/600/400?random=5'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'kali-founder',
    role: 'Founder',
    company: 'Kali Ventures',
    period: 'July - Dec',
    type: 'founder',
    description: [
      'Built production infrastructure from ground up for Enterprise Data Infrastructure.',
      'Secured two enterprise clients and built marketing automation systems.',
      'Managed full GTM UA on Meta/Linkedin and sales pitches.'
    ]
  },
  {
    id: 'advisor',
    role: 'AI Enablement Advisor',
    company: 'AI Strategy Services',
    period: '2025 - Now',
    type: 'advisor',
    description: [
      'Advisory for early-stage startups on PoC execution, financials, and fundraising.',
      'Mentor for AI For Teachers (Education Ministry).',
      'Building various AI tools and handling product implementations.'
    ]
  },
  {
    id: 'sefi',
    role: 'Founder',
    company: 'Sefi AI',
    period: '2022 - 2024',
    type: 'founder',
    description: [
      'B2B GenAI 3D Text-to-Games Game Engine Startup.',
      'Raised $800K funding, signed SME LOIs, and managed investment contracts.',
      'Led Product to Market Fit: MVP to alpha, managing diverse teams and sales funnels.'
    ]
  },
  {
    id: 'business-lead',
    role: 'Business Lead',
    company: 'Private Strategy Services',
    period: '2020 - 2022',
    type: 'advisor',
    description: [
      'Contracting CEOs for business development and GTM strategy projects.',
      'Evaluate, design, and implemented business process improvements to enhance efficiency and productivity.',
      'Developed, closed and managed long-term commercial relationships with high-yield value.'
    ]
  },
  {
    id: 'ey',
    role: 'Advisory Team Lead, Startups&VCs',
    company: 'Ernst & Young',
    period: '2017 - 2020',
    type: 'corporate',
    description: [
      'Led multi-national financial projects within tech sector',
      'Innovated new revenue streams resulting in 30% increase in engagement YOY.',
      'Optimized financial strategies for startups and VCs.'
    ]
  }
];

export const SKILL_NODES: SkillNode[] = [
  {
    category: "Generative AI Core",
    skills: ["LLM Evaluation", "RAG Systems", "Vector DB", "Agentic Workflows", "MCPs"],
    icon: Cpu,
    level: 95
  },
  {
    category: "Product & Strategy",
    skills: ["0->1 Product", "GTM Strategy", "Pricing Models", "Strategic Partnerships", "BizDev"],
    icon: Globe,
    level: 90
  },
  {
    category: "Technical Stack",
    skills: ["AI APIs", "Stable Diffusion", "LlamaIndex", "Claude Code", "Cursor"],
    icon: Terminal,
    level: 85
  },
  {
    category: "Creative & Design",
    skills: ["Runway AI", "D-ID", "HeyGen", "Synthesia", "Canva AI"],
    icon: Layout,
    level: 80
  },
  {
    category: "Operations & CRM",
    skills: ["HubSpot", "Zendesk", "Monday", "Clay", "Sales Leadership"],
    icon: Zap,
    level: 88
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: ViewState.PROFILE, label: 'IDENTITY', icon: User },
  { id: ViewState.EXPERIENCE, label: 'DATA LOGS', icon: Briefcase },
  { id: ViewState.PROJECTS, label: 'CREATIONS', icon: Code },
  { id: ViewState.CONTACT, label: 'UPLINK', icon: MessageSquare },
];