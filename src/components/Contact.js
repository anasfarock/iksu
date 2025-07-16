"use client";

import React from "react";

const ContactSection = () => {
  return (
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
          If you have any upcoming tenders or projects, we&apos;d be happy to
          explore how IKSU can add value and deliver results.
        </p>

        {/* Two-column layout for Contact + Location boxes */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            marginTop: "48px",
            marginBottom: "36px",
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
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Contact Us
            </h2>
            <div style={{ textAlign: "center", padding: "0 16px" }}>
              <p
                style={{
                  color: "#f59e0b",
                  fontSize: "24px",
                  fontWeight: "500",
                  margin: "8px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap", // allow wrapping on smaller screens
                }}
              >
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  phone
                </span>
                <a
                  href="tel:03305758294"
                  style={{
                    color: "#f59e0b",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    maxWidth: "100%",
                  }}
                >
                  0330-5758294
                </a>
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
                  flexWrap: "wrap",
                }}
              >
                <span className="material-icons" style={{ marginRight: "8px" }}>
                  phone
                </span>
                <a
                  href="tel:03338213196"
                  style={{
                    color: "#f59e0b",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    maxWidth: "100%",
                  }}
                >
                  0333-8213196
                </a>
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
                  alignItems: "flex-start",
                }}
              >
                <span
                  className="material-icons"
                  style={{ marginRight: "3px", paddingTop: "5px" }}
                >
                  email
                </span>
                <a
                  href="mailto:khattakhammad26@gmail.com"
                  style={{
                    color: "#f59e0b",
                    textDecoration: "none",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    maxWidth: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  khattakhammad26@gmail.com
                </a>
              </p>
            </div>
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
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              Our Location
            </h2>
            <p style={{ marginBottom: "16px", color: "#d1d5db" }}>
              IKSU - Nucleus Marketing, 3rd Floor Savemart Building, G-11
              Markaz, Islamabad
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.2089169497149!2d72.99930045252904!3d33.668515535869595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95f086121fb5%3A0x93f77d925850ca77!2sSave%20Mart%20G-11%20Markaz!5e0!3m2!1sen!2s!4v1752674786661!5m2!1sen!2s"
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
  );
};

export default ContactSection;
