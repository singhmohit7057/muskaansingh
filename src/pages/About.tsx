import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CtaBanner from "../components/CtaBanner";
import useSEO from "../hooks/useSEO";
import useSchema from "../hooks/useSchema";

const ease = [0.16, 1, 0.3, 1] as const;

const milestones = [
  { year: "2022", title: "The Beginning",    desc: "Fashion design degree from Amity University, Kolkata. Built the Label Muskaan Singh website from scratch." },
  { year: "2023", title: "First Collection", desc: "Launched premium Chikankari luxury wear — intricate, handcrafted, rooted in Indian tradition." },
  { year: "2025", title: "Ibtida",           desc: "Born from the label's DNA — a daily wear sub-brand making accessible elegance part of everyday life." },
  { year: "Now",  title: "Growing",          desc: "Available across major platforms. A community of women who believe in craft, comfort, and identity." },
];

const pillars = [
  { num: "01", title: "Craft",      desc: "Every piece starts with the hands that make it. Traditional techniques, detail that lasts." },
  { num: "02", title: "Silhouette", desc: "Designed for today — comfortable, refined, made to be worn and felt." },
  { num: "03", title: "Identity",   desc: "Not trend-driven. Clothing as expression. Built for women who know who they are." },
];

export default function About() {
  useSEO({
    title: "About Muskaan Singh | Fashion Designer & Content Creator",
    description: "Learn about Muskaan Singh — her journey from fashion design graduate to founder of Label Muskaan Singh and Ibtida, and content creator with 80K+ followers.",
    canonical: "https://www.muskaansingh.in/about",
  });
  useSchema({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.muskaansingh.in/about#webpage",
    "url": "https://www.muskaansingh.in/about",
    "name": "About Muskaan Singh | Fashion Designer & Content Creator",
    "description": "Muskaan Singh's journey from fashion design graduate to founder of Label Muskaan Singh and content creator with 80K+ followers.",
    "isPartOf": { "@id": "https://www.muskaansingh.in/#website" },
    "about": { "@id": "https://www.muskaansingh.in/#person" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.muskaansingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.muskaansingh.in/about" }
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"]
    }
  }, "schema-about");
  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px]">

      {/* HERO */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p className="section-tag justify-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            The Story
          </motion.p>
          <motion.h1
            className="font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.15] mt-2"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            Muskaan Singh
          </motion.h1>
          <motion.p
            className="text-[#4B5563] text-lg font-medium mt-6 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            Founder of Label Muskaan Singh &amp; Ibtida. Fashion designer, content creator, and the woman behind two brands built on craft and modern identity.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-10 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
          >
            {[["2022","Founded"],["2","Brands"],["∞","Vision"]].map(([v, l]) => (
              <div
                key={l}
                className="px-8 py-5 rounded-2xl"
                style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
              >
                <p className="font-display font-extrabold text-2xl text-[#3D4852]">{v}</p>
                <p className="text-[#4B5563] text-xs font-medium mt-1 uppercase tracking-wider">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-card p-10 md:p-16 grid md:grid-cols-[1fr_1.3fr] gap-12 items-center"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Logo well */}
            <div
              className="relative h-72 rounded-[24px] flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)" }}
            >
              <img src="/muskaan/Muskaan-Singh.webp" alt="Muskaan Singh" className="w-full h-full object-contain p-8" loading="lazy" width="400" height="400" />
            </div>

            <div>
              <SectionTitle subtitle="The Founder" title="My Journey" />
              <p className="text-[#4B5563] leading-relaxed mb-4 font-medium">
                Label Muskaan Singh began with a simple, stubborn belief — that Indian craftsmanship deserves a place in the modern wardrobe.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-4 text-sm">
                After graduating in fashion design from Amity University, Kolkata, I built everything from scratch — the website, the brand identity, the first collection. Luxury Chikankari came first: intricate, handcrafted, steeped in tradition.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-8 text-sm">
                By 2025, Ibtida was born — an extension of the same DNA, made for everyday life. Two brands, one purpose: clothing that feels like you.
              </p>
              {/* Pull quote */}
              <div
                className="rounded-2xl p-6"
                style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
              >
                <p className="font-display font-bold text-[#3D4852] text-lg leading-relaxed">
                  "Craft is not a technique — it's a conversation between the maker and the wearer."
                </p>
                <p className="text-[#4B5563] text-xs font-semibold uppercase tracking-wider mt-3">Muskaan Singh · Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN PILLARS */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionTitle subtitle="Design Philosophy" title="What I Stand For" centered />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
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
                  <span className="font-display font-extrabold text-[#4C40C0] text-lg">{p.num}</span>
                </div>
                <h3 className="font-display font-bold text-[#3D4852] text-xl mb-3 group-hover:text-[#4C40C0] transition-colors duration-300">{p.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-8 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionTitle subtitle="Milestones" title="The Journey So Far" centered />
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                className="rounded-card p-7"
                style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{ y: -3 }}
              >
                <p className="font-display font-extrabold text-3xl text-[#4C40C0] mb-3">{item.year}</p>
                <h4 className="font-display font-bold text-[#3D4852] text-base mb-2">{item.title}</h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT CREATOR */}
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
            <div>
              <span className="section-tag" style={{ color: "#006060" }}>Content Creator</span>
              <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight mt-2 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                Beyond the Label
              </h2>
              <div className="w-8 h-0.5 rounded-full mb-6" style={{ background: "#006060" }} />
              <p className="text-[#4B5563] leading-relaxed mb-4 font-medium">
                Muskaan shares the world of fashion, design, and everyday elegance on Instagram — from behind-the-scenes of the label to content that celebrates the women who wear it.
              </p>
              <p className="text-[#4B5563] leading-relaxed mb-8 text-sm">
                Follow along on all three channels for collections, reels, and the story as it unfolds.
              </p>
              <div className="space-y-3">
                {[
                  { handle: "@muskaansingh97",    label: "Personal · Lifestyle & Fashion" },
                  { handle: "@labelmuskaansingh",  label: "Label · Collections & Campaigns" },
                  { handle: "@_ibtidaofficial_",   label: "Ibtida · Daily Wear" },
                ].map((acc) => (
                  <a
                    key={acc.handle}
                    href={`https://instagram.com/${acc.handle.replace("@","")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-xs font-bold text-[#4C40C0] group-hover:text-[#6C63FF] transition-colors">{acc.handle}</span>
                    <span className="text-[#4B5563] text-xs">· {acc.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Ibtida logo inset well */}
            <div
              className="relative h-64 rounded-[24px] flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)" }}
            >
              <img src="/muskaan/muskaansingh97.webp" alt="Muskaan Singh content creator on Instagram" className="w-full h-full object-contain p-8" loading="lazy" width="400" height="400" />
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBanner />

    </div>
  );
}
