import { motion } from "framer-motion";
import { AtSign, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/form/contact";
import CollaborationForm from "../components/form/collaboration";

const ease = [0.16, 1, 0.3, 1] as const;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    items: [
      { text: "labelms.team@gmail.com",        href: "mailto:labelms.team@gmail.com" },
      { text: "workwithmuskaansingh@gmail.com", href: "mailto:workwithmuskaansingh@gmail.com" },
    ],
  },
  {
    icon: AtSign,
    label: "Instagram",
    items: [
      { text: "@muskaansingh97",    href: "https://instagram.com/muskaansingh97" },
      { text: "@labelmuskaansingh", href: "https://instagram.com/labelmuskaansingh" },
      { text: "@_ibtidaofficial_",  href: "https://instagram.com/_ibtidaofficial_" },
    ],
  },
  {
    icon: MapPin,
    label: "Based In",
    items: [
      { text: "Kolkata, India",           href: null },
      { text: "Ships Worldwide", href: null },
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px]">

      {/* HERO */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p className="section-tag justify-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            Say Hello
          </motion.p>
          <motion.h1
            className="font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.15] mt-2"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-[#6B7280] text-lg font-medium mt-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
          >
            For inquiries, collaborations, or just to say hello
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {contactInfo.map((col, i) => (
            <motion.div
              key={col.label}
              className="rounded-card p-8"
              style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
              >
                <col.icon size={18} className="text-[#6C63FF]" />
              </div>
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-3">{col.label}</p>
              <div className="space-y-2">
                {col.items.map((item) =>
                  item.href ? (
                    <a
                      key={item.text}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block text-sm font-medium text-[#3D4852] hover:text-[#6C63FF] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p key={item.text} className="text-sm text-[#6B7280]">{item.text}</p>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORMS */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

          {/* General Inquiry */}
          <motion.div
            className="rounded-card p-8 md:p-10"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="mb-8">
              <span className="section-tag">01</span>
              <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight mt-1" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}>
                General Inquiry
              </h2>
              <p className="text-[#6B7280] text-sm font-medium mt-3 leading-relaxed">
                Have a question about our collections, sizing, or want to know more about Label Muskaan Singh?
              </p>
            </div>
            <ContactForm />
          </motion.div>

          {/* Collaboration */}
          <motion.div
            className="rounded-card p-8 md:p-10"
            style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <div className="mb-8">
              <span className="section-tag">02</span>
              <h2 className="font-display font-extrabold text-[#3D4852] tracking-tight mt-1" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}>
                Work With Me
              </h2>
              <p className="text-[#6B7280] text-sm font-medium mt-3 leading-relaxed">
                Brands, creators, and collaborators — reach out for campaigns, collab collections, or content partnerships.
              </p>
            </div>
            <CollaborationForm />
          </motion.div>
        </div>

        {/* Bottom note */}
        <div className="max-w-7xl mx-auto mt-6">
          <div
            className="rounded-2xl px-6 py-4 text-center"
            style={{ boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)" }}
          >
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest">
              We respond within 24–48 hours · All inquiries are welcome
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
