'use client'

import React, { useState, useEffect } from "react";

const NAV_MENU = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/#" },
  { name: "Docs", href: "/#" },
  { name: "Login", href: "/landing/admin" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Alternar menu mobile
  const handleOpen = () => setOpen(!open);

  // Detectar scroll para mudar o estilo da Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () =>window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className={`text-xl font-bold transition-colors ${
          isScrolling ? "text-gray-900" : "text-white"
        }`}>
          Minha Marca
        </a>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-8">
          {NAV_MENU.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className={`text-lg font-medium transition-colors ${
                  isScrolling
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Mobile (Botão de abrir) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={handleOpen}
        >
          {open ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {NAV_MENU.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

