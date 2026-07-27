import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  setItemQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

function priceToNumber(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(product: Product, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });
  }

  function removeFromCart(id: string) {
    setItems((prev) => prev.filter((i) => i.product.id !== id));
  }

  function incrementItem(id: string) {
    setItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }

  function decrementItem(id: string) {
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
      )
    );
  }

  function setItemQuantity(id: string, quantity: number) {
    const safe = Number.isFinite(quantity) ? Math.max(1, Math.floor(quantity)) : 1;
    setItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, quantity: safe } : i))
    );
  }

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce(
      (sum, i) => sum + priceToNumber(i.product.price) * i.quantity,
      0
    );
    return { items, count, subtotal, addToCart, removeFromCart, incrementItem, decrementItem, setItemQuantity };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
