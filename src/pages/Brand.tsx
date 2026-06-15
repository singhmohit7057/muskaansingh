import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Heart, Zap, Globe, Tag } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import CtaBanner from "../components/CtaBanner";
import useSEO from "../hooks/useSEO";
import useSchema from "../hooks/useSchema";

const ease = [0.16, 1, 0.3, 1] as const;

const philosophy = [
  {
    num: "01",
    title: "Handcrafted Roots",
    desc: "Every Label Muskaan Singh piece begins with the hands that make it. Chikankari, the intricate needle-work tradition of Lucknow, forms the foundation of the label.",
  },
  {
    num: "02",
    title: "Modern Silhouette",
    desc: "Heritage technique meets contemporary cut. Garments designed for the woman of today — comfortable, refined, built to move with life and not against it.",
  },
  {
    num: "03",
    title: "Timeless Over Trendy",
    desc: "Label Muskaan Singh is not driven by seasonal trends. Every piece is designed to outlive a season, live in a wardrobe for years.",
  },
];

const platforms = [
  { icon: Globe,        label: "Official Site", sub: "labelmuskaansingh.in",    link: "https://labelmuskaansingh.in" },
  { icon: ShoppingBag,  label: "Amazon",        sub: "Shop on Amazon India",     link: "https://www.amazon.in/stores/Ibtida/page/387CF532-8348-482E-B4E2-DC9F549038F3" },
  { icon: ShoppingCart, label: "Flipkart",       sub: "Shop on Flipkart",        link: "https://www.flipkart.com/store/ibtida" },
  { icon: Heart,        label: "Myntra",         sub: "Shop on Myntra",          link: "https://www.myntra.com/ibtida" },
  { icon: Zap,          label: "AJIO",           sub: "Shop on AJIO",   link: "https://www.ajio.com/search/?text=label+muskaan+singh" },
  { icon: Tag,          label: "Meesho",         sub: "Shop on Meesho", link: "https://www.meesho.com/labelmuskaansingh" },
];

