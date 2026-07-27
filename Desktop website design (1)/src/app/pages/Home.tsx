import { Hero } from "../components/Hero";
import { MarqueeBand } from "../components/MarqueeBand";
import { CategoryCards } from "../components/CategoryCards";
import { ShopCategories } from "../components/ShopCategories";
import { ProductGrid } from "../components/ProductGrid";
import { ComingSoon } from "../components/ComingSoon";

export function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <CategoryCards />
      <ShopCategories />
      <ProductGrid />
      <ComingSoon />
    </>
  );
}
