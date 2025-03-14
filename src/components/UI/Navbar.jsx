import { useState, useRef } from "react";
import Text from "./Text";
import chevronDown from "@/img/icons/chevron-down-white.svg";
import Image from "next/image";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <nav className="hidden md:flex gap-[4.3vw] text-lg relative  text-white">
      {["About", "Products", "Contacts", "FAQ"].map((item) =>
        item === "Products" ? (
          <div
            key={item}
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}>
            <button className="flex items-center gap-1">
              <Text isLora={false} size="text-[18px]" weight="font-normal">
                {item}
              </Text>
              <Image
                src={chevronDown}
                alt="chevron-down"
                className={`transition-transform duration-200 ease-in-out ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Невидима зона між кнопкою і меню, щоб не пропадало */}
            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute left-0 w-48 h-2 pointer-events-none"></div>
            )}

            {/* Dropdown Menu */}
            <div
              onMouseLeave={() => setDropdownOpen(false)}
              className={`absolute left-0 mt-1 w-48 bg-gray-200 border border-gray-200 shadow-lg rounded-lg py-2 z-10 transition-opacity duration-200 ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}>
              {["Laptops", "Phones", "Accessories"].map((subItem) => (
                <a
                  key={subItem}
                  href={`/products/${subItem.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                  {subItem}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a key={item} href={`/${item.toLowerCase()}`}>
            <Text isLora={false} size="text-[18px]" weight="font-normal">
              {item}
            </Text>
          </a>
        )
      )}
    </nav>
  );
}
