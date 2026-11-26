import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMMES, PROGRAMME_STEPS, IMAGES, waLink } from "@/data/content";
import { Reveal, SectionHead } from "@/components/ui-bits";

function ProgrammeCard({ p }) {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");

    const wa = waLink(
        `Hello, I would like to know more about the ${p.name} programme.` +
            (name ? ` I am ${name}.` : "") +
            (details ? ` Details: ${details}` : "")
    );

    return (
        <div
            data-testid={`programme-card-${p.id}`}
            className="group flex h-full flex-col rounded-3xl border border-leaf/12 bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf/30 hover:shadow-[0_32px_60px_-30px_rgba(35,83,54,0.5)] sm:p-10"
        >
            <div className="flex items-start justify-between">
                <span className="font-display text-4xl font-light italic text-leaf/40">{p.num}</span>
                <span className="rounded-full bg-sagelight px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-leaf">
                    Flexible · Typically 6–12 weeks
                </span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-forest sm:text-[1.7rem]">
                {p.name}
            </h3>
            <p className="mt-2 text-sm font-semibold text-leaf">{p.who}</p>
            <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm leading-relaxed text-moss">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leafbright" />
                        {pt}
                    </li>
                ))}
            </ul>

            <div className="mt-7 flex-1" />

            <div
                className="border-t border-leaf/10 pt-5"
                data-testid={`programme-enquiry-${p.id}`}
            >
                <span className="text-xs font-semibold text-moss/80">
                    Online · 1:1 · Scheduled follow-ups
                </span>
                <div className="mt-3 grid grid-cols-1 gap-2">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        data-testid={`programme-name-input-${p.id}`}
                        className="rounded-xl border border-leaf/15 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-moss/50 focus:border-leaf"
                    />
                    <input
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="What would you like help with? (optional)"
                        data-testid={`programme-details-input-${p.id}`}
                        className="rounded-xl border border-leaf/15 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-moss/50 focus:border-leaf"
                    />
                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`programme-enquire-${p.id}`}
                        className="group/btn mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-[13px] font-bold text-cream transition-all duration-300 hover:bg-leaf"
                    >
                        Enquire on WhatsApp
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Programmes() {
    return (
        <section id="programmes" className="relative bg-cream py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHead
                    eyebrow="Programmes"
                    title={
                        <>
                            Structured support, <em className="italic text-leaf">built around you.</em>
                        </>
                    }
                    sub="Each programme is doctor-led and fully personalised — beginning with a consultation, never a template."
                />

                {/* how it works */}
                <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <div className="relative">
                            <div className="overflow-hidden rounded-b-[2rem] rounded-t-[999px] ring-1 ring-leaf/15">
                                <img
                                    src={IMAGES.yoga}
                                    alt="Yoga therapy practice in natural light"
                                    className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-cream shadow-lg">
                                Doctor-Led · Online
                            </span>
                        </div>
                    </Reveal>
                    <div className="lg:col-span-7">
                        {PROGRAMME_STEPS.map((s, i) => (
                            <Reveal key={s.n} delay={0.07 * i}>
                                <div className="group flex items-start gap-6 border-b border-leaf/10 py-6 transition-all duration-300 first:pt-0 hover:pl-2">
                                    <span className="font-display text-3xl font-semibold italic text-leaf/50 transition-colors group-hover:text-leaf">
                                        {s.n}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-forest sm:text-2xl">{s.t}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-moss">{s.d}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* programme cards */}
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {PROGRAMMES.map((p, i) => (
                        <Reveal key={p.id} delay={0.06 * i} className="h-full">
                            <ProgrammeCard p={p} />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.1}>
                    <p className="mt-10 text-center text-sm text-moss">
                        Every programme begins with a doctor consultation —{" "}
                        <a
                            href={PROGRAMMES[0].wa}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="programmes-start-whatsapp"
                            className="font-bold text-forest underline decoration-leafbright decoration-2 underline-offset-4 transition-colors hover:text-leaf"
                        >
                            start the conversation on WhatsApp
                        </a>
                        .
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
