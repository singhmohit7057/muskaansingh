import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  large?: boolean;
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function SectionTitle({ title, subtitle, centered, large }: Props) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <motion.span
          className="section-tag"
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        className="font-display font-extrabold text-[#3D4852] tracking-tight leading-tight"
        style={{ fontSize: large ? "clamp(2.5rem, 6vw, 4.5rem)" : "clamp(1.8rem, 4vw, 3rem)" }}
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        {title}
      </motion.h2>

      <motion.div
        className={`mt-4 h-0.5 rounded-full bg-[#6C63FF] ${centered ? "mx-auto" : ""}`}
        style={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25, ease }}
      />
    </div>
  );
}
