import { motion } from "framer-motion";
import useSEO from "../hooks/useSEO";

const ease = [0.16, 1, 0.3, 1] as const;

const sections = [
  {
    title: "Information We Collect",
    body: "When you submit forms on this website (such as contact or collaboration inquiries), we may collect your name, email address, and any information you provide in your message.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used only to respond to inquiries, manage collaborations, and communicate regarding your request. We do not sell or share your data for marketing purposes.",
  },
  {
    title: "Third-Party Services",
    body: "This website uses third-party form services (such as Web3Forms) to process submissions. These services may temporarily process your data to deliver messages.",
  },
  {
    title: "Data Security",
    body: "We take reasonable steps to protect your information, but no method of transmission over the internet is completely secure.",
  },
  {
    title: "Contact",
    body: "If you have any questions about this policy, please contact us at labelms.team@gmail.com",
  },
];

export default function Privacy() {
  useSEO({
    title: "Privacy Policy | Muskaan Singh",
    description: "Privacy policy for muskaansingh.in — how we collect, use, and protect your information.",
    canonical: "https://muskaansingh.in/privacy",
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
            Privacy Policy
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
              This website represents Muskaan Singh and her work as the founder of Label Muskaan Singh.
              Your privacy is important, and this policy explains how information is collected and used.
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
