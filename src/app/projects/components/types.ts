type Technology = {
  language: string;
  framework: string;
  ui: string;
  backend: string;
  database: string;
  orm: string;
  validation: string;
  fileUploader: string;
};

export type Project = {
  id: number;
  thumbnails: string;
  images?: string;
  title: string;
  description: string;
  features: string;
  technology: Technology[];
  github?: string[];
  liveSite?: string;
};

export type ProjectCardProps = {
  data: Project[];
};
