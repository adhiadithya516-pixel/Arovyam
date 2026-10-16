"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, navLinks, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon, MenuIcon, CloseIcon, ArrowUpRightIcon } from "@/components/icons";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="header-inner">
        <Link
          href="#home"
          className="brand"
          aria-label={`${site.name} — Home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-logo-wrap" aria-hidden="true">
            <Image
              src="/logo-emblem.png"
              alt="Arovyam Emblem"
              width={46}
              height={48}
              className="brand-logo-img"
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>{site.name}</strong>
            <small>{site.descriptor}</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Action */}
        <div className="header-right">
          <a
            className="button header-cta"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire on WhatsApp"
          >
            <WhatsAppIcon size={16} />
            <span>Enquire on WhatsApp</span>
            <ArrowUpRightIcon size={13} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-nav-drawer ${menuOpen ? "drawer-open" : "drawer-closed"}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-inner">
          <div className="mobile-nav-brand-header">
            <Image
              src="/logo.png"
              alt="Arovyam Logo"
              width={160}
              height={160}
              className="mobile-drawer-logo"
            />
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <a
              className="button mobile-cta-btn"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon size={18} />
              <span>Enquire on WhatsApp</span>
              <ArrowUpRightIcon size={14} />
            </a>
            <p className="mobile-nav-tagline">{site.tagline}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
