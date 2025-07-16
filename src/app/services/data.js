import { icons } from "lucide-react";

const servicesData = {
  "civil-engineering": {
    title: "Civil Engineering",
    subtitle:
      "Comprehensive solutions for general construction, infrastructure development, and end-to-end project management.",
    details: [
      "Our Civil Engineering division is the cornerstone of IKSU's operations. We specialize in turning ambitious visions into tangible realities, from foundational infrastructure to complex urban development projects. Our team of seasoned engineers and project managers leverages cutting-edge technology and sustainable practices to deliver projects that are not only structurally sound but also environmentally conscious and built to last for generations",
      "Our Civil Engineering division is the cornerstone of IKSU's operations. We specialize in turning ambitious visions into tangible realities, from foundational infrastructure to complex urban development projects. Our team of seasoned engineers and project managers leverages cutting-edge technology and sustainable practices to deliver projects that are not only structurally sound but also environmentally conscious and built to last for generations",
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
      // more...
    ],
    images: {
      main: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbj0PAYPF8COGYqw_9_N3zlfUhY3AHFWaKZtJcUqTqykU3iRXTte0sxIjakgdiWAd7fq0Ses4iKCXclOrSdn1oBVq6GptmU_tMnEzv96osTKTbNpydbwatjg_lEUx2ycXG_Z5dACGDMxNryRyk8Toc6cnzBe85y7poV74Yl_Jlxs8__Nd_S4Cpkb_rTLe8Pvm_3TreYummUKnNKR0BpR-KwYYumRyGYNAbmTl81zwis3UdMYt_aOIe-LV6p99hmt34Djfo1oVCpQ",
      gallery: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbj0PAYPF8COGYqw_9_N3zlfUhY3AHFWaKZtJcUqTqykU3iRXTte0sxIjakgdiWAd7fq0Ses4iKCXclOrSdn1oBVq6GptmU_tMnEzv96osTKTbNpydbwatjg_lEUx2ycXG_Z5dACGDMxNryRyk8Toc6cnzBe85y7poV74Yl_Jlxs8__Nd_S4Cpkb_rTLe8Pvm_3TreYummUKnNKR0BpR-KwYYumRyGYNAbmTl81zwis3UdMYt_aOIe-LV6p99hmt34Djfo1oVCpQ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbj0PAYPF8COGYqw_9_N3zlfUhY3AHFWaKZtJcUqTqykU3iRXTte0sxIjakgdiWAd7fq0Ses4iKCXclOrSdn1oBVq6GptmU_tMnEzv96osTKTbNpydbwatjg_lEUx2ycXG_Z5dACGDMxNryRyk8Toc6cnzBe85y7poV74Yl_Jlxs8__Nd_S4Cpkb_rTLe8Pvm_3TreYummUKnNKR0BpR-KwYYumRyGYNAbmTl81zwis3UdMYt_aOIe-LV6p99hmt34Djfo1oVCpQ",
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
      {
        title: "Maintenance & Renovation",
        slug: "maintenance-renovation",
        icons: "construction",
        link: "/services/maintenance-renovation",
        description:
          "Civil, electrical, and plumbing maintenance, paintwork, repair, and complete renovations.",
      },
    ],

    "electrical-engineering": {
      title: "Electrical Engineering",
      subtitle:
        "Comprehensive solutions for general construction, infrastructure development, and end-to-end project management.",
      details: [
        "Our Civil Engineering division is the cornerstone of IKSU's operations. We specialize in turning ambitious visions into tangible realities, from foundational infrastructure to complex urban development projects. Our team of seasoned engineers and project managers leverages cutting-edge technology and sustainable practices to deliver projects that are not only structurally sound but also environmentally conscious and built to last for generations",
        "Our Civil Engineering division is the cornerstone of IKSU's operations. We specialize in turning ambitious visions into tangible realities, from foundational infrastructure to complex urban development projects. Our team of seasoned engineers and project managers leverages cutting-edge technology and sustainable practices to deliver projects that are not only structurally sound but also environmentally conscious and built to last for generations",
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
        // more...
      ],
      images: {
        main: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbj0PAYPF8COGYqw_9_N3zlfUhY3AHFWaKZtJcUqTqykU3iRXTte0sxIjakgdiWAd7fq0Ses4iKCXclOrSdn1oBVq6GptmU_tMnEzv96osTKTbNpydbwatjg_lEUx2ycXG_Z5dACGDMxNryRyk8Toc6cnzBe85y7poV74Yl_Jlxs8__Nd_S4Cpkb_rTLe8Pvm_3TreYummUKnNKR0BpR-KwYYumRyGYNAbmTl81zwis3UdMYt_aOIe-LV6p99hmt34Djfo1oVCpQ",
        gallery: [
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbj0PAYPF8COGYqw_9_N3zlfUhY3AHFWaKZtJcUqTqykU3iRXTte0sxIjakgdiWAd7fq0Ses4iKCXclOrSdn1oBVq6GptmU_tMnEzv96osTKTbNpydbwatjg_lEUx2ycXG_Z5dACGDMxNryRyk8Toc6cnzBe85y7poV74Yl_Jlxs8__Nd_S4Cpkb_rTLe8Pvm_3TreYummUKnNKR0BpR-KwYYumRyGYNAbmTl81zwis3UdMYt_aOIe-LV6p99hmt34Djfo1oVCpQ",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCqbj0PAYPF8COGYqw_9_N3zlfUhY3AHFWaKZtJcUqTqykU3iRXTte0sxIjakgdiWAd7fq0Ses4iKCXclOrSdn1oBVq6GptmU_tMnEzv96osTKTbNpydbwatjg_lEUx2ycXG_Z5dACGDMxNryRyk8Toc6cnzBe85y7poV74Yl_Jlxs8__Nd_S4Cpkb_rTLe8Pvm_3TreYummUKnNKR0BpR-KwYYumRyGYNAbmTl81zwis3UdMYt_aOIe-LV6p99hmt34Djfo1oVCpQ",
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
  },

  // Add other services...
};

export default servicesData;
