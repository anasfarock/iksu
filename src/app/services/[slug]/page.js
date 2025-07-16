import servicesData from "../data";
import ServiceDetail from "@/components/ServiceDetail";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = servicesData[slug];

  if (!service) {
    return <div>Service not found</div>;
  }

  return <ServiceDetail data={service} />;
}
