import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartPage } from "./pages/CartPage";
import { FaqPage } from "./pages/FaqPage";
import { ContactPage } from "./pages/ContactPage";
import { FavoritesPage } from "./pages/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", element: <Navigate to="/products/all" replace /> },
      { path: "products/:filter", Component: ProductsPage },
      { path: "product/:id", Component: ProductDetailPage },
      { path: "cart", Component: CartPage },
      { path: "faq", Component: FaqPage },
      { path: "contact", Component: ContactPage },
      { path: "favorites", Component: FavoritesPage },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