export default function Brand() {
  useSEO({
    title: "Label Muskaan Singh | Luxury Chikankari Ethnic Wear",
    description: "Label Muskaan Singh is a contemporary ethnic fashion label specialising in luxury Chikankari. Discover the brand, its philosophy, and sub-brand Ibtida.",
    canonical: "https://www.muskaansingh.in/brand",
  });
  useSchema({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.muskaansingh.in/brand#webpage",
    "url": "https://www.muskaansingh.in/brand",
    "name": "Label Muskaan Singh | Luxury Chikankari Ethnic Wear",
    "description": "Label Muskaan Singh is a contemporary ethnic fashion label specialising in luxury Chikankari wear. Founded 2023, Kolkata.",
    "isPartOf": { "@id": "https://www.muskaansingh.in/#website" },
    "about": { "@id": "https://www.muskaansingh.in/#organization" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.muskaansingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Brand", "item": "https://www.muskaansingh.in/brand" }
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", "blockquote"]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Label Muskaan Singh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Label Muskaan Singh is a contemporary ethnic fashion label founded by Muskaan Singh in 2023, specialising in luxury Chikankari — the intricate needlework tradition of Lucknow — applied to modern silhouettes."
          }
        },
        {
          "@type": "Question",
          "name": "What is Ibtida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ibtida, meaning 'a new beginning', is the everyday sub-brand of Label Muskaan Singh launched in 2025. It is designed for daily life — accessible, wearable ethnic wear without compromising on craft."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I buy Label Muskaan Singh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Label Muskaan Singh is available on labelmuskaansingh.in, Amazon India, Flipkart, Myntra, AJIO, and Meesho."
          }
        }
      ]
    }
  }, "schema-brand");
  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px]">

      {/* HERO */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p className="section-tag justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            The Label
          </motion.p>
          <motion.h1
            className="font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.15] mt-2"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            Label<br />Muskaan Singh
          </motion.h1>
          <motion.p
            className="text-[#4B5563] text-lg font-medium mt-6 max-w-lg leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
          >
            A contemporary ethnic fashion label rooted in Indian craftsmanship. Luxury Chikankari wear for the modern woman.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-10 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease }}
          >
            {[["2023","Est."],["KOL","Origin"],[`${platforms.length}+`,"Platforms"]].map(([v,l]) => (
              <div key={l} className="px-7 py-4 rounded-2xl" style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}>
                <p className="font-display font-extrabold text-2xl text-[#3D4852]">{v}</p>
                <p className="text-[#4B5563] text-xs font-medium mt-1 uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-card p-10 md:p-16 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <div
              className="relative h-72 rounded-[24px] flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)" }}
            >
              <img src="/lms-800_800.webp" alt="Label Muskaan Singh logo" className="w-full h-full object-contain p-8" loading="lazy" width="800" height="800" />
            </div>

            <div>
              <SectionTitle subtitle="The Brand" title="Modern Ethnic, Redefined" />
              <p className="text-[#4B5563] leading-relaxed mb-4 font-medium">
                Label Muskaan Singh was built on one conviction: Indian craftsmanship is not heritage to be preserved behind glass — it is a living art that belongs in the modern wardrobe.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-6 text-sm">
                The label began with luxury Chikankari — handcrafted, intricate, rooted in the needlework tradition of Lucknow. Every piece since has carried that same DNA: detail-first, designed to last.
              </p>

              <div
                className="rounded-2xl p-5 mb-8"
                style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
              >
                <p className="font-display font-bold text-[#3D4852] text-base leading-relaxed">
                  "Craft that outlives the season. Style that belongs to you."
                </p>
              </div>

              <Link to="/collection" className="btn-primary">View Collections</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionTitle subtitle="Design Approach" title="The Philosophy" centered />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-card p-8 group"
                style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{ y: -4, boxShadow: "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
                >
                  <span className="font-display font-extrabold text-[#4C40C0] text-lg">{item.num}</span>
                </div>
                <h3 className="font-display font-bold text-[#3D4852] text-xl mb-3 group-hover:text-[#4C40C0] transition-colors">{item.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IBTIDA */}
      <section className="py-8 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-card p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <div
              className="relative h-72 rounded-[24px] flex items-center justify-center overflow-hidden order-first md:order-last"
              style={{ boxShadow: "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)" }}
            >
              <img src="/ibtida-800_800.webp" alt="Ibtida sub-brand logo" className="w-full h-full object-contain p-8" loading="lazy" width="800" height="800" />
            </div>

            <div>
              <span className="section-tag" style={{ color: "#006060" }}>Sub Brand</span>
              <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight mt-2" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
                Ibtida
              </h2>
              <div className="w-8 h-0.5 rounded-full mt-3 mb-5" style={{ background: "#006060" }} />
              <p className="text-[#4B5563] leading-relaxed mb-4 font-medium">
                <em className="not-italic font-bold" style={{ color: "#006060" }}>Ibtida</em> — meaning "a new beginning."
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4 text-sm">
                Launched in 2025, Ibtida is the everyday expression of Label Muskaan Singh — accessible, wearable, designed for daily life without compromising on craft.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-8 text-sm">
                Where the core label is occasion wear built for moments, Ibtida is for the in-between — the mornings, the meetings, the everyday.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://instagram.com/_ibtidaofficial_" target="_blank" rel="noopener noreferrer"
                  className="btn-primary" style={{ background: "#006060" }}>
                  Follow @_ibtidaofficial_
                </a>
                <Link to="/collection" className="btn-secondary">Shop Ibtida</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AVAILABLE ON */}
      <section className="py-8 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-card p-10 md:p-12"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:justify-between">
              <div>
                <span className="section-tag">Shop</span>
                <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight text-2xl md:text-3xl mt-1">Available On</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {platforms.map((p, i) => (
                  <motion.a
                    key={p.label}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl group transition-all duration-300"
                    style={{ boxShadow: "5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)" }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    whileHover={{ y: -2, boxShadow: "8px 8px 14px rgb(163,177,198,0.7), -8px -8px 14px rgba(255,255,255,0.6)" }}
                  >
                    <p.icon size={14} className="text-[#4C40C0]" />
                    <span className="text-sm font-semibold text-[#3D4852]">{p.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBanner tag="Work With Us" heading="Designed for the Modern Woman" body="Explore collections crafted with intention, identity, and the hands that make it real." />

    </div>
  );
}
