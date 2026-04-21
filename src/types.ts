export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  urls: ProjectLink[];
  types: string[];
  languages: string[];
  frameworks: string[];
  date: string;
};

export type Profile = {
  name: string;
  description: string;
  githubUrl: string;
  instagramUrl: string;
  instagramLabel: string;
  linkedinUrl: string;
};
