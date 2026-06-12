import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";

const ease = [0.16, 1, 0.3, 1] as const;

const sections = [
  {
    title: "Use of Content",
    body: "All content, including images, designs, text, and branding, belongs to Muskaan Singh and Label Muskaan Singh. You may not copy, reproduce, or use this content without permission.",
  },
  {
    title: "Website Use",
    body: "You agree to use this website only for lawful purposes and not to misuse or attempt to disrupt its functionality.",
  },
  {
    title: "External Links",
    body: "This website may link to external platforms such as Amazon, Myntra, Flipkart, or AJIO. We are not responsible for the content or policies of these third-party platforms.",
  },
  {
    title: "Limitation of Liability",
    body: "We do not guarantee that the website will always be available or error-free. Use of the website is at your own risk.",
  },
  {
    title: "Changes",
    body: "These terms may be updated at any time without notice. Continued use of the website constitutes acceptance of the updated terms.",
  },
];

export default function Terms() {
  useSEO({
    title: "Terms of Use | Muskaan Singh",
    description: "Terms of use for muskaansingh.in — rules and guidelines for using this website.",
    canonical: "https://muskaansingh.in/terms",
  });
  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px] min-h-screen">
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <motion.p
            className="section-tag justify-center mb-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Legal
          </motion.p>
          <motion.h1
            className="font-display font-extrabold text-[#3D4852] tracking-tight text-center mb-2"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            Terms of Use
          </motion.h1>
          <motion.p
            className="text-[#6B7280] text-sm text-center mb-12"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Last updated: 2026
          </motion.p>

          {/* Intro card */}
          <motion.div
            className="rounded-[24px] p-8 mb-6"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <p className="text-[#6B7280] leading-relaxed">
              This website represents Muskaan Singh and her work. By accessing this site,
              you agree to the following terms.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                className="rounded-[24px] p-8"
                style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
                  >
                    <span className="font-display font-bold text-xs text-[#6C63FF]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-[#3D4852] text-lg mb-2">{s.title}</h2>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
