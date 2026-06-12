export type CollectionItem = {
  id: number;
  title: string;
  image: string;
  category: string;
};

export const categories = ["All", "Ibtida", "Festive", "Everyday"];

export const collections: CollectionItem[] = [
  { id: 1, title: "Ibtida Set",         image: "/ibtida-800_800.png", category: "Ibtida" },
  { id: 2, title: "Festive Kurti",      image: "/lms-800_800.png",    category: "Festive" },
  { id: 3, title: "Label Signature",    image: "/lms-800_800.png",    category: "Festive" },
  { id: 4, title: "Daily Wear",         image: "/ibtida-800_800.png", category: "Everyday" },
  { id: 5, title: "Chikankari Classic", image: "/lms-800_800.png",    category: "Festive" },
  { id: 6, title: "Ibtida Everyday",    image: "/ibtida-800_800.png", category: "Ibtida" },
];
