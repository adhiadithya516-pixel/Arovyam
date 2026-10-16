import React from "react";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

export function ServicesSection() {
  return (
    <section className="section-shell section-space" id="services" aria-label="Services Offered">
      <SectionHeading
        eyebrow="SERVICES OFFERED"
        title="Clinical understanding."
        titleItalic="Individualised support."
        description="Our supportive guidance is tailored to complement appropriate medical care, not replace clinical diagnosis, laboratory investigations, or prescribed pharmacological treatment."
      />

      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="services-footnote">
        <p>
          * Guidance is delivered through online-first consultations. In-person services may be discussed when clinically suitable and feasible. No cures or guaranteed outcomes are promised.
        </p>
      </div>
    </section>
  );
}
