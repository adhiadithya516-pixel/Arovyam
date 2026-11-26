import { ArrowUpRight, ClipboardList, HeartHandshake, Leaf } from "lucide-react";
import { IMAGES, WA_DEFAULT } from "@/data/content";
import { Reveal, SectionHead, WaIcon } from "@/components/ui-bits";

const PILLARS = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Understand the person",
        description:
            "We begin by understanding your health history, concerns, reports and daily routine rather than looking at symptoms in isolation.",
    },
    {
        number: "02",
        icon: Leaf,
        title: "Create an individualised plan",
        description:
            "Doctors guide a practical plan involving clinical nutrition, yoga therapy and lifestyle guidance based on your needs.",
    },
    {
        number: "03",
        icon: HeartHandshake,
        title: "Continue with personal follow-up",
        description:
            "Your progress is reviewed through ongoing doctor-guided follow-ups, with adjustments as your needs change.",
    },
];

export default function Approach() {
    return (
        <section
            id="approach"
            className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <SectionHead
                            eyebrow="Our Approach"
                            title={
                                <>
                                    Look Beyond Symptoms.
                                    <br />
                                    <em className="italic text-leaf">
                                        Understand the Person.
                                    </em>
                                </>
                            }
                            sub="At Arovyam, we believe meaningful healthcare begins with understanding the individual. Our approach brings together doctor-guided supportive care, practical lifestyle changes and consistent follow-up."
                        />

                        <Reveal delay={0.2}>
                            <a
                                href={WA_DEFAULT}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="approach-whatsapp-button"
                                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-leaf px-6 py-3.5 text-sm font-bold text-cream shadow-lg shadow-leaf/15 transition-all duration-300 hover:-translate-y-1 hover:bg-forest"
                            >
                                <WaIcon className="h-4 w-4" />
                                Begin a Conversation
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </Reveal>
                    </div>

                    <Reveal delay={0.12} className="relative">
                        <div className="relative overflow-hidden rounded-t-[220px] rounded-b-3xl">
                            <img
                                src={IMAGES.aboutLeaves}
                                alt="Natural greenery representing a holistic approach to wellbeing"
                                className="h-[360px] w-full object-cover sm:h-[480px]"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-forest/10" />
                        </div>

                        <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-leaf/10 bg-card p-5 shadow-xl sm:-left-8 sm:right-8 sm:p-7">
                            <p className="font-display text-2xl font-semibold text-forest sm:text-3xl">
                                Care that sees the whole person.
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-moss">
                                Thoughtful guidance, realistic changes and continuity of care.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-24 grid gap-5 border-t border-leaf/15 pt-12 md:grid-cols-3">
                    {PILLARS.map((pillar, index) => {
                        const Icon = pillar.icon;

                        return (
                            <Reveal key={pillar.number} delay={index * 0.08}>
                                <article className="group h-full rounded-3xl border border-leaf/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-xl hover:shadow-leaf/5 sm:p-8">
                                    <div className="flex items-center justify-between">
                                        <span className="font-display text-4xl text-leaf/35">
                                            {pillar.number}
                                        </span>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sagelight text-leaf transition-colors group-hover:bg-leaf group-hover:text-cream">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                    </div>

                                    <h3 className="mt-7 font-display text-2xl font-semibold text-forest">
                                        {pillar.title}
                                    </h3>

                                    <p className="mt-3 text-[15px] leading-relaxed text-moss">
                                        {pillar.description}
                                    </p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
