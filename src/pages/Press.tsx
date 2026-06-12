import { motion } from "framer-motion";
import { press } from "../data/press";
import CtaBanner from "../components/CtaBanner";
import useSEO from "../hooks/useSEO";
import useSchema from "../hooks/useSchema";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Press() {
  useSEO({
    title: "Press & Media | Label Muskaan Singh",
    description: "Label Muskaan Singh has been featured in Republic India, Daily Hunt, FlipBoard, Indian Bulletin, and more. Read the latest press coverage.",
    canonical: "https://www.muskaansingh.in/press",
  });
  useSchema({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.muskaansingh.in/press#webpage",
    "url": "https://www.muskaansingh.in/press",
    "name": "Press & Media | Label Muskaan Singh",
    "description": "Press and media coverage of Label Muskaan Singh across Republic India, Daily Hunt, FlipBoard, Indian Bulletin, Indian Sentinel, Abhyuday Times, and RD Times.",
    "isPartOf": { "@id": "https://www.muskaansingh.in/#website" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.muskaansingh.in/" },
        { "@type": "ListItem", "position": 2, "name": "Press", "item": "https://www.muskaansingh.in/press" }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Press Coverage",
      "itemListElement": press.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.title,
        "url": item.link
      }))
    }
  }, "schema-press");
  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px]">

      {/* HERO */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p className="section-tag justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            In the News
          </motion.p>
          <motion.h1
            className="font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.15] mt-2"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            Press &amp; Media
          </motion.h1>
          <motion.p
            className="text-[#6B7280] text-lg font-medium mt-5 mx-auto"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            Features, stories, and coverage
          </motion.p>
        </div>
      </section>

      {/* PRESS LIST */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-5">
          {press.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-8 rounded-card p-8 md:p-10 transition-all duration-300"
              style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              whileHover={{ y: -3, boxShadow: "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)" }}
            >
              {/* Number */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
              >
                <span className="font-display font-extrabold text-[#6C63FF] text-lg">{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#6C63FF] uppercase tracking-wider mb-2">
                  {item.publication} · {item.date}
                </p>
                <h2
                  className="font-display font-bold text-[#3D4852] leading-snug group-hover:text-[#6C63FF] transition-colors duration-300"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
                >
                  {item.title}
                </h2>
              </div>

              {/* Arrow */}
              <span className="hidden md:block text-[#6C63FF] text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      <CtaBanner tag="Press Inquiries" heading="Want to Feature Us?" body="For press inquiries and collaborations, reach out directly." buttonLabel="Contact Us" />

    </div>
  );
}
