import { motion } from "motion/react";

const items = Array(10).fill(null);

export function MarqueeBand() {
  return (
    <div className="w-full bg-[#fff4f8] border-y-2 border-black py-3 overflow-hidden">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        style={{ width: "200%" }}
      >
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-['Poltawski_Nowy',serif] text-base tracking-widest text-black shrink-0"
          >
            <span className="text-xl">♥</span>
            <span>NEW ARRIVALS</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
