import { useState } from "react";
import { Container } from "@/components/Container.js";
import { Menu, X } from "lucide-react"; // Importing icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-red-500 w-full border-b border-gray-700">
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4 border-t border-gray-700">
            {["Home", "About", "Pricing", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white uppercase font-semibold hover:text-gray-400">
                {item}
              </a>
            ))}
            <div className="flex gap-4 mt-2">
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
          </div>
        )}
      </Container>
    </header>
  );
}
