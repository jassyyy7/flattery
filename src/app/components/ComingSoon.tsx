import lashesImg from "../../imports/image.png";
import bowImg from "../../imports/image-1.png";

export function ComingSoon() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="relative bg-[#fff4f8] border-2 border-black rounded-[80px] overflow-hidden py-16 px-8 min-h-[360px] flex items-center justify-center">
          {/* Background decorative circles */}
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/50 border border-black/10" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/50 border border-black/10" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/50 border border-black/10" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/50 border border-black/10" />

          {/* Left circular image */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full overflow-hidden border-2 border-black shadow-lg rotate-[-20deg] ml-8">
            <img src={lashesImg} alt="Coming soon product" className="w-full h-full object-cover" />
          </div>

          {/* Right circular image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-2 border-black shadow-lg rotate-[18deg] mr-8">
            <img src={lashesImg} alt="Coming soon product" className="w-full h-full object-cover" />
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-2">
            <p className="font-['Taviraj',serif] text-sm tracking-[0.3em] text-black uppercase">NEW PRODUCTS</p>
            <h2 className="font-['MonteCarlo',cursive] text-8xl text-black leading-none">Coming Soon</h2>
            <p className="font-['Taviraj',serif] text-sm tracking-[0.3em] text-black uppercase mt-2">STAY TUNED</p>
          </div>

          {/* Bow decoration */}
          <div className="absolute right-48 bottom-4 w-20 h-16 rotate-[17deg]">
            <img src={bowImg} alt="Bow decoration" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
