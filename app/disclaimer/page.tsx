import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important medical disclaimer regarding supportive integrative health and naturopathic guidance at Arovyam.",
};

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page section-shell" id="main-content">
        <Link className="legal-back-link" href="/">
          ← Return to Home
        </Link>

        <header className="legal-header">
          <p className="eyebrow">
            <span className="eyebrow-rule" /> HEALTH &amp; SAFETY NOTICE
          </p>
          <h1>Medical Disclaimer</h1>
          <p className="legal-effective">Last updated: 2026 &middot; Practice Policy Notice</p>
          <p className="legal-lead">
            Please read this disclaimer carefully before relying on any information found on this website or initiating a consultation.
          </p>
        </header>

        <article className="legal-content">
          <section className="legal-highlight-box">
            <strong>Emergency Medical Situations</strong>
            <p>
              If you are experiencing a medical emergency, acute chest pain, shortness of breath, loss of consciousness, severe trauma, or acute neurological symptoms, do <strong>not</strong> attempt to contact Arovyam or send a WhatsApp message. Contact your local emergency ambulance service or proceed immediately to the nearest hospital emergency room.
            </p>
          </section>

          <section>
            <h2>1. Informational &amp; Educational Purpose Only</h2>
            <p>
              All materials, articles, programme descriptions, FAQs, and content on this website are published strictly for general educational and informational purposes. No content on this website is intended to serve as individual medical advice, clinical diagnosis, or a definitive treatment prescription.
            </p>
            <p>
              Browsing this website, submitting an enquiry, or communicating via WhatsApp does not in itself establish a formal doctor–patient relationship between you and {site.doctorName} or Arovyam.
            </p>
          </section>

          <section>
            <h2>2. Supportive Integrative Care — Not Replacement Medicine</h2>
            <p>
              Arovyam provides doctor-guided supportive care focusing on clinical nutrition, yoga therapy, and naturopathic daily routines. This guidance is designed solely to <em>complement</em> and operate alongside conventional medical treatment.
            </p>
            <p>
              Our services do not replace the medical diagnosis, continuous supervision, specialised clinical interventions, or laboratory monitoring performed by your primary medical doctor, endocrinologist, or treating physician.
            </p>
          </section>

          <section>
            <h2>3. Prescription Medications &amp; Physician Consultation</h2>
            <p>
              <strong>Never discontinue, reduce, or alter your prescribed pharmacological medications</strong> without the explicit evaluation and written authorization of your prescribing doctor. Naturopathic and nutritional guidance should always be shared transparently with your medical care team.
            </p>
          </section>

          <section>
            <h2>4. No Guaranteed Outcomes or Medical Cures</h2>
            <p>
              Every human body possesses unique metabolic, genetic, and physiological characteristics. Consequently, individual responses to dietary changes, movement routines, and lifestyle interventions vary significantly.
            </p>
            <p>
              Arovyam makes no claims, express or implied, regarding guaranteed outcomes, specific rates of recovery, disease reversal, or permanent cures. We are committed to responsible, ethical, and evidence-informed health guidance.
            </p>
          </section>

          <section>
            <h2>5. Clinical Qualifications &amp; Scope of Practice</h2>
            <p>
              Clinical guidance at Arovyam is coordinated by {site.doctorName}, holder of the Bachelor of Naturopathy and Yogic Sciences ({site.qualification}) and the {site.certificate}. Practice interventions fall strictly within the scope of naturopathic medicine, lifestyle counselling, and yogic therapy.
            </p>
          </section>

          <section className="legal-review-notice">
            <strong>Draft Verification Notice</strong>
            <p>
              This disclaimer is maintained as an operational framework. Doctor credentials, programme pricing, and practice details are verified from current project records and must be re-confirmed prior to formal public advertising.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
