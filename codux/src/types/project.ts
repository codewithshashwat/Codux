export interface Project {
  demo_url: any;
  github_url: string | undefined;
  tags: any;
  image: string | undefined;
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  live_link?: string;
  repo_link?: string;
  created_at: string;
  owner: number | {
    id: number;
    username: string;
  };
}

export interface SubmitProject {
  title: string;
  description: string;
  tech_stack: string;
  live_link?: string;
  repo_link?: string;
}
