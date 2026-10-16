import React from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { WhyArovyam } from "@/components/why-arovyam";
import { AboutDoctor } from "@/components/about-doctor";
import { ServicesSection } from "@/components/services-section";
import { HealthFocus } from "@/components/health-focus";
import { ProgrammesSection } from "@/components/programmes-section";
import { HowItWorks } from "@/components/how-it-works";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactSection } from "@/components/contact-section";
import { MedicalDisclaimerBanner } from "@/components/medical-disclaimer-banner";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <WhyArovyam />
        <AboutDoctor />
        <ServicesSection />
        <HealthFocus />
        <ProgrammesSection />
        <HowItWorks />
        <FaqAccordion />
        <ContactSection />
        <MedicalDisclaimerBanner />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
