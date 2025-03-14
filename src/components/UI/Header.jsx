"use client";
import { useState } from "react";
import Container from "@/components/Container.jsx";
import { Menu, X } from "lucide-react"; // Importing icons
import Image from "next/image";
import logo from "@/img/logo.svg";
import Navbar from "./Navbar";
import Instagram from "@/img/icons/instagram-white.svg";
import TikTok from "@/img/icons/tik-tok-white.svg";
import Youtube from "@/img/icons/youtube-white.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent w-full py-[1.5vh] absolute top-0 left-0 z-50 ">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Image src={logo} alt="Logo" />
          {/* Navigation - Desktop */}
          <Navbar />

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#">
              <Image src={Instagram} alt="Instagram" />
            </a>
            <a href="#">
              <Image src={TikTok} alt="TikTok" />
            </a>
            <a href="#">
              <Image src={Youtube} alt="Youtube" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

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
              <a href="#">
                <Image src={Instagram} alt="Instagram" />
              </a>
              <a href="#">
                <Image src={TikTok} alt="TikTok" />
              </a>
              <a href="#">
                <Image src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
