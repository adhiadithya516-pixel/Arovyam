import { ArrowUpRight, Award, UserRoundCheck } from "lucide-react";
import { DOCTORS, IMAGES } from "@/data/content";
import { Reveal, SectionHead, WaIcon, LeafSprig } from "@/components/ui-bits";

function DoctorCard({ d, i }) {
    return (
        <div
            data-testid={`doctor-card-${d.id}`}
            className="group relative flex h-full flex-col rounded-3xl border border-cream/10 bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-cream/25 hover:shadow-[0_40px_70px_-35px_rgba(0,0,0,0.7)] sm:p-10"
        >
            <span className="pointer-events-none absolute right-8 top-7 font-display text-5xl font-light italic text-leaf/25">
                {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2 text-sage">
                <LeafSprig className="h-4 w-4" />
                <span className="text-[11px] font-bold uppercase tracking-[0.24em]">
                    Naturopathy & Yoga Physician
                </span>
            </div>

            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
                {d.name}
            </h3>
            <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.22em] text-leaf">{d.credentials}</p>

            {d.badges.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                    {d.badges.map((b) => (
                        <span
                            key={b}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold ${
                                b === "Case Coordinator"
                                    ? "bg-forest text-cream"
                                    : "bg-sagelight text-leaf"
                            }`}
                        >
                            {b === "Case Coordinator" ? (
                                <UserRoundCheck className="h-3 w-3" />
                            ) : (
                                <Award className="h-3 w-3" />
                            )}
                            {b}
                        </span>
                    ))}
                </div>
            )}

            <div className="mt-6 space-y-3.5 border-l-2 border-sagelight pl-5">
                {d.bio.map((p, j) => (
                    <p key={j} className="text-[15px] leading-relaxed text-moss">
                        {p}
                    </p>
                ))}
            </div>

            {d.note && (
                <p className="mt-5 rounded-2xl bg-sagelight px-5 py-4 text-sm font-semibold leading-relaxed text-forest">
                    {d.note}
                </p>
            )}

            <div className="mt-6 flex flex-wrap gap-1.5">
                {d.expertise.map((e) => (
                    <span
                        key={e}
                        className="rounded-full border border-leaf/15 px-3 py-1 text-[11px] font-semibold text-leaf"
                    >
                        {e}
                    </span>
                ))}
            </div>

            <div className="flex-1" />

            <a
                href={d.wa}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`doctor-whatsapp-${d.id}`}
                className="group/cta mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[13px] font-bold text-cream transition-all duration-300 hover:bg-leaf"
            >
                <WaIcon className="h-4 w-4 transition-transform duration-300 group-hover/cta:scale-110" />
                Consult {d.name} on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
        </div>
    );
}

export default function Doctors() {
    return (
        <section id="doctors" className="relative overflow-hidden bg-forest py-16 sm:py-24 lg:py-32">
            <img
                src={IMAGES.darkLeaves}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
                loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest via-forest/70 to-forest" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHead
                    dark
                    eyebrow="Doctors & Medical Team"
                    title={
                        <>
                            Guided by qualified <em className="italic text-sage">BNYS physicians.</em>
                        </>
                    }
                    sub="Every consultation is conducted by a qualified Naturopathy and Yoga Physician. Dr. Darshan coordinates all cases and follow-up personally; a female doctor may be requested, subject to availability."
                />

                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {[DOCTORS[0], DOCTORS[1], ...DOCTORS.slice(2)].map((d, i) => (
                        <Reveal key={d.id} delay={0.07 * i} className="h-full">
                            <DoctorCard d={d} i={i} />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-cream/10 bg-cream/[0.04] px-8 py-6 text-center sm:flex-row sm:text-left backdrop-blur">
                        <p className="text-sm leading-relaxed text-cream/75">
                            <strong className="font-bold text-cream">Prefer a female doctor?</strong> You may request
                            one while enquiring — subject to availability.
                        </p>
                        <a
                            href={DOCTORS.find((d) => d.id === "darshan").wa}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="doctors-coordinator-whatsapp"
                            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-6 py-3 text-[13px] font-bold text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-wagreen"
                        >
                            <WaIcon className="h-4 w-4" />
                            Enquire with Dr. Darshan
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
