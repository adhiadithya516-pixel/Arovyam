import React from "react";
import Link from "next/link";
import Image from "next/image";
import { site, navLinks, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, ArrowUpRightIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section-shell footer-top">
        <div className="footer-col-brand">
          <Link href="#home" className="brand footer-brand" aria-label={`${site.name} — Home`}>
            <span className="brand-logo-wrap" aria-hidden="true">
              <Image
                src="/logo-emblem.png"
                alt="Arovyam Emblem"
                width={46}
                height={48}
                className="brand-logo-img"
              />
            </span>
            <span className="brand-copy">
              <strong>{site.name}</strong>
              <small>{site.descriptor}</small>
            </span>
          </Link>
          <p className="footer-tagline-text">{site.tagline}</p>
          <p className="footer-lead-text">
            Online-first, doctor-guided supportive care combining clinical nutrition, yoga therapy, and naturopathic lifestyle guidance.
          </p>
          <div className="footer-contact-item">
            <a
              className="footer-whatsapp-btn"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp with Arovyam"
            >
              <WhatsAppIcon size={16} />
              <span>+{site.whatsappNumber.slice(0, 2)} {site.whatsappNumber.slice(2, 7)} {site.whatsappNumber.slice(7)}</span>
              <ArrowUpRightIcon size={13} />
            </a>
          </div>
        </div>

        <div className="footer-col-nav">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col-doctor">
          <h4 className="footer-col-title">Clinical Leadership</h4>
          <p className="footer-doctor-name">{site.doctorName}</p>
          <p className="footer-doctor-qual">{site.qualification}</p>
          <p className="footer-doctor-cert">{site.certificate}</p>
          <p className="footer-doctor-desc">
            Direct case coordination and follow-up. Supported by a qualified doctor team.
          </p>
        </div>

        <div className="footer-col-legal">
          <h4 className="footer-col-title">Patient Information</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/disclaimer">Medical Disclaimer</Link>
            </li>
          </ul>
          <p className="footer-legal-notice">
            Arovyam provides supportive lifestyle guidance that complements but never replaces medical diagnosis, hospital care, or prescribed pharmaceutical treatments.
          </p>
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <div className="footer-copyright">
          <span>&copy; {site.copyrightYear} {site.name}. All rights reserved.</span>
          <span className="footer-sep" aria-hidden="true">&middot;</span>
          <span>{site.descriptor}</span>
        </div>
        <div className="footer-bottom-tagline">
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
