import React from "react";
import { ProgrammeItem, whatsappUrl } from "@/lib/site";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";

interface ProgrammeCardProps {
  programme: ProgrammeItem;
}

export function ProgrammeCard({ programme }: ProgrammeCardProps) {
  const enquiryMessage = `Hello Arovyam, I would like to know more about the ${programme.name} programme (${programme.price} ${programme.period}).`;

  return (
    <article
      className={`programme-card ${programme.featured ? "programme-featured" : ""}`}
      aria-label={`${programme.name} Plan`}
    >
      {programme.featured && (
        <div className="featured-badge" aria-label="Most Popular Option">
          MOST POPULAR
        </div>
      )}
      <div className="programme-header">
        <span className="programme-tier">{programme.name} Plan</span>
        <div className="programme-price-wrap">
          <span className="programme-currency-value">{programme.price}</span>
          <span className="programme-period">/{programme.period.replace("per ", "")}</span>
        </div>
        <p className="programme-summary">{programme.summary}</p>
      </div>

      <div className="programme-divider" />

      <div className="programme-inclusions">
        <span className="inclusions-title">Inclusions &amp; Schedule:</span>
        <ul className="programme-feature-list">
          {programme.features.map((feature) => (
            <li key={feature} className="programme-feature-item">
              <span className="feature-check" aria-hidden="true">
                <CheckIcon size={14} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="programme-action">
        <a
          className={`button programme-cta ${
            programme.featured ? "programme-cta-featured" : "programme-cta-outline"
          }`}
          href={whatsappUrl(enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={16} />
          <span>Ask About {programme.name}</span>
        </a>
      </div>
    </article>
  );
}
