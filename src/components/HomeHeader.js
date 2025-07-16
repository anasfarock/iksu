"use client";

import React, { useState } from "react";
import Link from "next/link";

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          padding: "24px 16px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
            IKSU
          </h1>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link className="nav-link" href="#home">
              Home
            </Link>
            <Link className="nav-link" href="#about">
              About Us
            </Link>
            <Link className="nav-link" href="#services">
              Services
            </Link>
            <Link className="nav-link" href="#contact">
              Contact
            </Link>
          </nav>

          {/* CTA + Mobile Icon */}
          <div className="header-right">
            <Link className="btn-primary nav-desktop" href="#contact">
              Get a Quote
            </Link>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            backgroundColor: "#1f1f1f",
            padding: "16px 24px",
            zIndex: 29,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Link
            className="nav-link"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            className="nav-link"
            href="#services"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            className="nav-link"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default HomeHeader;
