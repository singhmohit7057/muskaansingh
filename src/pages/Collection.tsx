import { motion } from "framer-motion";
import { categories } from "../data/categories";
import useSEO from "../hooks/useSEO";
import useSchema from "../hooks/useSchema";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Collection() {
  useSEO({
    title: "Collections | Label Muskaan Singh & Ibtida",
    description: "Shop all ethnic wear collections — Chikankari sarees, lehengas, sharara sets, kurta sets, co-ords, and more from Label Muskaan Singh and Ibtida.",
    canonical: "https://muskaansingh.in/collection",
  });
  useSchema({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://muskaansingh.in/collection#webpage",
    "url": "https://muskaansingh.in/collection",
    "name": "Collections | Label Muskaan Singh & Ibtida",
    "description": "All ethnic wear collections — Chikankari sarees, lehengas, sharara sets, kurta sets, co-ords, and more.",
    "isPartOf": { "@id": "https://muskaansingh.in/#website" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://muskaansingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Collections", "item": "https://muskaansingh.in/collection" }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Label Muskaan Singh Collections",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Sarees", "url": "https://labelmuskaansingh.in/collections/sarees" },
        { "@type": "ListItem", "position": 2, "name": "Lehengas", "url": "https://labelmuskaansingh.in/collections/lehenga" },
        { "@type": "ListItem", "position": 3, "name": "Sharara Sets", "url": "https://labelmuskaansingh.in/collections/sharara-set" },
        { "@type": "ListItem", "position": 4, "name": "Kurta Sets", "url": "https://labelmuskaansingh.in/collections/kurta-set" },
        { "@type": "ListItem", "position": 5, "name": "Co-ords", "url": "https://labelmuskaansingh.in/collections/co-ords" },
        { "@type": "ListItem", "position": 6, "name": "Kurtis", "url": "https://labelmuskaansingh.in/collections/kurtis" }
      ]
    }
  }, "schema-collection");
  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px]">

      {/* HERO */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p className="section-tag justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Shop
          </motion.p>
          <motion.h1
            className="font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.15] mt-2"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            All Collections
          </motion.h1>
          <motion.p
            className="text-[#6B7280] text-lg font-medium mt-5 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            Contemporary ethnic wear — explore every category
          </motion.p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* Label Muskaan Singh */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgb(163,177,198,0.6))" }} />
              <div className="px-5 py-2 rounded-2xl" style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#6C63FF]">Label Muskaan Singh</span>
              </div>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgb(163,177,198,0.6))" }} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display font-extrabold text-[#3D4852] text-lg">Label Muskaan Singh</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgb(163,177,198,0.6), transparent)" }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {categories.filter(c => c.brand === "lms").map((cat, i) => (
                <motion.a
                  key={cat.id}
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[24px] p-4 flex flex-col gap-4"
                  style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease }}
                  whileHover={{ y: -4, boxShadow: "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)" }}
                >
                  <div className="px-2 pt-1 text-center">
                    <h3 className="font-display font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors duration-300 leading-tight" style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                      {cat.name}
                    </h3>
                  </div>
                  <div className="rounded-[18px] flex items-center justify-center overflow-hidden" style={{ aspectRatio: "1/1", boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}>
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain p-6" />
                  </div>
                  <p className="text-xs font-bold text-[#6C63FF] uppercase tracking-widest text-center pb-1">Shop →</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, rgb(163,177,198,0.6))" }} />
            <div className="px-5 py-2 rounded-2xl" style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}>
              <span className="font-display font-bold text-xs uppercase tracking-widest" style={{ color: "#38B2AC" }}>Ibtida</span>
            </div>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, rgb(163,177,198,0.6))" }} />
          </div>

          {/* Ibtida */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display font-extrabold text-lg" style={{ color: "#38B2AC" }}>Ibtida</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(56,178,172,0.4), transparent)" }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {categories.filter(c => c.brand === "ibtida").map((cat, i) => (
                <motion.a
                  key={cat.id}
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[24px] p-4 flex flex-col gap-4"
                  style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease }}
                  whileHover={{ y: -4, boxShadow: "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)" }}
                >
                  <div className="px-2 pt-1 text-center">
                    <h3 className="font-display font-bold text-[#3D4852] group-hover:transition-colors duration-300 leading-tight" style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                      {cat.name}
                    </h3>
                  </div>
                  <div className="rounded-[18px] flex items-center justify-center overflow-hidden" style={{ aspectRatio: "1/1", boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}>
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-contain p-6" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-center pb-1" style={{ color: "#38B2AC" }}>Shop →</p>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SHOP FULL COLLECTION */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.a
            href="https://labelmuskaansingh.in/collections"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-[32px] px-10 md:px-14 py-10 group"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            whileHover={{ y: -4, boxShadow: "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)" }}
          >
            <div>
              <p className="section-tag">Official Store</p>
              <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight mt-2 group-hover:text-[#6C63FF] transition-colors duration-300" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                Shop the Full Collection
              </h2>
              <p className="text-[#6B7280] text-sm font-medium mt-2 max-w-md">
                Browse every piece — luxury Chikankari, festive wear, and Ibtida daily wear — all in one place.
              </p>
            </div>
            <div
              className="shrink-0 px-8 py-4 rounded-2xl font-display font-bold text-[#6C63FF] text-sm uppercase tracking-widest flex items-center gap-2 transition-all duration-300"
              style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
            >
              labelmuskaansingh.in
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </motion.a>
        </div>
      </section>

    </div>
  );
}
