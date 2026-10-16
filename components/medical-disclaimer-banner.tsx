import React from "react";
import Link from "next/link";
import { ShieldCheckIcon } from "@/components/icons";

export function MedicalDisclaimerBanner() {
  return (
    <aside className="medical-note" aria-label="Medical Disclaimer Notice">
      <div className="section-shell medical-note-inner">
        <div className="medical-note-icon">
          <ShieldCheckIcon size={24} />
        </div>
        <div className="medical-note-text">
          <h3 className="medical-note-title">A Vital Note on Your Healthcare</h3>
          <p>
            Arovyam provides doctor-guided, integrative lifestyle support, clinical nutrition, yoga therapy, and naturopathic guidance. This supportive care is designed to complement—not replace—professional medical diagnosis, hospital evaluation, emergency intervention, or medications prescribed by your treating physician. Never discontinue or adjust prescribed medicines without the explicit direction of your doctor. For acute emergencies, please contact your nearest medical facility immediately.
          </p>
          <div className="medical-note-link">
            <Link href="/disclaimer">Read our full Medical Disclaimer →</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
