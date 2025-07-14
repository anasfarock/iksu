"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "24px 0",
        backgroundColor: "#000000",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          color: "#9ca3af",
        }}
      >
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          © 2025 IKSU Consulting Services (Pvt) Ltd. All Rights Reserved.
          <br />
          Developed by
          <Link
            className="nav-link"
            href="https://anasfarooq.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#c9c4c4ff",
              marginLeft: "4px",
              opacity: 0.6,
              textDecoration: "none",
            }}
          >
            Anas Farooq
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
