"use client";
import React, { useState } from "react";
import Head from "next/head";

const ServiceDetail = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          background-color: #121212;
          color: #ffffff;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        @media (min-width: 640px) {
          .container {
            padding: 0 24px;
          }
        }

        @media (min-width: 1024px) {
          .container {
            padding: 0 32px;
          }
        }

        .btn-primary {
          background-color: #f59e0b;
          color: #1a1a1a;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
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
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          background: transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-secondary:hover {
          background-color: #f59e0b;
          color: #1a1a1a;
          transform: translateY(-2px);
        }

        .nav-link {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
          padding: 8px 16px;
        }

        .nav-link:hover {
          color: #f59e0b;
        }

        .section-title {
          position: relative;
          display: inline-block;
          margin: 0 auto 24px;
          text-align: center;
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
          padding: 32px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .breadcrumb-link {
          color: #f59e0b;
          text-decoration: none;
        }

        .breadcrumb-link:hover {
          text-decoration: underline;
        }

        .header {
          padding: 24px 0;
          background: rgba(0, 0, 0, 0.5);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
        }

        .nav-desktop {
          display: none;
          align-items: center;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .nav-desktop {
            display: flex;
          }

          .mobile-menu-btn {
            display: none;
          }
        }
        .mobile-menu-icon {
          display: inline-block;
        }

        @media (min-width: 768px) {
          .mobile-menu-icon {
            display: none;
          }
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 8px;
        }

        .hero-section {
          padding: 110px 0;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url("https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          font-size: 14px;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
        }

        .breadcrumb-separator {
          margin: 0 8px;
          color: #6b7280;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 60px;
          }
        }

        .hero-subtitle {
          font-size: 18px;
          color: #d1d5db;
          text-align: center;
          max-width: 768px;
          margin: 0 auto;
        }

        .details-section {
          padding: 80px 0;
          background-color: #1f2937;
        }

        .details-grid {
          display: grid;
          gap: 64px;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .details-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .details-title {
          font-size: 32px;
          font-weight: 700;
          color: #f59e0b;
          margin-bottom: 24px;
        }

        .details-text {
          color: #d1d5db;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .expertise-title {
          font-size: 24px;
          font-weight: 600;
          margin: 40px 0 16px 0;
        }

        .expertise-list {
          list-style: none;
          padding: 0;
        }

        .expertise-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .expertise-icon {
          color: #f59e0b;
          margin-right: 12px;
          margin-top: 4px;
        }

        .expertise-text {
          color: #d1d5db;
        }

        .image-gallery {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .main-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .main-image:hover {
          transform: scale(1.05);
        }

        .image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .grid-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .grid-image:hover {
          transform: scale(1.05);
        }

        .related-section {
          padding: 80px 0;
          background-color: #121212;
        }

        .related-title {
          font-size: 32px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 48px;
        }

        .services-grid {
          display: grid;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-icon {
          font-size: 48px;
          color: #f59e0b;
          margin-bottom: 16px;
        }

        .service-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .service-description {
          color: #9ca3af;
          margin-bottom: 16px;
        }

        .service-link {
          color: #f59e0b;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #facc15;
        }

        .cta-section {
          padding: 80px 0;
          background-color: #000000;
          text-align: center;
        }

        .cta-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .cta-description {
          font-size: 18px;
          color: #d1d5db;
          margin-bottom: 32px;
          max-width: 512px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }

        @media (min-width: 640px) {
          .cta-buttons {
            flex-direction: row;
            justify-content: center;
          }
        }

        .footer {
          padding: 24px 0;
          background-color: #000000;
          text-align: center;
        }

        .footer-text {
          color: #9ca3af;
        }
      `}</style>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

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
            {/* <a className="nav-link" href="#projects">
                Projects
              </a> */}
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
      {mobileMenuOpen && (
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
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            className="nav-link"
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          {/* <a
              className="nav-link"
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a> */}
          <a
            className="nav-link"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}

      <main>
        <section className="hero-section">
          <div className="container">
            <nav className="breadcrumb">
              <div className="breadcrumb-item">
                <a className="breadcrumb-link" href="#">
                  Home
                </a>
                <span className="material-icons breadcrumb-separator">
                  chevron_right
                </span>
              </div>
              <div className="breadcrumb-item">
                <a className="breadcrumb-link" href="#">
                  Services
                </a>
                <span className="material-icons breadcrumb-separator">
                  chevron_right
                </span>
              </div>
              <div className="breadcrumb-item">
                <span style={{ color: "#9ca3af" }}>Civil Engineering</span>
              </div>
            </nav>
            <h2 className="hero-title">Civil Engineering</h2>
            <p className="hero-subtitle">
              Comprehensive solutions for general construction, infrastructure
              development, and end-to-end project management.
            </p>
          </div>
        </section>

        <section className="details-section">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <h2
                className="section-title"
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  marginBottom: "48px",
                }}
              >
                Our Services
              </h2>
            </div>
            <div className="details-grid">
              <div>
                <p className="details-text">
                  Our Civil Engineering division is the cornerstone of IKSU's
                  operations. We specialize in turning ambitious visions into
                  tangible realities, from foundational infrastructure to
                  complex urban development projects. Our team of seasoned
                  engineers and project managers leverages cutting-edge
                  technology and sustainable practices to deliver projects that
                  are not only structurally sound but also environmentally
                  conscious and built to last for generations.
                </p>
                <p className="details-text">
                  We manage every phase of the construction lifecycle, ensuring
                  seamless coordination, adherence to timelines, and strict
                  budget control. Our commitment to quality and safety is
                  unwavering, with rigorous checks and balances implemented at
                  every stage. Whether it's a large-scale public works project
                  or a private commercial development, we bring the same level
                  of dedication and expertise.
                </p>

                <h4 className="expertise-title">Key Areas of Expertise:</h4>
                <ul className="expertise-list">
                  <li className="expertise-item">
                    <span className="material-icons expertise-icon">
                      check_circle
                    </span>
                    <span className="expertise-text">
                      <strong>Infrastructure Development:</strong> Roads,
                      bridges, water supply systems, and drainage networks.
                    </span>
                  </li>
                  <li className="expertise-item">
                    <span className="material-icons expertise-icon">
                      check_circle
                    </span>
                    <span className="expertise-text">
                      <strong>General Construction:</strong> Residential,
                      commercial, and industrial buildings from the ground up.
                    </span>
                  </li>
                  <li className="expertise-item">
                    <span className="material-icons expertise-icon">
                      check_circle
                    </span>
                    <span className="expertise-text">
                      <strong>Project Management:</strong> Comprehensive
                      oversight including planning, execution, and delivery.
                    </span>
                  </li>
                  <li className="expertise-item">
                    <span className="material-icons expertise-icon">
                      check_circle
                    </span>
                    <span className="expertise-text">
                      <strong>Geotechnical Engineering:</strong> Site
                      investigation, soil analysis, and foundation design.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="image-gallery">
                <img
                  className="main-image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqbj0PAYPF8COGYqw_9_N3zlfUhY3AHFWaKZtJcUqTqykU3iRXTte0sxIjakgdiWAd7fq0Ses4iKCXclOrSdn1oBVq6GptmU_tMnEzv96osTKTbNpydbwatjg_lEUx2ycXG_Z5dACGDMxNryRyk8Toc6cnzBe85y7poV74Yl_Jlxs8__Nd_S4Cpkb_rTLe8Pvm_3TreYummUKnNKR0BpR-KwYYumRyGYNAbmTl81zwis3UdMYt_aOIe-LV6p99hmt34Djfo1oVCpQ"
                  alt="Civil Engineering Project 1"
                />
                <div className="image-grid">
                  <img
                    className="grid-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi_kpfnCC4PntNqEBg8_Ybxo6U6fHa3ATq6vOu7qO76EJmhgSPkjt98LURTJS8MuKdQHZS7fFodF2wozG-rGY4LduhGnjTZNjJz16LIUWDct1Lmu3JbVszpSEglXfsaw9TwMPyI4pDZ_mFl8N0S05YwLURVxSP8qn1zKMBg35Y1MILYZEk04UCNHgzRaX-ttuQcHWGz3qEeBpxPb0r-6PtqJoBAXpcmHJyTwAFNh8qNBPYMmkqOVFD9-JM-5qYwRki1g1Ba8d4enk"
                    alt="Civil Engineering Project 2"
                  />
                  <img
                    className="grid-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHqejyk-J9wiP9QriMnuLo9YnxdgoutTcDaORPloX8H9zf11_16_FTksxhEwxUTYREzsg-u32inTHzDMboyJSWeB9hinYMnuSBGHuwrWP4_cR74GTbv7oP6DenyydXYFyNa1_mZVQkaJbZR5D39NkmbqaIE-T1DRT_1qV8q4qGTyuEIWG7G1CHXHBNRHP1Cg0yjexgpG5PIdZKNnGcAMRK5bLLO-O_QaYtE5IwiJjGOP0t-cdShVeLezk-65pVZrMQpStHUgMLvNI"
                    alt="Civil Engineering Project 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="related-section">
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <h2
                className="section-title"
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  marginBottom: "48px",
                }}
              >
                Related Services
              </h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <span className="material-icons service-icon">
                  construction
                </span>
                <h3 className="service-title">
                  Building Maintenance & Renovation
                </h3>
                <p className="service-description">
                  Civil, electrical, and plumbing maintenance, paintwork,
                  repair, and complete renovations.
                </p>
                <a className="service-link" href="#">
                  Learn More
                  <span className="material-icons">arrow_forward</span>
                </a>
              </div>

              <div className="service-card">
                <span className="material-icons service-icon">
                  electrical_services
                </span>
                <h3 className="service-title">Electrical Engineering</h3>
                <p className="service-description">
                  Design, installation, and maintenance of electrical systems.
                </p>
                <a className="service-link" href="#">
                  Learn More
                  <span className="material-icons">arrow_forward</span>
                </a>
              </div>

              <div className="service-card">
                <span className="material-icons service-icon">
                  precision_manufacturing
                </span>
                <h3 className="service-title">Mechanical Engineering</h3>
                <p className="service-description">
                  Mechanical system design, installation, and servicing.
                </p>
                <a className="service-link" href="#">
                  Learn More
                  <span className="material-icons">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

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
              Let&apos;s Build Together
            </h2>

            <p
              style={{
                fontSize: "18px",
                marginTop: "22px",
                marginBottom: "32px",
                color: "#d1d5db",
                maxWidth: "800px",
                margin: "0 auto 32px auto",
              }}
            >
              If you have any upcoming tenders or projects, we&apos;d be happy
              to explore how IKSU can add value and deliver results.
            </p>

            {/* Two-column layout for Contact + Location boxes */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                flexWrap: "wrap",
                marginTop: "48px",
              }}
            >
              {/* Contact Us Box */}
              <div
                style={{
                  backgroundColor: "#374151",
                  padding: "32px",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  animation: "fadeInUp 1s ease-out",
                  width: "450px",
                }}
              >
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  Contact Us
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

              {/* Location Box */}
              <div
                style={{
                  backgroundColor: "#374151",
                  padding: "32px",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  animation: "fadeInUp 1s ease-out",
                  width: "450px",
                }}
              >
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  Our Location
                </h3>
                <p style={{ marginBottom: "16px", color: "#d1d5db" }}>
                  Street #4, G-11/3, Islamabad
                </p>
                <div
                  style={{
                    borderRadius: "6px",
                    overflow: "hidden",
                    height: "200px",
                  }}
                >
                  <iframe
                    title="IKSU Location"
                    src="https://maps.google.com/maps?q=G-11/3%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
            © 2025 IKSU Consulting Services (Pvt) Ltd. All Rights Reserved.
            <br />
            Developed by
            <a
              className="nav-link"
              href="https://anasfarooq.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#c9c4c4ff", marginLeft: "-12px", opacity: 0.6 }}
            >
              Anas Farooq
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetail;
