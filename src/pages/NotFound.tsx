import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

const ease = [0.16, 1, 0.3, 1] as const;

export default function NotFound() {
  useSEO({
    title: "404 — Page Not Found | Muskaan Singh",
    description: "The page you're looking for doesn't exist.",
  });

  return (
    <div className="bg-[#E0E5EC] text-[#3D4852] pt-[70px] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <div
            className="rounded-[32px] py-10 px-8 mb-8 inline-block"
            style={{ boxShadow: "inset 10px 10px 20px rgb(163,177,198,0.7), inset -10px -10px 20px rgba(255,255,255,0.6)" }}
          >
            <span
              className="font-display font-extrabold text-[#4C40C0] leading-none"
              style={{ fontSize: "clamp(6rem, 20vw, 10rem)" }}
            >
              404
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.p
          className="section-tag justify-center mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </motion.p>
        <motion.h1
          className="font-display font-extrabold text-[#3D4852] tracking-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          Looks like you're lost
        </motion.h1>
        <motion.p
          className="text-[#4B5563] text-base font-medium mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
        >
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/collection" className="btn-secondary">View Collections</Link>
        </motion.div>

      </div>
    </div>
  );
}
