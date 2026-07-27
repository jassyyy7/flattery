import { Link } from "react-router";
import svgPaths from "../../imports/ButterflySilhouetteSvgrepoCom3/svg-8qfdexqan4";
import bagPaths from "../../imports/BagOutline/svg-xzdyt9w5eg";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ButterflyIcon({ className = "", color = "black" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 502.999 442.975" fill="none">
      <path d={svgPaths.p31b0ff40} fill={color} />
    </svg>
  );
}

function BagIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 229.81 274.561" fill="none">
      <path d={bagPaths.p1aa5c700} fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

export function Navbar() {
  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();
  return (
    <nav className="w-full bg-[#fff4f8] border-b-2 border-black sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left nav links */}
        <div className="flex items-center gap-10">
          <Link to="/" className="font-['Poltawski_Nowy',serif] text-sm tracking-widest text-black hover:opacity-70 transition-opacity">HOME</Link>
          <Link to="/products/all" className="font-['Poltawski_Nowy',serif] text-sm tracking-widest text-black hover:opacity-70 transition-opacity">SHOP</Link>
        </div>

        {/* Center butterfly logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 hover:opacity-70 transition-opacity" aria-label="Home">
          <ButterflyIcon className="w-14 h-12" color="black" />
        </Link>

        {/* Right: social icons + cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-black">
            <a href="#" className="hover:opacity-60 transition-opacity"><InstagramIcon /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><TwitterIcon /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><PinterestIcon /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><MailIcon /></a>
          </div>
          <Link to="/favorites" className="relative p-2 text-black hover:opacity-60 transition-opacity" aria-label="Favorites">
            <Heart className="w-6 h-6" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center bg-[#fec1e0] text-black rounded-full px-1 font-['Poltawski_Nowy',serif] text-[10px] border border-black">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="ml-2 flex items-center gap-2 bg-black text-white rounded-full px-6 py-2 hover:bg-gray-900 transition-colors">
            <BagIcon className="w-5 h-5" />
            <span className="font-['Poltawski_Nowy',serif] text-sm tracking-wide">Cart</span>
            {count > 0 && (
              <span className="ml-1 min-w-[22px] h-[22px] flex items-center justify-center bg-[#fec1e0] text-black rounded-full px-1.5 font-['Poltawski_Nowy',serif] text-xs border border-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
