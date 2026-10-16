import React from "react";
import { ServiceItem, whatsappUrl } from "@/lib/site";
import {
  StethoscopeIcon,
  ActivityIcon,
  NutritionIcon,
  YogaIcon,
  LeafIcon,
  GutIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const renderIcon = (iconName: ServiceItem["icon"]) => {
    const props = { size: 28, className: "service-card-icon" };
    switch (iconName) {
      case "stethoscope":
        return <StethoscopeIcon {...props} />;
      case "activity":
        return <ActivityIcon {...props} />;
      case "nutrition":
        return <NutritionIcon {...props} />;
      case "yoga":
        return <YogaIcon {...props} />;
      case "leaf":
        return <LeafIcon {...props} />;
      case "gut":
        return <GutIcon {...props} />;
      default:
        return <LeafIcon {...props} />;
    }
  };

  const whatsappMessage = `Hello Arovyam, I would like to enquire about the ${service.title} service.`;

  return (
    <article className="service-card" id={service.id}>
      <div className="service-card-header">
        <div className="service-icon-wrapper">{renderIcon(service.icon)}</div>
        <span className="service-number" aria-hidden="true">
          {service.number}
        </span>
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-footer">
        <a
          className="service-link"
          href={whatsappUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${service.title} on WhatsApp`}
        >
          <span>Enquire about this service</span>
          <ArrowUpRightIcon size={14} />
        </a>
      </div>
    </article>
  );
}
