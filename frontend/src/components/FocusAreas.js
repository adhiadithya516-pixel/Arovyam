import { Activity, Soup, Flower2, Scale, Waves, Moon, Bone, ShieldCheck } from "lucide-react";
import { FOCUS_AREAS } from "@/data/content";
import { Reveal, SectionHead } from "@/components/ui-bits";

const ICONS = { Activity, Soup, Flower2, Scale, Waves, Moon, Bone, ShieldCheck };

export default function FocusAreas() {
    return (
        <section id="focus" className="relative bg-cream2 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHead
                    center
                    eyebrow="Health Focus Areas"
                    title={
                        <>
                            Where we offer the <em className="italic text-leaf">deepest support.</em>
                        </>
                    }
                    sub="Doctor-guided, integrative care across the concerns we know best — always alongside appropriate medical treatment."
                />

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {FOCUS_AREAS.map((f, i) => {
                        const Icon = ICONS[f.icon] || Activity;
                        return (
                            <Reveal key={f.id} delay={0.05 * (i % 4)} className="h-full">
                                <div
                                    data-testid={`focus-area-${f.id}`}
                                    className="group h-full rounded-3xl border border-leaf/12 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf/30 hover:bg-forest hover:shadow-[0_30px_55px_-30px_rgba(15,45,30,0.7)]"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sagelight text-leaf transition-colors duration-300 group-hover:bg-cream/10 group-hover:text-sagelight">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-forest transition-colors duration-300 group-hover:text-cream">
                                        {f.t}
                                    </h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-moss transition-colors duration-300 group-hover:text-cream/65">
                                        {f.d}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
