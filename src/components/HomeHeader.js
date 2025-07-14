"use client";

import React, { useState } from "react";

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
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#about">
              About Us
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            {/* <a className="nav-link" href="#projects">Projects</a> */}
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>

          {/* CTA + Mobile Icon */}
          <div className="header-right">
            <a className="btn-primary nav-desktop" href="#contact">
              Get a Quote
            </a>
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
          {/* <a className="nav-link" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a> */}
          <a
            className="nav-link"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default HomeHeader;
