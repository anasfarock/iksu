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
          }}
        >
          IKSU Consultant and Construction Company is a full-service firm
          dedicated to providing comprehensive, high-quality engineering and
          construction solutions. We are fully equipped to participate in
          tenders and projects across a wide range of sectors. At IKSU, we are
          committed to delivering innovative, secure, and sustainable solutions
          that meet the highest industry standards. Our team ensures quality,
          transparency, and complete client satisfaction in every project. Our
          expertise spans multiple disciplines, including Civil Engineering for
          general construction, infrastructure development, and project
          management, as well as Building Maintenance & Renovation, covering
          civil, electrical, and plumbing maintenance, paintwork, repair, and
          complete renovations. We also specialize in Electrical Engineering,
          Solar Energy, and Mechanical Engineering, offering comprehensive
          design, installation, and maintenance services for systems and
          renewable power solutions. Additionally, we provide Cyber Solutions
          for cybersecurity and IT services, and facilitate Import/Export
          support for construction materials and commercial goods. A key area of
          our specialization is Defense Supplies & Specialized Items, where we
          supply and install HESCO bags, chain link fencing, razor wire, and
          gabions. We have proudly executed defense-related supply projects
          worth approximately PKR 8 crore, collaborating effectively with
          multiple Army divisions and units. IKSU is always ready to explore how
          our expertise can add value and deliver results on upcoming tenders
          and projects.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
