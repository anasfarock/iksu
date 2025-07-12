// src/components/Services.js
export default function Services() {
  const services = [
    {
      icon: "apartment",
      title: "Civil Engineering",
      description:
        "General construction, infrastructure development, and project management.",
    },
    {
      icon: "construction",
      title: "Building Maintenance & Renovation",
      description:
        "Civil, electrical, and plumbing maintenance, paintwork, repair, and complete renovations.",
    },
    {
      icon: "security",
      title: "Defense Supplies",
      description:
        "Supply and installation of HESCO bags, chain link fencing, razor wire, and more.",
    },
    {
      icon: "electrical_services",
      title: "Electrical Engineering",
      description:
        "Design, installation, and maintenance of electrical systems.",
    },
    {
      icon: "solar_power",
      title: "Solar Energy",
      description: "Solar panel installation and renewable energy solutions.",
    },
    {
      icon: "precision_manufacturing",
      title: "Mechanical Engineering",
      description: "Mechanical system design, installation, and servicing.",
    },
    {
      icon: "dns",
      title: "Cyber Solutions",
      description: "Cybersecurity, data management, and IT services.",
    },
    {
      icon: "public",
      title: "Import/Export",
      description:
        "Global trade support for construction materials and commercial goods.",
    },
  ];

  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 section-title">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card p-8 text-center">
              <span className="material-icons text-5xl text-yellow-500 mb-4">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
