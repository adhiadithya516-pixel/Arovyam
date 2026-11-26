import { Sun } from "lucide-react";
import { NAV_LINKS, WA_DEFAULT, SERVICES } from "@/data/content";
import { scrollToId } from "@/lib/smooth";
import { Logo, WaIcon } from "@/components/ui-bits";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="relative bg-forest2 pb-10 pt-16 text-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <Logo dark />
                        <p className="mt-6 max-w-sm font-display text-xl italic leading-snug text-cream/70">
                            "Look Beyond Symptoms. Understand the Person."
                        </p>
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-whatsapp-button"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-wagreen px-6 py-3 text-[13px] font-bold text-forest transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <WaIcon className="h-4 w-4" />
                            Consult on WhatsApp
                        </a>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-sage">Explore</h4>
                        <ul className="mt-5 space-y-3">
                            {NAV_LINKS.map((l) => (
                                <li key={l.id}>
                                    <a
                                        href={l.id}
                                        data-testid={`footer-link-${l.id.replace("#", "")}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToId(l.id);
                                        }}
                                        className="text-sm text-cream/70 transition-colors hover:text-cream"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-sage">Services</h4>
                        <ul className="mt-5 space-y-3">
                            {SERVICES.map((s) => (
                                <li key={s.id} className="text-sm text-cream/70">
                                    {s.title}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 flex items-center gap-2 text-sm text-cream/70">
                            <Sun className="h-4 w-4 shrink-0 text-gold" />
                            Consultations · Mon–Sat · 9:00 AM – 7:00 PM IST
                        </p>
                    </div>
                </div>

                <div className="py-8" data-testid="footer-medical-disclaimer">
                    <p className="text-xs leading-relaxed text-cream/45">
                        <strong className="font-bold text-cream/70">Medical disclaimer:</strong> Arovyam provides
                        doctor-guided supportive care through clinical nutrition, yoga therapy and
                        naturopathy-based guidance. Our services are designed to complement — not replace —
                        appropriate medical treatment. We do not advise stopping prescribed medication without
                        your treating doctor's knowledge. If you are experiencing a medical emergency, contact
                        your nearest hospital or emergency services immediately.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
                    <span>© {year} Arovyam — Integrative Health and Naturopathy. All rights reserved.</span>
                    <span className="font-display italic text-sm text-cream/50">Small, informed steps.</span>
                </div>
            </div>
        </footer>
    );
}
