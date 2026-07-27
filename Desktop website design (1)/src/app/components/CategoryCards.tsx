import { Link } from "react-router";
import lashesImg from "../../imports/image.png";

const categories = [
  { label: "Best\nsellers", to: "/products/bestsellers" },
  { label: "New\nArrivals", to: "/products/new" },
  { label: "All\nitems", to: "/products/all" },
];

export function CategoryCards() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-8 flex gap-8 justify-center">
        {categories.map((cat, i) => (
          <Link
            to={cat.to}
            key={i}
            className="relative flex-1 max-w-xs rounded-[60px] border-2 border-black bg-[#fff4f8] overflow-visible cursor-pointer hover:shadow-lg transition-shadow"
            style={{ minHeight: "340px" }}
          >
            {/* Product image peeking from top */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-2xl overflow-hidden border-2 border-black shadow-md z-10">
              <img src={lashesImg} alt="product" className="w-full h-full object-cover" />
            </div>

            {/* Card content */}
            <div className="flex items-center justify-center h-full pt-20 pb-8 px-6">
              <p className="font-['MonteCarlo',cursive] text-6xl text-black leading-tight text-center whitespace-pre-line">
                {cat.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
