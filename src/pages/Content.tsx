import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collabs, categories } from "../data/collabs";
import CtaBanner from "../components/CtaBanner";
import useSEO from "../hooks/useSEO";
import useSchema from "../hooks/useSchema";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "80K+",                    label: "Followers" },
  { value: `${collabs.length}+`,      label: "Brand Collabs" },
  { value: "3",                       label: "Platforms" },
  { value: "2",                       label: "Own Brands" },
];

const typeColors: Record<string, string> = {
  Reel:  "#6C63FF",
  Post:  "#38B2AC",
  Story: "#8B84FF",
};

export default function Content() {
  useSEO({
    title: "Brand Collaborations | Muskaan Singh Content Creator",
    description: "Muskaan Singh has collaborated with 20+ fashion, beauty, and lifestyle brands as a content creator on Instagram. Open to new partnerships.",
    canonical: "https://muskaansingh.in/content",
  });
  useSchema({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://muskaansingh.in/content#webpage",
    "url": "https://muskaansingh.in/content",
    "name": "Brand Collaborations | Muskaan Singh Content Creator",
    "description": "Muskaan Singh collaborates with fashion, beauty, and lifestyle brands as an Instagram content creator with 80K+ followers.",
    "isPartOf": { "@id": "https://muskaansingh.in/#website" },
    "about": { "@id": "https://muskaansingh.in/#person" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://muskaansingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Content", "item": "https://muskaansingh.in/content" }
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1"]
    }
  }, "schema-content");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? collabs
    : collabs.filter(c => c.category === activeCategory);

  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px]">

      {/* HERO */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p className="section-tag justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Content Creation
          </motion.p>
          <motion.h1
            className="font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.15] mt-2"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            Brand<br />Collaborations
          </motion.h1>
          <motion.p
            className="text-[#6B7280] text-lg font-medium mt-5 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            Fashion, beauty, and lifestyle brands I've worked with as a content creator across Instagram.
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[24px] p-6 text-center"
                style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
              >
                <p className="font-display font-extrabold text-3xl text-[#6C63FF]">{s.value}</p>
                <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 shrink-0"
              style={{
                boxShadow: activeCategory === cat
                  ? "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)"
                  : "5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)",
                color: activeCategory === cat ? "#6C63FF" : "#6B7280",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* COLLABS GRID */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((collab, i) => (
              <motion.div
                key={collab.id}
                className="group rounded-[24px] p-8 flex flex-col gap-4"
                style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                whileHover={{ y: -4, boxShadow: "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)" }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#6C63FF] uppercase tracking-widest">{collab.category}</span>
                    <h3 className="font-display font-extrabold text-[#3D4852] text-xl mt-1 group-hover:text-[#6C63FF] transition-colors duration-300">
                      {collab.brand}
                    </h3>
                  </div>
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
                  >
                    <span className="font-display font-bold text-sm text-[#6C63FF]">{String(collab.id).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{collab.description}</p>

                {/* Bottom row — type tags + links */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex gap-2 flex-wrap">
                    {collab.type.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-bold px-3 py-1 rounded-xl"
                        style={{
                          color: typeColors[t] ?? "#6C63FF",
                          boxShadow: "inset 4px 4px 8px rgb(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {collab.links.map((url, idx) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#6C63FF] px-3 py-1 rounded-xl transition-all duration-200 hover:text-[#8B84FF]"
                        style={{ boxShadow: "inset 4px 4px 8px rgb(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.5)" }}
                      >
                        {collab.links.length > 1 ? `View ${idx + 1} →` : "View →"}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <CtaBanner
        tag="Work With Me"
        heading="Let's Create Together"
        body="Open to brand collaborations, gifting, and paid partnerships across fashion, beauty, and lifestyle."
        buttonLabel="Get in Touch"
        buttonTo="/contact"
      />

    </div>
  );
}
