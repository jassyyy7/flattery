import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-[#b8b8b8]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="font-['Poltawski_Nowy',serif] text-3xl text-black">{title}</span>
        <ChevronDown
          className={`w-7 h-7 text-black transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-6 font-['Poltawski_Nowy',serif] text-base text-black leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
