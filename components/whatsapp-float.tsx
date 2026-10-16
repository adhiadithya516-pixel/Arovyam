import React from "react";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <aside aria-label="Quick WhatsApp Enquiry">
      <a
        className="whatsapp-float-widget"
        href={whatsappUrl("Hello Arovyam, I would like to enquire about a consultation.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire with Arovyam on WhatsApp"
      >
        <span className="whatsapp-float-icon" aria-hidden="true">
          <WhatsAppIcon size={24} />
        </span>
        <span className="whatsapp-float-label">
          <span>Enquire on WhatsApp</span>
        </span>
      </a>
    </aside>
  );
}
