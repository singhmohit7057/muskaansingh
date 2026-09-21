import pressData from './press.json';

export type PressItem = {
  id: number;
  title: string;
  publication: string;
  date: string;
  image: string;
  link: string;
};

export const press = pressData.items as unknown as PressItem[];
