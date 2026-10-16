import React from "react";
import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, ArrowDownIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="hero section-shell" id="home" aria-label="Introduction to Arovyam">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="eyebrow-rule" /> DOCTOR-GUIDED · INDIVIDUALISED SUPPORT
        </p>
        <h1>
          Look beyond symptoms.
          <br />
          <em>Understand the person.</em>
        </h1>
        <p className="hero-lead">
          Your health journey deserves an approach that considers your health history, daily patterns, nutrition, movement, sleep and relevant clinical information.
        </p>
        <p className="body-copy">
          Arovyam offers online-first, doctor-guided supportive care through clinical nutrition, yoga therapy and naturopathy-based guidance. In-person services may be discussed when required and feasible.
        </p>
        <div className="hero-actions">
          <a
            className="button hero-button-primary"
            href={whatsappUrl("Hello Arovyam, I would like to enquire about a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            <span>Enquire on WhatsApp</span>
          </a>
          <a className="text-link" href="#programmes">
            <span>Explore Programmes</span>
            <ArrowDownIcon size={15} />
          </a>
        </div>
        <div className="hero-proof">
          <span className="proof-dot" />
          <span>Small, informed steps. Individualised guidance. Ongoing follow-up.</span>
        </div>
      </div>

      <div
        className="hero-art"
        aria-label="Holistic wellness composition representing integrative care"
        role="img"
      >
        <div className="art-label art-label-top">
          <span>{site.name} / WELLNESS</span>
          <span>EST. 2026</span>
        </div>
        <div className="art-sun" />
        <div className="art-circle" />
        <div className="leaf-stem stem-one">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="leaf-stem stem-two">
          <i />
          <i />
          <i />
        </div>
        <div className="leaf-stem stem-three">
          <i />
          <i />
        </div>
        <div className="art-badge">
          <Image
            src="/logo-emblem.png"
            alt="Arovyam Emblem"
            width={70}
            height={74}
            className="hero-art-emblem"
            priority
          />
          <span className="art-badge-text">{site.name}</span>
          <span className="art-badge-sub">{site.descriptor.toUpperCase()}</span>
        </div>
        <div className="art-label art-label-bottom">
          <span>INDIVIDUALISED DIRECTION</span>
          <span>EVIDENCE-INFORMED</span>
        </div>
      </div>
    </section>
  );
}
