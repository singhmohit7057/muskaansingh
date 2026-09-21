import categoriesData from './categories.json';

export type Category = {
  id: number;
  name: string;
  image: string;
  link: string;
  brand: "lms" | "ibtida";
};

export const categories = categoriesData.items as unknown as Category[];
