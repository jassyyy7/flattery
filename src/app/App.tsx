import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBand } from "./components/MarqueeBand";
import { CategoryCards } from "./components/CategoryCards";
import { ShopCategories } from "./components/ShopCategories";
import { ProductGrid } from "./components/ProductGrid";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fff4f8] font-['Poltawski_Nowy',serif]">
      <Navbar />
      <Hero />
      <MarqueeBand />
      <CategoryCards />
      <ShopCategories />
      <ProductGrid />
      <ComingSoon />
      <Footer />
    </div>
  );
}
