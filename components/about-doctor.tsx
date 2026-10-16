import React from "react";
import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";
import { ArrowUpRightIcon, ShieldCheckIcon } from "@/components/icons";

export function AboutDoctor() {
  return (
    <section className="doctor-section" id="doctor" aria-label="About the Doctor">
      <div className="section-shell doctor-layout">
        <div className="doctor-media">
          <div className="doctor-portrait-frame">
            <div className="doctor-portrait-inner">
              <div className="doctor-crest">
                <Image
                  src="/logo-emblem.png"
                  alt="Arovyam Emblem"
                  width={58}
                  height={62}
                  className="doctor-crest-logo"
                />
                <span className="doctor-crest-sub">DR. DARSHAN V R</span>
              </div>
              <div className="doctor-orbit" />
              <div className="doctor-orbit-outer" />
            </div>
            <div className="doctor-badge">
              <ShieldCheckIcon size={16} />
              <span>BNYS · Naturopathy &amp; Yogic Sciences</span>
            </div>
          </div>
          <p className="doctor-photo-notice">
            A genuine photograph can be added here upon final verification.
          </p>
        </div>

        <div className="doctor-copy">
          <p className="eyebrow">
            <span className="eyebrow-rule" /> DOCTOR &amp; CLINICAL LEAD
          </p>
          <h2>
            Personal guidance.
            <br />
            <em>Thoughtful follow-through.</em>
          </h2>

          <div className="doctor-header-block">
            <h3 className="doctor-name">
              {site.doctorName}, <span className="qualification">{site.qualification}</span>
            </h3>
            <p className="doctor-credential">{site.certificate}</p>
          </div>

          <div className="doctor-body">
            <p>
              At Arovyam, consultations begin by understanding the person—not merely a collection of isolated symptoms. Dr. Darshan believes that sustainable health is built upon the daily foundations of therapeutic nutrition, restorative movement, sleep alignment, and mindful stress regulation.
            </p>
            <p>
              Dr. Darshan coordinates cases and handles consultations and follow-up personally. Our practice operates with the assistance of a dedicated team of doctors. If you prefer to consult with a female doctor, this may be requested upon enquiry, subject to scheduling availability.
            </p>
          </div>

          <div className="doctor-principles">
            <div className="principle-pill">
              <strong>Individual-Centred</strong>
              <span>Every care plan reflects unique daily routines &amp; needs</span>
            </div>
            <div className="principle-pill">
              <strong>Responsible Care</strong>
              <span>Supportive guidance designed to complement primary medical treatment</span>
            </div>
          </div>

          <div className="doctor-action">
            <a
              className="text-link"
              href={whatsappUrl("Hello Dr. Darshan, I would like to ask about consultation options at Arovyam.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ask about consultation options</span>
              <ArrowUpRightIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
