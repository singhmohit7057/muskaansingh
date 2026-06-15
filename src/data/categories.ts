export type Category = {
  id: number;
  name: string;
  image: string;
  link: string;
  brand: "lms" | "ibtida";
};

export const categories: Category[] = [
  { id: 1,  name: "Blazer",     image: "/category/LMS-blazer.webp",   link: "https://labelmuskaansingh.in/collections/blazer",      brand: "lms" },
  { id: 2,  name: "Lehenga",     image: "/category/LMS-lehanga.webp",  link: "https://labelmuskaansingh.in/collections/lehengas",    brand: "lms" },
  { id: 3,  name: "Kurta Set",   image: "/category/LMS-kurta-set.webp",link: "https://labelmuskaansingh.in/collections/kurta-set",   brand: "lms" },
  { id: 4,  name: "CO-ord Set",  image: "/category/LMS-co-ord.webp",   link: "https://labelmuskaansingh.in/collections/co-ord-set",  brand: "lms" },
  { id: 5,  name: "Sharara Set", image: "/category/LMS-sharara.webp",  link: "https://labelmuskaansingh.in/collections/sharara",     brand: "lms" },
  { id: 6,  name: "Gown",        image: "/category/LMS-gown.webp",     link: "https://labelmuskaansingh.in/collections/gowns",       brand: "lms" },
  { id: 7,  name: "Fusion",      image: "/category/LMS-fusion.webp",   link: "https://labelmuskaansingh.in/collections/fusion-set",  brand: "lms" },
  { id: 8,  name: "Saree",       image: "/category/LMS-saree.webp",    link: "https://labelmuskaansingh.in/collections/saree",       brand: "lms" },
  { id: 9,  name: "Short Kurti", image: "/category/LMS-kurti.webp",    link: "https://labelmuskaansingh.in/collections/short-kurti", brand: "ibtida" },
  { id: 10, name: "Top",         image: "/category/LMS-top.webp",      link: "https://labelmuskaansingh.in/collections/top",         brand: "ibtida" },
];