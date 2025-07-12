// src/components/Header.js
"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 absolute top-0 left-0 right-0 z-30 bg-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">IKSU</h1>

        <nav className="hidden md:flex items-center space-x-8">
          <a className="nav-link" href="#about">
            About Us
          </a>
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>

        <a
          className="btn-primary font-semibold py-2 px-6 rounded-lg hidden md:inline-block"
          href="#contact"
        >
          Get a Quote
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <a
              className="nav-link"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              className="nav-link"
              href="#services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="nav-link"
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              className="nav-link"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              className="btn-primary font-semibold py-2 px-6 rounded-lg text-center"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
