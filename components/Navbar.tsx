"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { scrollToTop } from "@/hooks/useScrollToTop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);

  const navItems = [
    { label: "À propos", href: "#about" },
    { label: "Nos produits", href: "#products" },
    { label: "Tarifs", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={scrollToTop}
              className={`text-2xl font-bold transition-colors duration-300 hover:opacity-80 ${
                scrolled ? "text-blue-600" : "text-white"
              }`}
            >
              MonnayeursPro
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    scrolled 
                      ? "text-gray-700 hover:text-blue-600" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;