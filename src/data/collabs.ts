import collabsData from './collabs.json';

export type Collab = {
  id: number;
  brand: string;
  category: string;
  type: string[];
  description: string;
  links: string[];
};

export const collabs = collabsData.items as unknown as Collab[];
export const categories = [...new Set(collabs.map(c => c.category))];
