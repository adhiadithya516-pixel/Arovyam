import React from "react";

export function TrustStrip() {
  const items = [
    { number: "01", label: "Doctor-Guided Coordination", desc: "Led by Dr. Darshan V R" },
    { number: "02", label: "Individualised Support", desc: "Tailored to your daily routine" },
    { number: "03", label: "Online-First Consultations", desc: "Accessible from anywhere" },
    { number: "04", label: "Responsible Practice", desc: "Complementing medical care" },
  ];

  return (
    <section className="trust-strip" aria-label="Practice standards at a glance">
      <div className="trust-strip-inner">
        {items.map((item) => (
          <div key={item.number} className="trust-item">
            <span className="trust-number">{item.number}</span>
            <div className="trust-text">
              <strong className="trust-label">{item.label}</strong>
              <small className="trust-desc">{item.desc}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
