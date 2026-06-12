import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "2022", label: "Founded" },
  { value: "2",    label: "Brands" },
  { value: "KOL",  label: "Origin" },
];

function NeuCircles() {
  return (
    <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] shrink-0">
      {[0,1,2,3].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            margin: `${i * 28}px`,
            boxShadow: i % 2 === 0
              ? "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)"
              : "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)",
          }}
        />
      ))}
      {/* Center well with logo */}
      <div
        className="absolute rounded-full flex items-center justify-center overflow-hidden"
        style={{
          inset: "112px",
          boxShadow: "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)",
        }}
      >
        <img
          src="/muskaan/Muskaan_Singh.jpeg"
          alt="Label Muskaan Singh"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#E0E5EC] flex items-center pt-[70px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* LEFT — TEXT */}
          <div className="flex-1 max-w-2xl">
            <motion.p
              className="section-tag mb-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              Founder · Content Creator · Designer
            </motion.p>

            <motion.h1
              className="font-display font-extrabold text-[#3D4852] tracking-tight leading-[1.15] text-center md:text-left"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
            >
              Muskaan Singh
            </motion.h1>

            {/* Mobile-only image — between heading and description */}
            <motion.div
              className="flex justify-center my-6 md:hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease }}
            >
              <NeuCircles />
            </motion.div>

            <motion.p
              className="text-[#6B7280] text-lg font-medium mt-6 mb-10 leading-relaxed max-w-md text-center md:text-left mx-auto md:mx-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
            >
              Founder of Label Muskaan Singh — contemporary ethnic wear rooted in Indian craftsmanship and modern identity.
            </motion.p>

            {/* STAT CARDS */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="px-6 py-4 rounded-2xl"
                  style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
                >
                  <p className="font-display font-extrabold text-2xl text-[#3D4852] leading-none">{s.value}</p>
                  <p className="text-[#6B7280] text-xs font-medium mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 flex-wrap justify-center md:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease }}
            >
              <Link to="/brand" className="btn-primary">Explore Brand</Link>
              <Link to="/about" className="btn-secondary">About Me</Link>
            </motion.div>
          </div>

          {/* RIGHT — NEU CIRCLES */}
          <motion.div
            className="float hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
          >
            <NeuCircles />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
