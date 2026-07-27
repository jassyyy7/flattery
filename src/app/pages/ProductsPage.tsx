import { useParams, useNavigate, Navigate, Link } from "react-router";
import lashesImg from "../../imports/image.png";
import { filterTabs, getProductsByFilter, type Filter } from "../data/products";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count).fill(null).map((_, i) => (
        <span key={i} className="text-black text-sm">★</span>
      ))}
    </div>
  );
}

const validFilters: Filter[] = ["all", "new", "bestsellers"];

export function ProductsPage() {
  const { filter } = useParams();
  const navigate = useNavigate();

  const active = (filter ?? "all") as Filter;
  if (!validFilters.includes(active)) {
    return <Navigate to="/products/all" replace />;
  }

  const items = getProductsByFilter(active);

  return (
    <section className="w-full bg-[#fff4f8] min-h-screen py-16">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Page title */}
        <h1 className="font-['Poltawski_Nowy',serif] font-bold text-6xl text-black text-center tracking-wide mb-10">
          Products
        </h1>

        {/* Clickable filter bar */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filterTabs.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                onClick={() => navigate(`/products/${tab.key}`)}
                className={`border-2 border-black rounded-full px-10 py-3 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-[#fec1e0]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((product) => (
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

        {items.length === 0 && (
          <p className="text-center font-['Poltawski_Nowy',serif] text-lg text-black mt-8">
            No products in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
