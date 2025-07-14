"use client";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import ServicesHeader from "@/components/ServicesHeader";
import Link from "next/link";

const ServiceDetail = ({ data }) => {
  const { title, subtitle, details, expertise, images, relatedServices } = data;

  return (
    <div>
      {/* Add Google Fonts and Material Icons */}
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

      {/* Apply global styles inline */}
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

      {/* Header */}
      <ServicesHeader />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <nav className="breadcrumb">
            <div className="breadcrumb-item">
              <a className="breadcrumb-link" href="/#home">
                Home
              </a>
              <span className="material-icons breadcrumb-separator">
                chevron_right
              </span>
            </div>
            <div className="breadcrumb-item">
              <a className="breadcrumb-link" href="/#services">
                Services
              </a>
              <span className="material-icons breadcrumb-separator">
                chevron_right
              </span>
            </div>
            <div className="breadcrumb-item">
              <span style={{ color: "#9ca3af" }}>{title}</span>
            </div>
          </nav>
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
        </div>
      </section>

      {/* Details */}
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
              Service Overview
            </h2>
          </div>

          <div className="details-grid">
            {/* Left Column: Text + Expertise */}
            <div>
              {details.map((text, i) => (
                <p key={i} className="details-text">
                  {text}
                </p>
              ))}

              <h4 className="expertise-title">Key Areas of Expertise:</h4>
              <ul className="expertise-list">
                {expertise.map((item, i) => (
                  <li key={i} className="expertise-item">
                    <span className="material-icons expertise-icon">
                      check_circle
                    </span>
                    <span className="expertise-text">
                      <strong>{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Images */}
            <div className="image-gallery">
              <img className="main-image" src={images.main} alt={title} />
              <div className="image-grid">
                {images.gallery.map((img, i) => (
                  <img
                    key={i}
                    className="grid-image"
                    src={img}
                    alt={`Gallery ${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section style={{ padding: "80px 0", backgroundColor: "#121212" }}>
        <div
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
              marginBottom: "48px",
            }}
            className="section-title"
          >
            Related Services
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="service-card"
                  style={{
                    backgroundColor: "#1f1f1f",
                    padding: "32px",
                    borderRadius: "12px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <span
                      className="material-icons"
                      style={{
                        fontSize: "80px",
                        color: "#f59e0b",
                        marginBottom: "16px",
                      }}
                    >
                      {service.icons}
                    </span>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p style={{ color: "#9ca3af" }}>{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
