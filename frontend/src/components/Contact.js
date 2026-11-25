import { CheckCircle2, Clock } from "lucide-react";
import { WA_DEFAULT, IMAGES } from "@/data/content";
import { Reveal, SectionHead, WaIcon, LeafSprig } from "@/components/ui-bits";

const INCLUDE = [
    "Your name and a little about you",
    "The primary concern you'd like help with",
    "How long it has been going on",
    "Current medications or reports, if handy",
];

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden bg-forest py-16 sm:py-24 lg:py-32">
            <img
                src={IMAGES.aboutLeaves}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.1]"
                loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-forest via-forest/80 to-forest2" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <SectionHead
                            dark
                            eyebrow="Contact"
                            title={
                                <>
                                    Begin with a <em className="italic text-sage">conversation.</em>
                                </>
                            }
                            sub="Message us on WhatsApp and tell us a little about your concern. Every enquiry is read and coordinated by a doctor — Dr. Darshan personally handles first enquiries and follow-up."
                        />
                        <Reveal delay={0.2}>
                            <a
                                href={WA_DEFAULT}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-whatsapp-button"
                                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-wagreen px-8 py-4 text-base font-bold text-forest shadow-[0_20px_40px_-18px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105"
                            >
                                <WaIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                                Consult on WhatsApp
                            </a>
                        </Reveal>
                        <Reveal delay={0.28}>
                            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/70">
                                <span className="inline-flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-sage" />
                                    Consultations · Mon–Sat · 9:00 AM – 7:00 PM IST
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <LeafSprig className="h-4 w-4 text-sage" />
                                    A female doctor may be requested, subject to availability
                                </span>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.15} className="lg:col-span-5">
                        <div
                            data-testid="contact-include-card"
                            className="rounded-3xl border border-cream/15 bg-cream/[0.06] p-8 backdrop-blur-md sm:p-10"
                        >
                            <h3 className="font-display text-2xl font-semibold text-cream">
                                What to include in your first message
                            </h3>
                            <ul className="mt-6 space-y-4">
                                {INCLUDE.map((it) => (
                                    <li key={it} className="flex items-start gap-3 text-[15px] text-cream/85">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wagreen" />
                                        {it}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 border-t border-cream/15 pt-6 text-sm leading-relaxed text-cream/60">
                                No forms, no portals. One conversation on WhatsApp — and your care is coordinated
                                from there.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
