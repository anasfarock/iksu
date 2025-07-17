"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Civil Engineering",
    icon: "apartment",
    description:
      "General construction, infrastructure development, and management.",
    link: "/services/civil-engineering",
  },
  {
    title: "Electrical Engineering",
    icon: "electrical_services",
    description: "Design, installation, and maintenance of electrical systems.",
    link: "/services/electrical-engineering",
  },
  {
    title: "Mechanical Engineering",
    icon: "precision_manufacturing",
    description: "Mechanical system design, installation, and servicing.",
    link: "/services/mechanical-engineering",
  },
  {
    title: "Building and Renovation",
    icon: "construction",
    description:
      "Civil, electrical, and plumbing maintenance, paintwork, repair, and complete renovations.",
    link: "/services/building-and-renovation",
  },
  {
    title: "Perimeter Security",
    icon: "security",
    description:
      "Supply and installation of HESCO bags, chain link fencing, razor wire, and much more.",
    link: "/services/perimeter-security",
  },
  {
    title: "Solar Energy",
    icon: "solar_power",
    description: "Solar panel installation, renewable energy solutions, and much more.",
    link: "/services/solar-energy",
  },
  // {
  //   title: "Cyber Solutions",
  //   icon: "dns",
  //   description: "Cybersecurity, data management, and IT services.",
  //   link: "/services/cyber-solutions",
  // },
  {
    title: "Import/Export",
    icon: "public",
    description:
      "Global trade support for construction materials and commercial goods.",
    link: "/services/import-export",
  },
  // {
  //   title: "Event Management",
  //   icon: "event",
  //   description:
  //     "End-to-end planning for corporate, cultural, and social gatherings.",
  //   link: "/services/event-management",
  // },
  {
    title: "Human Resource",
    icon: "group",
    description: "Talent acquisition, development, and workforce management.",
    link: "/services/human-resource",
  },
  // {
  //   title: "Mall Management",
  //   icon: "store_mall_directory",
  //   description:
  //     "Optimized operations and tenant coordination for retail spaces.",
  //   link: "/services/mall-management",
  // },
  {
    title: "Security & Training",
    icon: "security",
    description:
      "Robust security systems paired with certified training programs.",
    link: "/services/security-and-training",
  },
  {
    title: "Material Management & Logistics",
    icon: "local_shipping",
    description:
      "Efficient procurement, inventory, and international logistics solutions.",
    link: "/services/material-management-and-logistics",
  },
  {
    title: "Janitorial & Fumigation Services",
    icon: "cleaning_services",
    description: "Professional cleaning and eco-safe fumigation services.",
    link: "/services/janitorial-and-fumigation",
  },
  {
    title: "Canteen & Cafeteria Services",
    icon: "restaurant",
    description:
      "Hygienic and cost-effective meal services for staff and operations.",
    link: "/services/canteen-and-cafeteria",
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
            marginBottom: "48px",
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
