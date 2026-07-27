import { createContext, useContext, useMemo, useState } from "react";
import { products, type Product } from "../data/products";

interface WishlistContextValue {
  likedIds: string[];
  count: number;
  items: Product[];
  isLiked: (id: string) => boolean;
  toggle: (id: string) => void;
  remove: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [likedIds, setLikedIds] = useState<string[]>([]);

  function toggle(id: string) {
    setLikedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function remove(id: string) {
    setLikedIds((prev) => prev.filter((x) => x !== id));
  }

  const value = useMemo<WishlistContextValue>(() => {
    const items = products.filter((p) => likedIds.includes(p.id));
    return {
      likedIds,
      count: likedIds.length,
      items,
      isLiked: (id: string) => likedIds.includes(id),
      toggle,
      remove,
    };
  }, [likedIds]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}
