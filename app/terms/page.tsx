import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for Arovyam Integrative Health & Naturopathy consultations and supportive programmes.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page section-shell" id="main-content">
        <Link className="legal-back-link" href="/">
          ← Return to Home
        </Link>

        <header className="legal-header">
          <p className="eyebrow">
            <span className="eyebrow-rule" /> PATIENT &amp; VISITOR INFORMATION
          </p>
          <h1>Terms and Conditions</h1>
          <p className="legal-effective">Last updated: 2026 &middot; Practice Policy Draft</p>
          <p className="legal-lead">
            Please read these Terms and Conditions carefully before exploring our website, requesting a consultation, or enrolling in an Arovyam programme.
          </p>
        </header>

        <article className="legal-content">
          <section>
            <h2>1. Nature and Scope of Services</h2>
            <p>
              Arovyam provides online-first, doctor-guided supportive care combining clinical nutrition, yoga therapy, and naturopathic lifestyle guidance under the clinical coordination of {site.doctorName} ({site.qualification}, {site.certificate}) and assisting doctors.
            </p>
            <p>
              Our services are supportive and educational in nature. They are designed to assist you in establishing nourishing dietary patterns, restorative habits, physical vitality, and mindful routines that support overall wellbeing.
            </p>
          </section>

          <section>
            <h2>2. Medical Boundaries &amp; Non-Replacement Notice</h2>
            <p>
              Arovyam does not provide emergency medical treatment, intensive hospital care, acute critical interventions, or prescription drug alterations through this website or general consultations.
            </p>
            <p>
              Our supportive guidance is strictly intended to complement—not replace—the care, diagnosis, laboratory evaluations, or prescribed treatments provided by your primary physician, endocrinologist, cardiologist, or other licensed healthcare specialists. You must never discontinue, alter, or pause any prescribed pharmacological medication without the express consent of your treating physician.
            </p>
          </section>

          <section>
            <h2>3. Consultation Process &amp; Enquiries</h2>
            <p>
              Initiating contact via WhatsApp, our web enquiry form, or email represents an initial enquiry only. Sending an enquiry does not establish a formal doctor–patient relationship, nor does it guarantee an immediate consultation appointment.
            </p>
            <p>
              Consultation availability, suitability for supportive care, session formats (online video, phone, or feasible in-person options), and scheduling will be communicated directly before any consultation takes place.
            </p>
          </section>

          <section>
            <h2>4. Client Responsibilities &amp; Health Disclosures</h2>
            <p>
              To ensure safe and appropriate guidance, you agree to provide truthful, accurate, and relevant health information when asked by the doctor during your consultation. You should disclose all current medical conditions, allergies, physical limitations, pregnancy status, and current medications.
            </p>
            <p>
              For public web enquiries, you agree <strong>not</strong> to transmit sensitive medical histories, unredacted laboratory reports, or confidential diagnostic records through public web forms.
            </p>
          </section>

          <section>
            <h2>5. Programme Fees, Schedules &amp; Inclusions</h2>
            <p>
              Programme fees (such as Basic, Standard, and Premium plans) are transparently outlined on our website. All fees, session inclusions, durations, and payment methods must be reviewed and agreed upon directly with the practice prior to enrolment.
            </p>
            <p>
              Cancellation and rescheduling policies for scheduled sessions will be communicated before payment. Since personalised plans require clinical preparation time, missed appointments without reasonable advance notice may be subject to rescheduling policies.
            </p>
          </section>

          <section>
            <h2>6. Health Outcomes &amp; No Warranty</h2>
            <p>
              Human physiology, genetics, daily adherence, and clinical conditions vary widely between individuals. Arovyam makes no warranties, express or implied, and does not promise guaranteed results, absolute disease reversal, or specific medical cures.
            </p>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All written content, brand trademarks, logos, guides, and materials provided on the website and within consultation programmes remain the intellectual property of Arovyam and may not be copied, reproduced, or distributed without prior written consent.
            </p>
          </section>

          <section className="legal-review-notice">
            <strong>Legal Review Notice</strong>
            <p>
              This document serves as a operational draft framework for Arovyam. Prior to formal commercial expansion, these terms should undergo formal review by an Indian healthcare legal advisor to ensure alignment with local clinical regulations.
            </p>
          </section>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
