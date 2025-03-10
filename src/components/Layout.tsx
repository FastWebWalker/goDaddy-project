import Header from "@/components/UI/Header.js";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components/UI/Footer.js";

// Layout Component
export default function Layout() {
  return (
    <div className="bg-black text-white w-[100vw]">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
