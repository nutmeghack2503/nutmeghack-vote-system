export interface Project {
  id: number;
  title: string;
  image: string;
  category?: string;
  rating?: number;
  evaluations?: number;
}

export type Page = 'top' | 'evaluation' | 'evaluation-post' | 'ranking' | 'vote' | 'vote-select';