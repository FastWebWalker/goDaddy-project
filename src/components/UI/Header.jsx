"use client";
import { useState } from "react";
import Container from "@/components/Container.jsx";
import { Menu, X } from "lucide-react"; // Importing icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-red-500 w-full border-b border-gray-700 relative">
      <Container>
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">LOGO</div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-6 text-lg">
            {["Home", "About", "Pricing", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white uppercase font-semibold hover:text-gray-400">
                {item}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-white text-xl hover:text-gray-400">
              🔵
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-400">
              📷
            </a>
            <a href="#" className="text-white text-xl hover:text-gray-400">
              🎵
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-red-500 z-50 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
        {/* Optionally, add a close button at the top-right */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8">
          {["Home", "About", "Pricing", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white uppercase font-semibold text-xl hover:text-gray-400"
              onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <div className="flex gap-6 mt-4">
            <a href="#" className="text-white text-2xl hover:text-gray-400">
              🔵
            </a>
            <a href="#" className="text-white text-2xl hover:text-gray-400">
              📷
            </a>
            <a href="#" className="text-white text-2xl hover:text-gray-400">
              🎵
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
