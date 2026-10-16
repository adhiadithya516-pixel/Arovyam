import React from "react";
import { programmes } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { ProgrammeCard } from "@/components/programme-card";

export function ProgrammesSection() {
  return (
    <section className="section-shell section-space" id="programmes" aria-label="Programmes and Pricing">
      <SectionHeading
        eyebrow="STRUCTURED PROGRAMMES"
        title="Support that fits"
        titleItalic="your next steps."
        description="Structured care pathways designed for steady, sustained lifestyle improvement. Fees, duration, and inclusions reflect genuine project details. Contact us directly to confirm suitability before enrolment."
      />

      <div className="programme-grid">
        {programmes.map((programme) => (
          <ProgrammeCard key={programme.name} programme={programme} />
        ))}
      </div>

      <div className="programmes-footnote">
        <p>
          * Pricing and inclusions are based on verified project records. Exact session schedules and personalised adaptations are finalized during your consultation. Health outcomes vary from person to person; no specific result or cure is guaranteed.
        </p>
      </div>
    </section>
  );
}
