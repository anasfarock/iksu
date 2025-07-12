import React from "react";

function Header({ isMenuOpen, toggleMenu }) {
  return (
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
        <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
          IKSU
        </h1>
        <nav
          style={{ display: "none" }}
          className="md:flex items-center space-x-8"
        >
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
        <a className="btn-primary" href="#contact" style={{ display: "none" }}>
          Get a Quote
        </a>
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        >
          <span className="material-icons">menu</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
