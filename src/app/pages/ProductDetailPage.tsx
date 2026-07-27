import { useState } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus } from "lucide-react";
import lashesImg from "../../imports/image.png";
import { getProductById, products, type Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Accordion } from "../components/Accordion";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count).fill(null).map((_, i) => (
        <span key={i} className="text-black text-lg">★</span>
      ))}
    </div>
  );
}

function ReviewsBreakdown({ product }: { product: Product }) {
  // Placeholder rating distribution across 5 → 1 stars.
  const distribution = [
    { stars: 5, value: 20 },
    { stars: 4, value: 20 },
    { stars: 3, value: 20 },
    { stars: 2, value: 20 },
    { stars: 1, value: 20 },
  ];
  const max = Math.max(...distribution.map((d) => d.value));

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Stars />
        <span className="font-['Poltawski_Nowy',serif] text-base text-black">
          {product.reviews} Reviews
        </span>
      </div>
      <div className="space-y-2 max-w-md">
        {distribution.map((d) => (
          <div key={d.stars} className="flex items-center gap-3">
            <span className="font-['Poltawski_Nowy',serif] text-sm text-black w-8">{d.stars} ★</span>
            <div className="flex-1 h-3 bg-[#e6e6e6] rounded-full overflow-hidden">
              <div className="h-full bg-black rounded-full" style={{ width: `${(d.value / max) * 100}%` }} />
            </div>
            <span className="font-['Poltawski_Nowy',serif] text-sm text-black w-8 text-right">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isLiked, toggle } = useWishlist();
  const product = id ? getProductById(id) : undefined;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <Navigate to="/products/all" replace />;
  }

  const placeholderText =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

  const moreProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <section className="w-full bg-[#fff4f8] py-10">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white border-2 border-black rounded-full px-8 py-2 font-['Poltawski_Nowy',serif] text-sm tracking-wide text-black hover:bg-black hover:text-white transition-colors mb-10"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        {/* Main product view */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: image with arrows */}
          <div className="flex items-center gap-3">
            <button className="shrink-0 p-2 text-black hover:opacity-60 transition-opacity" aria-label="Previous image">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="flex-1 rounded-[48px] overflow-hidden border-4 border-black aspect-square">
              <img src={lashesImg} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <button className="shrink-0 p-2 text-black hover:opacity-60 transition-opacity" aria-label="Next image">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Right: product info */}
          <div className="flex flex-col">
            <p className="font-['Poltawski_Nowy',serif] text-sm text-[#5e5e5e] tracking-wider mb-1">
              {product.code}
            </p>
            <h1 className="font-['MonteCarlo',cursive] text-6xl text-black leading-none mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <Stars />
              <span className="font-['Poltawski_Nowy',serif] text-sm text-black">
                {product.reviews} Reviews
              </span>
            </div>
            <p className="font-['Poltawski_Nowy',serif] text-2xl text-black mb-6">{product.price}</p>
            <p className="font-['Poltawski_Nowy',serif] text-base text-black leading-relaxed mb-8 max-w-xl">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-6 mb-8">
              <span className="font-['Poltawski_Nowy',serif] text-xl text-black">Quantity:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center bg-white border-2 border-black rounded-full hover:bg-[#fec1e0] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-['Poltawski_Nowy',serif] text-xl text-black w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center bg-white border-2 border-black rounded-full hover:bg-[#fec1e0] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart + like */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 max-w-sm bg-white border-2 border-black rounded-full py-4 font-['Poltawski_Nowy',serif] font-bold text-sm tracking-widest text-black hover:bg-black hover:text-white transition-colors"
              >
                ADD TO CART
              </button>
              <button
                onClick={() => toggle(product.id)}
                className="w-14 h-14 flex items-center justify-center bg-white border-2 border-black rounded-full hover:bg-[#fec1e0] transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className={`w-6 h-6 ${isLiked(product.id) ? "fill-black text-black" : "text-black"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Accordion sections */}
        <div className="mt-16">
          <Accordion title="Description">{product.description}</Accordion>
          <Accordion title="Description">{placeholderText}</Accordion>
          <Accordion title="Description">{placeholderText}</Accordion>
          <Accordion title="Customer Reviews">
            <ReviewsBreakdown product={product} />
          </Accordion>
        </div>

        {/* More products */}
        <div className="mt-20">
          <h2 className="font-['Poltawski_Nowy',serif] text-5xl text-black text-center mb-12">
            More Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreProducts.map((p) => (
              <div key={p.id} className="flex flex-col gap-3">
                <Link to={`/product/${p.id}`} className="block rounded-[32px] overflow-hidden border-2 border-black aspect-square hover:shadow-lg transition-shadow">
                  <img src={lashesImg} alt={p.name} className="w-full h-full object-cover" />
                </Link>
                <p className="font-['Poltawski_Nowy',serif] text-xs text-black tracking-wider">{p.code}</p>
                <Stars />
                <Link to={`/product/${p.id}`} className="font-['MonteCarlo',cursive] text-2xl text-black hover:opacity-70 transition-opacity">
                  {p.name}
                </Link>
                <p className="font-['Poltawski_Nowy',serif] text-lg text-black">{p.price}</p>
                <button
                  onClick={() => addToCart(p, 1)}
                  className="mt-1 bg-white border-2 border-black rounded-full py-2.5 font-['Poltawski_Nowy',serif] font-bold text-xs tracking-widest text-black hover:bg-black hover:text-white transition-colors"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
