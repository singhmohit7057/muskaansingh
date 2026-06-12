import { motion } from "framer-motion";

type Props = {
  item: {
    id: number;
    title: string;
    image: string;
    category: string;
  };
};

export default function CollectionCard({ item }: Props) {
  return (
    <motion.div
      className="group cursor-pointer rounded-[24px] p-4 flex flex-col gap-4"
      style={{ boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5)" }}
      whileHover={{ y: -4, boxShadow: "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255,0.6)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Text — top */}
      <div className="px-2 pt-1 text-center">
        <span className="text-xs font-bold text-[#6C63FF] uppercase tracking-widest">{item.category}</span>
        <h3 className="font-display font-bold text-[#3D4852] group-hover:text-[#6C63FF] transition-colors duration-300 leading-tight mt-1" style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
          {item.title}
        </h3>
      </div>

      {/* Image — inset bevel well */}
      <div
        className="rounded-[18px] flex items-center justify-center overflow-hidden"
        style={{
          aspectRatio: "1/1",
          boxShadow: "inset 6px 6px 10px rgb(163,177,198,0.6), inset -6px -6px 10px rgba(255,255,255,0.5)",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-6"
        />
      </div>
    </motion.div>
  );
}
