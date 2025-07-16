"use client";

import React from "react";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="hero-bg">
      <video id="bg-video" autoPlay loop muted playsInline>
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div
        className="hero-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            lineHeight: "1.2",
            marginBottom: "16px",
            textAlign: "center",
          }}
          className="animate-fade-in-down"
        >
          Crafting Architectural Wonders
        </h2>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "32px",
            color: "#d1d5db",
            maxWidth: "768px",
            margin: "0 auto 32px auto",
          }}
          className="animate-fade-in-up"
        >
          Your Ideas & Dreams Are Transformed By Us Into Long-Lasting,
          Engineered Buildings.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div className="hero-buttons">
            <Link className="btn-primary" href="#contact">
              Contact Us
            </Link>
            <Link className="btn-secondary" href="#services">
              Our Services
            </Link>
          </div>
        </div>
        <p style={{ color: "#d1d5db", fontSize: "16px" }}>
          All Our Projects Are Curated By Experts.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
