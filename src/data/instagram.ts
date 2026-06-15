export type Celebrity = {
  id: number;
  name: string;
  image: string;
  link: string;
};

export const celebrities: Celebrity[] = [
  { id: 1, name: "Bhagyashree",                  
           image: "/celeb/BhagyaShree.webp",               
           link: "https://www.instagram.com/p/" },
  { id: 2, name: "Mimi Chakraborty",             
           image: "/celeb/Mimi_Chakraborty.heic",         
           link: "https://www.instagram.com/p/DTz7O0ek_nA/" },
  { id: 3, name: "Ayoshi Talukdar",              
           image: "/celeb/Ayoshi_Talukdar.webp",          
           link: "https://www.instagram.com/p/C6DSsGBr2-q/" },
  { id: 4, name: "Madhumita Sarcar",            
           image: "/celeb/Madhumita_Sarcar.webp",          
           link: "https://www.instagram.com/p/" },
  { id: 5, name: "Naina Ganguly",                
           image: "/celeb/Naina_Ganguly.webp",             
           link: "https://www.instagram.com/p/DFNIJwTz_fo/" },
  { id: 6, name: "Sauraseni Maitra",             
           image: "/celeb/Sauraseni_Maitra.webp",          
           link: "https://www.instagram.com/p/DIlcwzRzANF/" },
  { id: 7, name: "Srabanti Gintu Chatterjee",    
           image: "/celeb/Srabanti_Gintu_Chatterjee.webp", 
           link: "https://www.instagram.com/p/C5pqtQKr4or/" },
  { id: 8, name: "Sanchita Baidya",              
           image: "/celeb/Sanchita_Baidya.webp",           
           link: "https://www.instagram.com/p/C8Bhap_St4S/" },
  { id: 9, name: "Sohini Guha Roy",              
           image: "/celeb/Sohini_Guha_Roy.webp",          
           link: "https://www.instagram.com/reel/DAN5yclyr2u/" },
  { id: 10, name: "Swastika Ghosh",               
           image: "/celeb/Swastika_Ghosh.webp",            
           link: "https://www.instagram.com/p/" },

];

export type InstagramPost = {
  id: number;
  image: string;
  link: string;
  account: "muskaansingh97" | "labelmuskaansingh" | "_ibtidaofficial_";
};

export const instagramPosts: InstagramPost[] = [
  { id: 1,  image: "/instagram/lms_1.webp",     link: "https://www.instagram.com/p/C_Ald1zSF5G/",      account: "labelmuskaansingh" },
  { id: 2,  image: "/instagram/lms_2.webp",     link: "https://www.instagram.com/p/DOqIZLUkzEa/",      account: "labelmuskaansingh" },
  { id: 3,  image: "/instagram/lms_3.webp",     link: "https://www.instagram.com/p/C0lfKrRybzi/",      account: "labelmuskaansingh" },
  { id: 4,  image: "/instagram/lms_4.webp",     link: "https://www.instagram.com/p/C1eS73kyeci/",      account: "labelmuskaansingh" },
  { id: 5,  image: "/instagram/lms_5.webp",     link: "https://www.instagram.com/p/C1UBPuWSuEJ/",     account: "labelmuskaansingh" },
  { id: 6,  image: "/instagram/lms_6.webp",     link: "https://www.instagram.com/p/C2t0UncL5bJ/",     account: "labelmuskaansingh" },

  { id: 7,  image: "/instagram/ibtida_1.webp",  link: "https://www.instagram.com/p/DORAWSUj-k0/",      account: "_ibtidaofficial_" },
  { id: 8,  image: "/instagram/ibtida_2.webp",  link: "https://www.instagram.com/p/DQPkA5AjLkK/",      account: "_ibtidaofficial_" },
  { id: 9,  image: "/instagram/ibtida_3.webp", link: "https://www.instagram.com/reel/DOL2YJzCcRD/",   account: "_ibtidaofficial_" },
  { id: 10, image: "/instagram/ibtida_4.webp",  link: "https://www.instagram.com/p/DU-koiNEpUs/",      account: "_ibtidaofficial_" },
  { id: 11, image: "/instagram/ibtida_5.webp", link: "https://www.instagram.com/reel/DOtb11kj3fO/",   account: "_ibtidaofficial_" },
  { id: 12, image: "/instagram/ibtida_6.webp", link: "https://www.instagram.com/reel/DO0g3iZCPIh/",   account: "_ibtidaofficial_" },

  { id: 13, image: "/instagram/muskaan_1.webp", link: "https://www.instagram.com/p/C3IkDgSP8Y5/",      account: "muskaansingh97" },
  { id: 14, image: "/instagram/muskaan_2.webp", link: "https://www.instagram.com/p/DRpTTksjy-V/",      account: "muskaansingh97" },
  { id: 15, image: "/instagram/muskaan_3.webp", link: "https://www.instagram.com/p/DWY6xZ1D94D/",      account: "muskaansingh97" },
  { id: 16, image: "/instagram/muskaan_4.webp", link: "https://www.instagram.com/p/C92eteIPsem/",      account: "muskaansingh97" },
  { id: 17, image: "/instagram/muskaan_5.webp", link: "https://www.instagram.com/p/C-IKA8UtDF0/",     account: "muskaansingh97" },
  { id: 18, image: "/instagram/muskaan_6.webp", link: "https://www.instagram.com/p/DZK2epEj3Bh/",     account: "muskaansingh97" },
];

