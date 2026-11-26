import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS, WA_DEFAULT } from "@/data/content";
import { Reveal, SectionHead, WaIcon } from "@/components/ui-bits";

export default function Faq() {
    return (
        <section id="faqs" className="relative bg-cream py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <SectionHead
                            eyebrow="FAQs"
                            title={
                                <>
                                    Honest answers, <em className="italic text-leaf">before you ask.</em>
                                </>
                            }
                            sub="If anything is still unclear, message us — a doctor will respond, not a bot."
                        />
                        <Reveal delay={0.2}>
                            <a
                                href={WA_DEFAULT}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="faq-whatsapp-button"
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf"
                            >
                                <WaIcon className="h-4 w-4" />
                                Ask us on WhatsApp
                            </a>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-8">
                        <Accordion type="single" collapsible className="w-full">
                            {FAQS.map((f, i) => (
                                <Reveal key={f.q} delay={0.05 * i}>
                                    <AccordionItem
                                        value={`faq-${i}`}
                                        data-testid={`faq-item-${i + 1}`}
                                        className="border-leaf/15"
                                    >
                                        <AccordionTrigger className="py-6 text-left font-display text-xl font-semibold text-forest hover:no-underline hover:text-leaf [&>svg]:text-leaf">
                                            {f.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6 text-[15px] leading-relaxed text-moss">
                                            {f.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Reveal>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
