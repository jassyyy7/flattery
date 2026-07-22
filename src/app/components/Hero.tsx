import lashesImg from "../../imports/image.png";
import bowImg from "../../imports/image-1.png";

export function Hero() {
  return (
    <section className="w-full bg-[#fff4f8] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8 py-16 flex items-center gap-12 relative">
        {/* Left content */}
        <div className="flex-1 max-w-lg">
          <h1 className="font-['MonteCarlo',cursive] text-8xl text-black leading-none mb-2">
            Shop all
          </h1>
          <h2 className="font-['Poltawski_Nowy',serif] font-normal text-5xl text-black tracking-widest leading-tight mb-6">
            NEW ARRIVALS
          </h2>
          <p className="font-['Poltawski_Nowy',serif] text-base text-black leading-relaxed mb-10 max-w-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <button className="border-2 border-black bg-white rounded-full px-14 py-3 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors">
            SHOP NOW
          </button>
        </div>

        {/* Right images */}
        <div className="flex-1 relative flex justify-center items-center min-h-[500px]">
          {/* Main lashes product image */}
          <div className="relative z-10">
            <div className="w-80 h-96 rounded-3xl overflow-hidden border-2 border-black shadow-lg">
              <img src={lashesImg} alt="Lash kit" className="w-full h-full object-cover" />
            </div>
            {/* Bow decoration on top */}
            <div className="absolute -top-10 -left-14 w-28 h-24 rotate-[-16deg]">
              <img src={bowImg} alt="Bow decoration" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Second smaller lash image offset */}
          <div className="absolute bottom-0 right-4 w-48 h-56 rounded-2xl overflow-hidden border-2 border-black shadow-md z-20">
            <img src={lashesImg} alt="Lash kit detail" className="w-full h-full object-cover" />
          </div>

          {/* Bow decoration bottom right */}
          <div className="absolute bottom-16 right-0 w-20 h-16 rotate-[17deg] z-30">
            <img src={bowImg} alt="Bow decoration" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Decorative vertical stripes - right side */}
        <div className="absolute right-0 top-0 h-full flex gap-0 pointer-events-none overflow-hidden" style={{ width: '120px' }}>
          <div className="flex-1 bg-[#fec1e0] rounded-full" style={{ margin: '0 2px', transform: 'scaleY(1.1)' }} />
          <div className="flex-1 bg-[#facfe3] rounded-full" style={{ margin: '0 2px', transform: 'scaleY(1.1)' }} />
          <div className="flex-1 bg-[#fec1e0] rounded-full" style={{ margin: '0 2px', transform: 'scaleY(1.1)' }} />
        </div>
      </div>
    </section>
  );
}
