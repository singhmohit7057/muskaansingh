import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, AtSign } from "lucide-react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CtaBanner from "../components/CtaBanner";
import { instagramPosts, celebrities } from "../data/instagram";
import useSEO from "../hooks/useSEO";
import useSchema from "../hooks/useSchema";

const ease = [0.16, 1, 0.3, 1] as const;

const instagramAccounts = [
  { handle: "@muskaansingh97",    label: "Personal", link: "https://instagram.com/muskaansingh97" },
  { handle: "@labelmuskaansingh", label: "Label",    link: "https://instagram.com/labelmuskaansingh" },
  { handle: "@_ibtidaofficial_",  label: "Ibtida",   link: "https://instagram.com/_ibtidaofficial_" },
];


export default function Home() {
  useSEO({
    title: "Muskaan Singh | Founder of Label Muskaan Singh",
    description: "Muskaan Singh is the founder of Label Muskaan Singh — contemporary ethnic wear rooted in Chikankari craftsmanship and modern identity.",
    canonical: "https://www.muskaansingh.in/",
  });
  useSchema({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.muskaansingh.in/#webpage",
    "url": "https://www.muskaansingh.in/",
    "name": "Muskaan Singh | Founder of Label Muskaan Singh",
    "description": "Official portfolio of Muskaan Singh — fashion designer, content creator, and founder of Label Muskaan Singh.",
    "isPartOf": { "@id": "https://www.muskaansingh.in/#website" },
    "about": { "@id": "https://www.muskaansingh.in/#person" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".section-tag"]
    }
  }, "schema-home");
  return (
    <div className="bg-[#E0E5EC] text-[#3D4852]">
      <Hero />

      {/* ── FOUNDER ──────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="rounded-card p-10 md:p-16 grid md:grid-cols-[1fr_1.2fr] gap-12 items-center"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Logo inset well */}
            <div
              className="relative h-64 md:h-80 rounded-[24px] flex items-center justify-center overflow-hidden"
              style={{ boxShadow: "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)" }}
            >
              <img src="/muskaan/Muskaan_Singh_Founder.jpeg" alt="" className="w-full h-full object-contain p-8" aria-hidden="true" />
            </div>

            <div>
              <SectionTitle subtitle="The Founder" title="Muskaan Singh" />
              <p className="text-[#6B7280] leading-relaxed mb-4 font-medium">
                Building a contemporary ethnic wear label rooted in Indian craftsmanship with a distinctly modern sensibility.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8 text-sm">
                Starting with luxury Chikankari, the brand has grown into multiple expressions — including Ibtida, a daily wear line focused on effortless style.
              </p>
              <Link to="/about" className="btn-primary">Read My Story</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ──────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {/* LMS Card */}
          <motion.div
            className="rounded-card p-10 flex flex-col"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="section-tag">The Label</span>
            <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight text-3xl md:text-4xl mt-2 mb-4 uppercase">Label Muskaan Singh</h2>
            <div className="w-8 h-0.5 rounded-full mb-6 bg-[#6C63FF]" />
            <p className="text-[#6B7280] leading-relaxed mb-4 font-medium">
              A contemporary fashion label blending traditional Indian craftsmanship with modern silhouettes.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-8 text-sm">
              Every piece is rooted in detail, quality, and a timeless design philosophy that transcends trends.
            </p>
            <div className="flex gap-4 flex-wrap mt-auto">
              <Link to="/collection" className="btn-primary">View Collections</Link>
              <a href="https://instagram.com/labelmuskaansingh" target="_blank" rel="noopener noreferrer" className="btn-secondary">Follow Label</a>
            </div>
          </motion.div>

          {/* Ibtida Card */}
          <motion.div
            className="rounded-card p-10 flex flex-col"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <span className="section-tag" style={{ color: "#38B2AC" }}>Sub Brand</span>
            <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight text-3xl md:text-4xl mt-2 mb-4">Ibtida</h2>
            <div className="w-8 h-0.5 rounded-full mb-6" style={{ background: "#38B2AC" }} />
            <p className="text-[#6B7280] leading-relaxed mb-4 font-medium">
              <em className="not-italic font-bold" style={{ color: "#38B2AC" }}>Ibtida</em> — a new beginning. The daily wear sub-brand under Label Muskaan Singh.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-8 text-sm">
              Accessible elegance for every day — simple, versatile, and effortlessly refined.
            </p>
            <div className="flex gap-4 flex-wrap mt-auto">
              <a
                href="https://instagram.com/_ibtidaofficial_"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: "#38B2AC" }}
              >
                Follow Ibtida
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AS SEEN ON ───────────────────────────────────── */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Worn By" title="As Seen On" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {celebrities.map((celeb, i) => (
              <motion.a
                key={celeb.id}
                href={celeb.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                whileHover={{ y: -3 }}
              >
                <div
                  className="rounded-[16px] overflow-hidden aspect-square"
                  style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                >
                  <img
                    src={celeb.image}
                    alt={celeb.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs font-semibold text-[#3D4852] text-center group-hover:text-[#6C63FF] transition-colors duration-300 leading-tight">
                  {celeb.name}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <SectionTitle subtitle="Follow Along" title="On Instagram" />
            <div className="flex flex-col gap-2 mb-10 md:mb-0">
              {instagramAccounts.map((acc) => (
                <a key={acc.handle} href={acc.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#6C63FF] transition-colors group">
                  <AtSign size={12} />
                  {acc.handle.slice(1)}
                  <span className="text-[#A0AEC0] text-xs">· {acc.label}</span>
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {[
            { account: "labelmuskaansingh", label: "Label Muskaan Singh" },
            { account: "_ibtidaofficial_",  label: "Ibtida" },
            { account: "muskaansingh97",    label: "Personal" },
          ].map(({ account, label }) => (
            <div key={account} className="mb-8">
              <a
                href={`https://instagram.com/${account}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] hover:text-[#6C63FF] transition-colors mb-3"
              >
                <AtSign size={11} />
                {account}
                <span className="text-[#A0AEC0]">· {label}</span>
              </a>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {instagramPosts.filter(p => p.account === account).map((post, i) => (
                  <motion.a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden block aspect-[4/5] rounded-[18px]"
                    style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease }}
                    whileHover={{ y: -3 }}
                  >
                    <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#6C63FF]/0 group-hover:bg-[#6C63FF]/20 transition-all duration-300 flex items-center justify-center">
                      <AtSign size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
