import { Salad, PersonStanding, Leaf, Sun, ShieldCheck, Stethoscope, ArrowUpRight } from "lucide-react";
import { SERVICES, IMAGES, WA_DEFAULT } from "@/data/content";
import { Reveal, SectionHead, WaIcon } from "@/components/ui-bits";

const ICONS = { Salad, PersonStanding, Leaf, Sun, ShieldCheck, Stethoscope };

export default function Services() {
    const [nutrition, yoga, naturopathy, lifestyle, preventive, followup] = SERVICES;

    return (
        <section id="services" className="relative bg-cream2 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <SectionHead
                        eyebrow="Services"
                        title={
                            <>
                                Care that is <em className="italic text-leaf">doctor-guided</em>,<br className="hidden sm:block" /> end to end.
                            </>
                        }
                        sub="Supportive care delivered online — structured around you, reviewed by physicians, and continued through personal follow-up."
                    />
                    <Reveal delay={0.2}>
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="services-whatsapp-button"
                            className="group inline-flex items-center gap-2 rounded-full border border-leaf/25 px-6 py-3.5 text-sm font-bold text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-cream"
                        >
                            <WaIcon className="h-4 w-4" />
                            Ask about a service
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </Reveal>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Nutrition — editorial card with clipped image */}
                    <Reveal className="lg:col-span-7 h-full">
                        <div
                            data-testid="service-card-nutrition"
                            className="group relative h-full overflow-hidden rounded-3xl border border-leaf/12 bg-card p-8 transition-all duration-300 hover:border-leaf/30 hover:shadow-[0_30px_60px_-30px_rgba(35,83,54,0.45)] sm:p-10"
                        >
                            <div className="max-w-[58%]">
                                <ServiceIcon name={nutrition.icon} />
                                <h3 className="mt-6 font-display text-3xl font-semibold text-forest">{nutrition.title}</h3>
                                <p className="mt-4 text-[15px] leading-relaxed text-moss">{nutrition.body}</p>
                            </div>
                            <div className="pointer-events-none absolute -right-6 top-1/2 hidden w-[36%] -translate-y-1/2 sm:block">
                                <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl ring-1 ring-leaf/15">
                                    <img
                                        src={IMAGES.nutrition}
                                        alt="Fresh vegetables for therapeutic nutrition"
                                        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Yoga — dark spotlight card */}
                    <Reveal delay={0.08} className="lg:col-span-5 h-full">
                        <div
                            data-testid="service-card-yoga"
                            className="group relative h-full overflow-hidden rounded-3xl bg-forest p-8 transition-all duration-300 hover:shadow-[0_30px_60px_-30px_rgba(15,45,30,0.8)] sm:p-10"
                        >
                            <img
                                src={IMAGES.meditation}
                                alt="Therapeutic yoga practice"
                                className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
                                loading="lazy"
                            />
                            <div className="relative z-10">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/15 text-sagelight backdrop-blur">
                                    <PersonStanding className="h-5 w-5" />
                                </span>
                                <h3 className="mt-6 font-display text-3xl font-semibold text-cream">{yoga.title}</h3>
                                <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-cream/75">{yoga.body}</p>
                            </div>
                        </div>
                    </Reveal>

                    {[naturopathy, lifestyle, preventive].map((s, i) => (
                        <Reveal key={s.id} delay={0.06 * i} className="lg:col-span-4 h-full">
                            <div
                                data-testid={`service-card-${s.id}`}
                                className="group h-full rounded-3xl border border-leaf/12 bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf/30 hover:shadow-[0_28px_50px_-28px_rgba(35,83,54,0.45)]"
                            >
                                <ServiceIcon name={s.icon} />
                                <h3 className="mt-6 font-display text-2xl font-semibold text-forest">{s.title}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-moss">{s.body}</p>
                            </div>
                        </Reveal>
                    ))}

                    {/* Follow-up — wide strip with herbs image */}
                    <Reveal className="lg:col-span-12 h-full">
                        <div
                            data-testid="service-card-followup"
                            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-leaf/12 bg-forest sm:flex-row"
                        >
                            <div className="relative w-full overflow-hidden sm:w-[38%]">
                                <img
                                    src={IMAGES.herbs}
                                    alt="Traditional herbal preparation"
                                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-forest/20" />
                            </div>
                            <div className="flex flex-1 flex-col justify-center p-8 sm:p-12">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/10 text-sagelight">
                                    <Stethoscope className="h-5 w-5" />
                                </span>
                                <h3 className="mt-5 font-display text-3xl font-semibold text-cream">{followup.title}</h3>
                                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/75">{followup.body}</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

const ServiceIcon = ({ name }) => {
    const Icon = ICONS[name] || Leaf;
    return (
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sagelight text-leaf transition-all duration-300 group-hover:bg-leaf group-hover:text-cream">
            <Icon className="h-5 w-5" />
        </span>
    );
};
