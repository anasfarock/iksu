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
              <span className="material-icons" style={{ marginRight: "8px" }}>
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
              <span className="material-icons" style={{ marginRight: "8px" }}>
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
              G-13, Islamabad
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13285.044140444243!2d72.95289321830992!3d33.650397585156654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df963bf021d1d9%3A0xb50067228215db48!2sG-13%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1752668604262!5m2!1sen!2s"
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
