export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  description: string;
  mark: string;
  logo?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
};

export type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  live?: string;
  report?: string;
  github?: string;
  featured?: boolean;
  visual: "signal" | "field" | "layers" | "graph";
};

export type Interest = {
  title: string;
  note?: string;
};
