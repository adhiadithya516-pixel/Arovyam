import React from "react";
import { consultationSteps, whatsappUrl } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons";

export function HowItWorks() {
  return (
    <section className="process-section" id="how-it-works" aria-label="How Consultation Works">
      <div className="section-shell section-space">
        <div className="process-header">
          <p className="eyebrow">
            <span className="eyebrow-rule" /> CONSULTATION JOURNEY
          </p>
          <h2>
            WhatsApp first.
            <br />
            <em>A clear, thoughtful path forward.</em>
          </h2>
          <p className="process-lead">
            Arovyam makes starting your health journey straightforward. Availability, suitability, and consultation details are discussed directly with the practice. Clicking WhatsApp begins a conversation—it does not automatically book or charge for an appointment.
          </p>
        </div>

        <div className="steps-grid" role="list">
          {consultationSteps.map((step) => (
            <article key={step.number} className="step-card" role="listitem">
              <div className="step-number-wrap">
                <span className="step-number">{step.number}</span>
                <span className="step-line" aria-hidden="true" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="process-cta-banner">
          <div className="process-cta-text">
            <strong>Ready to begin your conversation?</strong>
            <p>Our team is available on WhatsApp to answer preliminary questions and coordinate your care.</p>
          </div>
          <a
            className="button process-cta-button"
            href={whatsappUrl("Hello Arovyam, I would like to begin the consultation process.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Message on WhatsApp</span>
            <ArrowUpRightIcon size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
