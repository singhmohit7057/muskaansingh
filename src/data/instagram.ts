import celebData from './celebrities.json';
import lmsData from './instagram-lms.json';
import ibtidaData from './instagram-ibtida.json';
import personalData from './instagram-personal.json';

export type Celebrity = {
  id: number;
  name: string;
  image: string;
  link: string;
};

export type InstagramPost = {
  id: number;
  image: string;
  link: string;
  account: "muskaansingh97" | "labelmuskaansingh" | "_ibtidaofficial_";
};

export const celebrities = celebData.items as unknown as Celebrity[];
export const instagramPosts = [
  ...lmsData.items,
  ...ibtidaData.items,
  ...personalData.items,
] as unknown as InstagramPost[];
