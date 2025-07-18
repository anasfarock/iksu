// <!-- Developed by Anas Farooq | www.anasfarooq.com -->

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";

const IKSUWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Import Google Fonts and Material Icons */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          backgroundColor: "#121212",
          color: "#ffffff",
        }}
      >
        {/* Custom Global Styles */}
        <style jsx global>{`
          body {
            font-family: "Poppins", sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 0;
          }

          .hero-bg {
            position: relative;
            overflow: hidden;
            padding: 160px 0 256px 0;
          }

          #bg-video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: 0;
            transform: translateX(-50%) translateY(-50%);
            background-size: cover;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 2;
          }

          .btn-primary {
            background-color: #f59e0b;
            color: #1a1a1a;
            transition: background-color 0.3s, transform 0.3s;
            font-weight: 600;
            padding: 12px 32px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-block;
            border: none;
            cursor: pointer;
          }

          .btn-primary:hover {
            background-color: #facc15;
            transform: translateY(-2px);
          }

          .btn-secondary {
            border: 1px solid #f59e0b;
            color: #f59e0b;
            background-color: transparent;
            transition: background-color 0.3s, color 0.3s, transform 0.3s;
            font-weight: 600;
            padding: 12px 32px;
            border-radius: 8px;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
          }

          .btn-secondary:hover {
            background-color: #f59e0b;
            color: #1a1a1a;
            transform: translateY(-2px);
          }

          .nav-link {
            transition: color 0.3s;
            text-decoration: none;
            color: #ffffff;
          }

          .nav-link:hover {
            color: #f59e0b;
          }

          .section-title {
            position: relative;
            display: inline-block;
          }

          .section-title::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 4px;
            background-color: #f59e0b;
            border-radius: 2px;
          }

          .service-card {
            background-color: #1f1f1f;
            transition: transform 0.3s, box-shadow 0.3s;
            border-radius: 12px;
            padding: 32px;
            text-align: center;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .material-icons {
            font-family: "Material Icons";
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: "liga";
            -webkit-font-smoothing: antialiased;
          }

          .animate-fade-in-down {
            animation: fadeInDown 1s ease-out;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Ensure desktop nav is visible by default */
          .nav-desktop {
            display: flex;
            gap: 32px;
          }

          /* Right section (Get a Quote + Menu icon) */
          .header-right {
            display: flex;
            gap: 16px;
            align-items: center;
          }

          /* Menu icon hidden on desktop */
          .mobile-menu-icon {
            display: none;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .nav-desktop {
              display: none;
            }

            .mobile-menu-icon {
              display: block;
            }
          }

          .hero-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-bottom: 32px;
          }

          @media (min-width: 768px) {
            .hero-buttons {
              flex-direction: row;
              justify-content: center;
            }
          }
        `}</style>

        {/* Header */}
        {/* <HomeHeader /> */}
        <main>
          <div
            style={{
              minHeight: "100vh",
              backgroundColor: "#0f172a", // dark slate background
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              🚧 Site Temporarily Down
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                maxWidth: "600px",
                marginBottom: "1.5rem",
              }}
            >
              We’re currently performing some scheduled maintenance. We’ll be
              back shortly. Thank you for your patience.
            </p>
            <p style={{ fontSize: "1rem", opacity: 0.7 }}>
              IKSU Consulting Services (Pvt) Ltd.
            </p>
          </div>

          {/* Hero Section */}
          {/* <HomeHero /> */}

          {/* About Section */}
          {/* <AboutSection /> */}

          {/* Services Section */}
          {/* <ServiceSection /> */}

          {/* Contact Section */}
          {/* <ContactSection /> */}
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default IKSUWebsite;
