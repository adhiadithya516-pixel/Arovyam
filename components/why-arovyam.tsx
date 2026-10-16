import React from "react";
import { SectionHeading } from "@/components/section-heading";

export function WhyArovyam() {
  const principles = [
    {
      kicker: "01 / UNDERSTAND",
      title: "Look for contributing factors",
      description:
        "We consider health history, daily routines, stress, and lifestyle factors rather than assuming every symptom exists in isolation.",
      highlight: false,
    },
    {
      kicker: "02 / NOURISH & ALIGN",
      title: "Support everyday wellbeing",
      description:
        "We guide therapeutic nutrition, rest, movement, and naturopathic principles while fully respecting and integrating with your medical care.",
      highlight: true,
    },
    {
      kicker: "03 / INDIVIDUALISE",
      title: "Make guidance fit the person",
      description:
        "Every recommendation is tailored to your real life—routine, preferences, and clinical realities—with safety and sustainability at the core.",
      highlight: false,
    },
  ];

  return (
    <section className="section-shell section-space" id="approach" aria-label="Why Arovyam">
      <SectionHeading
        eyebrow="THE AROVYAM APPROACH"
        title="Understand the person,"
        titleItalic="not just the symptom."
        description="Our clinical philosophy focuses on holistic assessment, evidence-informed lifestyle adjustments, and practical habits that empower you on your health journey."
      />

      <div className="principle-grid">
        {principles.map((p) => (
          <article
            key={p.kicker}
            className={`principle-card ${p.highlight ? "principle-highlight" : ""}`}
          >
            <span className="card-kicker">{p.kicker}</span>
            <h3 className="principle-title">{p.title}</h3>
            <p className="principle-desc">{p.description}</p>
          </article>
        ))}
      </div>

      <div className="approach-fine-print">
        <p>
          * Symptoms can arise from diverse medical and metabolic causes. Persistent, severe, or worsening symptoms require timely medical evaluation, diagnostic testing, and specialist consultation.
        </p>
      </div>
    </section>
  );
}
