import React from "react";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppEnquiry } from "@/components/whatsapp-enquiry";
import { WhatsAppIcon, ArrowUpRightIcon, ShieldCheckIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-label="Contact Arovyam">
      <div className="section-shell contact-layout">
        <div className="contact-info">
          <p className="eyebrow contact-eyebrow">
            <span className="eyebrow-rule" /> DIRECT PRACTICE ENQUIRY
          </p>
          <h2>
            Your health questions deserve
            <br />
            <em>a thoughtful conversation.</em>
          </h2>
          <p className="contact-lead">
            Whether you are considering a single consultation or one of our structured health programmes, reaching out is simple. Tell us what kind of support you need, and we will guide you on the next steps.
          </p>

          <div className="contact-details-box">
            <div className="contact-detail-row">
              <span className="detail-tag">Practice</span>
              <div>
                <strong>{site.name}</strong>
                <p>{site.descriptor}</p>
              </div>
            </div>

            <div className="contact-detail-row">
              <span className="detail-tag">Clinical Lead</span>
              <div>
                <strong>{site.doctorName}</strong>
                <p>{site.qualification} · {site.certificate}</p>
              </div>
            </div>

            <div className="contact-detail-row">
              <span className="detail-tag">WhatsApp</span>
              <div>
                <a
                  className="contact-whatsapp-direct"
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  <span>+{site.whatsappNumber.slice(0, 2)} {site.whatsappNumber.slice(2, 7)} {site.whatsappNumber.slice(7)}</span>
                  <ArrowUpRightIcon size={13} />
                </a>
                <small className="contact-number-notice">
                  Official WhatsApp contact. Confirm number before public marketing.
                </small>
              </div>
            </div>
          </div>

          <div className="consultation-process-reminder">
            <div className="reminder-header">
              <ShieldCheckIcon size={18} />
              <strong>What happens next?</strong>
            </div>
            <ol className="reminder-steps">
              <li>Your enquiry opens directly in WhatsApp with your prefilled details.</li>
              <li>Dr. Darshan or the clinical coordination team reviews your questions.</li>
              <li>We confirm availability and schedule an online consultation at your convenience.</li>
            </ol>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <WhatsAppEnquiry />
        </div>
      </div>
    </section>
  );
}
