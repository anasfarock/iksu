"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#1f2937",
        textAlign: "center",
      }}
      id="about"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "48px",
          }}
          className="section-title"
        >
          About IKSU
        </h2>
        <p
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#d1d5db",
            marginBottom: "36px",
          }}
        >
          IKSU Consulting Services (Pvt) Ltd is a forward-thinking,
          multi-dimensional company committed to delivering integrated solutions
          across a wide range of industries. Our expertise spans from material
          management and event coordination to human resource services, disaster
          response, and family entertainment center development. We also offer
          specialized civil works, perimeter security solutions (including Hesco
          bags, chain link fences, razor wire, barbed wire, and sandbags), and
          comprehensive import/export facilitation. This broad scope underscores
          our dedication to innovation, quality, and total client satisfaction.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
