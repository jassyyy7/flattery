import { Link } from "react-router";
import lashesImg from "../../imports/image.png";
import { getProductsByFilter } from "../data/products";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count).fill(null).map((_, i) => (
        <span key={i} className="text-black text-sm">★</span>
      ))}
    </div>
  );
}

export function ProductGrid() {
  const products = getProductsByFilter("bestsellers").slice(0, 3);
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Bestsellers banner */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#fff4f8] border-2 border-black rounded-full px-16 py-4 shadow-md">
            <p className="font-['MonteCarlo',cursive] text-4xl text-black inline">shop the </p>
            <span className="font-['Poltawski_Nowy',serif] font-bold text-3xl text-black tracking-wide">BESTSELLERS</span>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="flex flex-col gap-3 group">
              <div className="rounded-[40px] overflow-hidden border-2 border-black aspect-square group-hover:shadow-lg transition-shadow">
                <img src={lashesImg} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-['Poltawski_Nowy',serif] text-xs text-black tracking-wider mt-1">{product.code}</p>
              <StarRating />
              <p className="font-['MonteCarlo',cursive] text-2xl text-black">{product.name}</p>
              <p className="font-['Poltawski_Nowy',serif] text-xl text-black">{product.price}</p>
            </Link>
          ))}
        </div>

        {/* Shop All button */}
        <div className="flex justify-center mt-14">
          <Link
            to="/products/all"
            className="bg-white border-2 border-black rounded-full px-12 py-3 flex items-center gap-3 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors"
          >
            SHOP ALL <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
