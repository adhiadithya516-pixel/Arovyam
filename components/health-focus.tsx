import React from "react";
import { focusAreas, whatsappUrl } from "@/lib/site";
import { ArrowUpRightIcon } from "@/components/icons";

export function HealthFocus() {
  return (
    <section className="focus-section" id="focus" aria-label="Health Focus Areas">
      <div className="section-shell focus-layout">
        <div className="focus-intro">
          <p className="eyebrow">
            <span className="eyebrow-rule" /> HEALTH FOCUS AREAS
          </p>
          <h2>
            Your long-term health
            <br />
            <em>deserves attention today.</em>
          </h2>
          <p className="focus-copy">
            Arovyam provides targeted lifestyle guidance to support wellness in several key areas. These areas represent common health concerns where clinical nutrition, yoga therapy, and daily habit changes offer meaningful supportive value alongside medical management.
          </p>
          <div className="focus-disclaimer-box">
            <strong>Important medical distinction</strong>
            <p>
              Supportive lifestyle guidance is not a promise to diagnose, prevent, cure, or reverse any disease. It does not replace care or prescription medications from your treating clinician.
            </p>
          </div>
          <div className="focus-cta-wrap">
            <a
              className="text-link"
              href={whatsappUrl("Hello Arovyam, I would like to discuss whether your supportive guidance is suitable for my health needs.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Discuss your requirements with us</span>
              <ArrowUpRightIcon size={14} />
            </a>
          </div>
        </div>

        <div className="focus-grid" role="list">
          {focusAreas.map((item, index) => (
            <div key={item.title} className="focus-item" role="listitem">
              <span className="focus-num">{String(index + 1).padStart(2, "0")}</span>
              <div className="focus-text">
                <h3 className="focus-title">{item.title}</h3>
                <p className="focus-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
