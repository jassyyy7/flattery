export type ProductCategory = "new" | "bestsellers";

export interface Product {
  id: string;
  code: string;
  name: string;
  price: string;
  categories: ProductCategory[];
  reviews: number;
  description: string;
}

const placeholder =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

export const products: Product[] = [
  { id: "p1", code: "J9134", name: "Cloud Lip Cream", price: "19.99$", categories: ["bestsellers", "new"], reviews: 27, description: placeholder },
  { id: "p2", code: "J9135", name: "Velvet Blush", price: "16.99$", categories: ["bestsellers"], reviews: 18, description: placeholder },
  { id: "p3", code: "J9136", name: "Glow Serum", price: "24.99$", categories: ["new"], reviews: 42, description: placeholder },
  { id: "p4", code: "J9137", name: "Silk Lash Kit", price: "21.99$", categories: ["bestsellers", "new"], reviews: 63, description: placeholder },
  { id: "p5", code: "J9138", name: "Dewy Highlighter", price: "18.99$", categories: ["bestsellers"], reviews: 12, description: placeholder },
  { id: "p6", code: "J9139", name: "Petal Bow Clip", price: "9.99$", categories: ["new"], reviews: 8, description: placeholder },
  { id: "p7", code: "J9140", name: "Rose Tint Balm", price: "14.99$", categories: ["bestsellers"], reviews: 35, description: placeholder },
  { id: "p8", code: "J9141", name: "Angel Mist Spray", price: "22.99$", categories: ["new"], reviews: 21, description: placeholder },
  { id: "p9", code: "J9142", name: "Soft Matte Powder", price: "20.99$", categories: ["bestsellers", "new"], reviews: 54, description: placeholder },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export type Filter = "all" | ProductCategory;

export const filterTabs: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "new", label: "New Arrivals" },
  { key: "bestsellers", label: "Bestsellers" },
];

export function getProductsByFilter(filter: Filter): Product[] {
  if (filter === "all") return products;
  return products.filter((p) => p.categories.includes(filter));
}
