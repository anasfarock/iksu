"use client";

import React, { useState } from "react";

const IKSUWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Import Google Fonts and Material Icons */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
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
        `}</style>

        {/* Header */}
        {/* Responsive Header */}
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
          </div>
        )}

        <main>
          {/* Hero Section */}
          <section className="hero-bg">
            <video id="bg-video" autoPlay loop muted playsInline>
              <source
                src="https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4"
                type="video/mp4"
              />
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
                <a className="btn-primary" href="#contact">
                  Contact Us
                </a>
                <a className="btn-secondary" href="#services">
                  Our Services
                </a>
              </div>
              <p style={{ color: "#d1d5db", fontSize: "16px" }}>
                All Our Projects Are Curated By Experts.
              </p>
            </div>
          </section>

          {/* About Section */}
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
                  maxWidth: "768px",
                  margin: "0 auto",
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "#d1d5db",
                }}
              >
                At IKSU Consultant and Construction Company, we are committed to
                delivering innovative, secure, and sustainable solutions that
                meet the highest industry standards. Our team is dedicated to
                ensuring quality, transparency, and complete client satisfaction
                in every project. We are fully equipped to participate in
                tenders and projects across a wide range of engineering and
                construction sectors.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section style={{ padding: "80px 0" }} id="services">
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
                  textAlign: "center",
                  marginBottom: "48px",
                }}
                className="section-title"
              >
                Our Services
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "32px",
                }}
              >
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    apartment
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Civil Engineering
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    General construction, infrastructure development, and
                    project management.
                  </p>
                </div>
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    construction
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Building Maintenance & Renovation
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    Civil, electrical, and plumbing maintenance, paintwork,
                    repair, and complete renovations.
                  </p>
                </div>
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    security
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Defense Supplies
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    Supply and installation of HESCO bags, chain link fencing,
                    razor wire, and more.
                  </p>
                </div>
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    electrical_services
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Electrical Engineering
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    Design, installation, and maintenance of electrical systems.
                  </p>
                </div>
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    solar_power
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Solar Energy
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    Solar panel installation and renewable energy solutions.
                  </p>
                </div>
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    precision_manufacturing
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Mechanical Engineering
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    Mechanical system design, installation, and servicing.
                  </p>
                </div>
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    dns
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Cyber Solutions
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    Cybersecurity, data management, and IT services.
                  </p>
                </div>
                <div className="service-card">
                  <span
                    className="material-icons"
                    style={{
                      fontSize: "80px",
                      color: "#f59e0b",
                      marginBottom: "16px",
                    }}
                  >
                    public
                  </span>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Import/Export
                  </h3>
                  <p style={{ color: "#9ca3af" }}>
                    Global trade support for construction materials and
                    commercial goods.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            style={{
              padding: "80px 0",
              backgroundColor: "#1f2937",
              textAlign: "center",
            }}
            id="contact"
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
                  marginBottom: "16px",
                }}
                className="section-title"
              >
                Let's Build Together
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "32px",
                  color: "#d1d5db",
                  maxWidth: "512px",
                  margin: "0 auto 32px auto",
                }}
              >
                If you have any upcoming tenders or projects, we'd be happy to
                explore how IKSU can add value and deliver results.
              </p>
              <div
                style={{
                  backgroundColor: "#374151",
                  padding: "32px",
                  borderRadius: "8px",
                  display: "inline-block",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  Contact Kashif Jamal
                </h3>
                <p
                  style={{
                    color: "#f59e0b",
                    fontSize: "24px",
                    fontWeight: "500",
                    margin: "8px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    phone
                  </span>
                  0301-0444544
                </p>
                <p
                  style={{
                    color: "#f59e0b",
                    fontSize: "24px",
                    fontWeight: "500",
                    margin: "8px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ marginRight: "8px" }}
                  >
                    phone
                  </span>
                  0333-8213196
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
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
            <p>
              © 2024 IKSU Consultant and Construction Company. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IKSUWebsite;
