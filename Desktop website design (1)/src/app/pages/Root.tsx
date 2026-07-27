import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-[#fff4f8] font-['Poltawski_Nowy',serif]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
