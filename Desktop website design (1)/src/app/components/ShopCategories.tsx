import svgPaths from "../../imports/Desktop3/svg-d09vufowlv";

function StarIcon() {
  return (
    <svg viewBox="0 0 454.057 392.812" className="w-12 h-12" fill="none">
      <path
        clipRule="evenodd"
        d={svgPaths.pfaed600}
        fillRule="evenodd"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32.9181"
      />
    </svg>
  );
}

const items = [
  { title: "SHOP NOW", desc: "Lorem ipsum dolor sit amet" },
  { title: "SHOP NOW", desc: "Lorem ipsum dolor sit amet" },
  { title: "SHOP NOW", desc: "Lorem ipsum dolor sit amet" },
  { title: "SHOP NOW", desc: "Lorem ipsum dolor sit amet" },
];

export function ShopCategories() {
  return (
    <section className="w-full bg-[#fec1e0] py-14">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <StarIcon />
            <p className="font-['Poltawski_Nowy',serif] font-bold text-lg tracking-widest text-black">
              {item.title}
            </p>
            <p className="font-['Poltawski_Nowy',serif] text-sm text-black leading-snug max-w-[160px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
