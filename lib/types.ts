export type Tool = {
  slug: string;
  name: string;
  repo: string;
  tagline: string;
  description: string;
  tags: string[];
  features: string[];
  keywords: string[];
};

export const repoUrl = (repo: string) => `https://github.com/chayprabs/${repo}`;
