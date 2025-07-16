const servicesData = {
  "civil-engineering": {
    title: "Civil Engineering",
    imagehero:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/civil-engineering-hero.jpg",
    subtitle:
      "Comprehensive solutions for general construction, infrastructure development, and end-to-end project management.",
    details: [
      "Our Civil Engineering division is the cornerstone of IKSU's operations. We specialize in turning ambitious visions into tangible realities, from foundational infrastructure to complex urban development projects. Our team of seasoned engineers and project managers leverages cutting-edge technology and sustainable practices to deliver projects that are not only structurally sound but also environmentally conscious and built to last for generations.",
      "Our Civil Engineering division is the cornerstone of IKSU's operations. We specialize in turning ambitious visions into tangible realities, from foundational infrastructure to complex urban development projects. Our team of seasoned engineers and project managers leverages cutting-edge technology and sustainable practices to deliver projects that are not only structurally sound but also environmentally conscious and built to last for generations.",
    ],
    expertise: [
      {
        title: "Infrastructure Development",
        desc: "Roads, bridges, water supply systems, and drainage networks.",
      },
      {
        title: "General Construction",
        desc: "Residential, commercial, and industrial buildings from the ground up.",
      },
    ],
    images: {
      main: "https://www.stonewallco.com/hubfs/Construction%20civil%20engineer%20technician%20and%20architect%20working.png",
      gallery: [
        "https://cdn.shopify.com/s/files/1/0306/6419/6141/files/Untitled_6_x_4_in_5_1024x1024.png?v=1715718313",
        "https://cdn.mos.cms.futurecdn.net/q4sTR3JXhPyKRGJbEFjq8c.jpg",
      ],
    },
    relatedServices: [
      {
        title: "Electrical Engineering",
        slug: "electrical-engineering",
        icons: "electrical_services",
        link: "/services/electrical-engineering",
        description:
          "Design, installation, and maintenance of electrical systems.",
      },
      {
        title: "Mechanical Engineering",
        slug: "mechanical-engineering",
        icons: "precision_manufacturing",
        link: "/services/mechanical-engineering",
        description: "Mechanical system design, installation, and servicing.",
      },
    ],
  },

  "electrical-engineering": {
    title: "Electrical Engineering",
    imagehero:
      "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/10/The-Future-of-Electrical-Engineering.jpg",
    subtitle:
      "Design, installation, and maintenance of high-performance electrical systems for modern infrastructure.",
    details: [
      "Our Electrical Engineering services cover everything from small-scale building wiring to large industrial electrical installations. We adhere to global standards, ensuring safety, efficiency, and scalability.",
      "Our engineers work closely with clients to design energy-efficient systems tailored to the unique needs of each project, incorporating innovations like smart grids, automation, and renewable integrations.",
    ],
    expertise: [
      {
        title: "Power Distribution",
        desc: "Low and high voltage systems, switchgear, and power factor correction.",
      },
      {
        title: "Lighting Design",
        desc: "Indoor and outdoor lighting planning for functionality and aesthetics.",
      },
    ],
    images: {
      main: "https://i0.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2023/03/pexels-gunshe-ramchandani-5615117.jpg?resize=1200%2C640&ssl=1",
      gallery: [
        "https://www.sydney.edu.au/content/dam/corporate/images/faculty-of-engineering-and-information-technologies/news-and-events/2022/2022-why-study-electrical-engineering-hero.jpg",
        "https://maker.pro/storage/VtxAkWbGmVasPYFgVJaLsrqfi5WHAfteHyIHrBHS/VtxAkWbGmVasPYFgVJaLsrqfi5WHAfteHyIHrBHS.jpg",
      ],
    },
    relatedServices: [
      {
        title: "Mechanical Engineering",
        slug: "mechanical-engineering",
        icons: "precision_manufacturing",
        link: "/services/mechanical-engineering",
        description: "Mechanical system design, installation, and servicing.",
      },
      {
        title: "Maintenance & Renovation",
        slug: "maintenance-renovation",
        icons: "construction",
        link: "/services/maintenance-renovation",
        description:
          "Civil, electrical, and plumbing maintenance, paintwork, repair, and complete renovations.",
      },
    ],
  },

  // Add other services like "mechanical-engineering", "solar-energy", etc. here in similar structure
};

export default servicesData;
