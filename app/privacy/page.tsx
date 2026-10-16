import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy explaining data handling, WhatsApp communication, and information practices for Arovyam.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page section-shell" id="main-content">
        <Link className="legal-back-link" href="/">
          ← Return to Home
        </Link>

        <header className="legal-header">
          <p className="eyebrow">
            <span className="eyebrow-rule" /> DATA PROTECTION &amp; CONFIDENTIALITY
          </p>
          <h1>Privacy Policy</h1>
          <p className="legal-effective">Last updated: 2026 &middot; Practice Policy Draft</p>
          <p className="legal-lead">
            At Arovyam, we treat your personal privacy with the highest degree of respect and discretion. This policy outlines how information is handled when you interact with our website and consultation channels.
          </p>
        </header>

        <article className="legal-content">
          <section>
            <h2>1. Architecture: Website → WhatsApp → Doctor</h2>
            <p>
              To maintain simplicity and protect personal health privacy, this public website operates on a direct communication model: <strong>Website &rarr; WhatsApp &rarr; Doctor</strong>.
            </p>
            <p>
              This public website does <strong>not</strong> maintain a database of patient records, an online electronic medical record (EMR) portal, or cloud-stored diagnostic files. When you submit our web enquiry form, your browser prepares a pre-filled message directly in the official WhatsApp application without logging or storing your medical data on our web server.
            </p>
          </section>

          <section>
            <h2>2. Information You Choose to Share</h2>
            <p>
              When initiating contact with Arovyam, you may choose to provide:
            </p>
            <ul>
              <li>Your full name</li>
              <li>General area of health interest (e.g., Diabetes Support, Nutrition, Yoga Therapy)</li>
              <li>Preferred contact method (WhatsApp, phone call, online consultation)</li>
              <li>Optional contact telephone number</li>
              <li>A brief introductory message outlining your enquiry</li>
            </ul>
            <p>
              We explicitly request that you <strong>do not</strong> submit confidential medical lab reports, diagnostic scans, or detailed medical histories via the initial website enquiry.
            </p>
          </section>

          <section>
            <h2>3. How Your Information Is Used</h2>
            <p>
              Information shared during enquiries is used strictly for the following purposes:
            </p>
            <ul>
              <li>Responding directly to your health enquiry</li>
              <li>Discussing consultation suitability and answering questions regarding programmes</li>
              <li>Coordinating and scheduling online or in-person consultation appointments</li>
              <li>Following up with you regarding your ongoing care plan (if enrolled)</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third-party advertisers, marketing networks, or data brokers.
            </p>
          </section>

          <section>
            <h2>4. Third-Party Messaging Platforms (WhatsApp)</h2>
            <p>
              Our primary communication channel is WhatsApp (provided by Meta Platforms, Inc.). When you click to enquire, your interaction transitions to WhatsApp and is subject to WhatsApp&apos;s Terms of Service and Privacy Policy, including their end-to-end encryption protocols.
            </p>
          </section>

          <section>
            <h2>5. Confidentiality &amp; Clinical Records</h2>
            <p>
              Any clinical information, dietary notes, or lifestyle records gathered during formal private consultations with {site.doctorName} and the medical team are treated with professional healthcare confidentiality. Access is restricted strictly to authorized clinical personnel involved in your care.
            </p>
          </section>

          <section>
            <h2>6. Your Privacy Rights</h2>
            <p>
              You have the right to request access to any personal contact information we hold, request corrections to your information, or request the deletion of your enquiry history from our communication channels, subject to legal and professional record-keeping obligations.
            </p>
            <p>
              To exercise these rights, simply message our practice team directly on WhatsApp at +{site.whatsappNumber}.
            </p>
          </section>

          <section className="legal-review-notice">
            <strong>Draft Privacy Notice</strong>
            <p>
              This policy document is a draft representation of Arovyam&apos;s privacy practices. It should be reviewed and confirmed by the practice management and appropriate legal counsel prior to formal business publication.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
