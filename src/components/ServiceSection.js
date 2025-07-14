// components/ServiceSection.js
"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Civil Engineering",
    icon: "apartment",
    description:
      "General construction, infrastructure development, and project management.",
    link: "/services/civil-engineering",
  },
  {
    title: "Building Renovation",
    icon: "construction",
    description:
      "Civil, electrical, and plumbing maintenance, paintwork, repair, and complete renovations.",
    link: "/services/civil-engineering",
  },
  {
    title: "Perimeter Security",
    icon: "security",
    description:
      "Supply and installation of HESCO bags, chain link fencing, razor wire, and much more.",
    link: "/services/civil-engineering",
  },
  {
    title: "Electrical Engineering",
    icon: "electrical_services",
    description: "Design, installation, and maintenance of electrical systems.",
    link: "/services/civil-engineering",
  },
  {
    title: "Solar Energy",
    icon: "solar_power",
    description: "Solar panel installation and renewable energy solutions.",
    link: "/services/civil-engineering",
  },
  {
    title: "Mechanical Engineering",
    icon: "precision_manufacturing",
    description: "Mechanical system design, installation, and servicing.",
    link: "/services/civil-engineering",
  },
  {
    title: "Cyber Solutions",
    icon: "dns",
    description: "Cybersecurity, data management, and IT services.",
    link: "/services/civil-engineering",
  },
  {
    title: "Import/Export",
    icon: "public",
    description:
      "Global trade support for construction materials and commercial goods.",
    link: "/services/civil-engineering",
  },
  {
    title: "Event Management",
    icon: "event",
    description:
      "End-to-end planning for corporate, cultural, and social gatherings.",
    link: "/services/civil-engineering",
  },
];

const ServiceCard = ({ icon, title, description, link }) => {
  const cardContent = (
    <>
      <span
        className="material-icons"
        style={{ fontSize: "80px", color: "#f59e0b", marginBottom: "16px" }}
      >
        {icon}
      </span>
      <h3 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}>
        {title}
      </h3>
      <p style={{ color: "#9ca3af" }}>{description}</p>
    </>
  );

  if (link) {
    return (
      <Link href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="service-card">{cardContent}</div>
      </Link>
    );
  }

  return <div className="service-card">{cardContent}</div>;
};

const ServiceSection = () => {
  return (
    <section style={{ padding: "80px 0" }} id="services">
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
          Our Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
