import { Link } from "react-router";
import { Heart, X } from "lucide-react";
import lashesImg from "../../imports/image.png";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count).fill(null).map((_, i) => (
        <span key={i} className="text-black text-sm">★</span>
      ))}
    </div>
  );
}

export function FavoritesPage() {
  const { items, remove } = useWishlist();
  const { addToCart } = useCart();

  return (
    <section className="w-full bg-[#fff4f8] min-h-screen py-14">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-10">
          <Heart className="w-8 h-8 fill-black text-black" />
          <h1 className="font-['Poltawski_Nowy',serif] text-5xl text-black">Your Favorites</h1>
        </div>

        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-['Poltawski_Nowy',serif] text-lg text-black mb-6">
              You haven't liked any products yet. Tap the ♥ on a product to save it here.
            </p>
            <Link
              to="/products/all"
              className="inline-block bg-white border-2 border-black rounded-full px-10 py-3 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors"
            >
              BROWSE PRODUCTS
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((product) => (
              <div key={product.id} className="relative flex flex-col gap-3">
                <button
                  onClick={() => remove(product.id)}
                  className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-white border-2 border-black rounded-full hover:bg-[#fec1e0] transition-colors"
                  aria-label="Remove from favorites"
                >
                  <X className="w-4 h-4" />
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="block rounded-[32px] overflow-hidden border-2 border-black aspect-square hover:shadow-lg transition-shadow"
                >
                  <img src={lashesImg} alt={product.name} className="w-full h-full object-cover" />
                </Link>
                <p className="font-['Poltawski_Nowy',serif] text-xs text-black tracking-wider">{product.code}</p>
                <Stars />
                <Link
                  to={`/product/${product.id}`}
                  className="font-['MonteCarlo',cursive] text-2xl text-black hover:opacity-70 transition-opacity"
                >
                  {product.name}
                </Link>
                <p className="font-['Poltawski_Nowy',serif] text-lg text-black">{product.price}</p>
                <button
                  onClick={() => addToCart(product, 1)}
                  className="mt-1 bg-white border-2 border-black rounded-full py-2.5 font-['Poltawski_Nowy',serif] font-bold text-xs tracking-widest text-black hover:bg-black hover:text-white transition-colors"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
