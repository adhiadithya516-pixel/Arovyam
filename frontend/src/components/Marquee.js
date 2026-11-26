import { LeafSprig } from "@/components/ui-bits";

const ITEMS = [
    "Clinical Nutrition",
    "Yoga Therapy",
    "Naturopathy Guidance",
    "Lifestyle Medicine",
    "Preventive Care",
    "Doctor-Led Follow-Up",
];

const Row = () => (
    <div className="flex w-max shrink-0 items-center">
        {ITEMS.map((t) => (
            <span key={t} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-display text-2xl italic text-forest sm:text-3xl">
                    {t}
                </span>
                <LeafSprig className="h-4 w-4 shrink-0 text-leafbright" />
            </span>
        ))}
    </div>
);

export default function Marquee() {
    return (
        <section aria-label="Our services" className="border-y border-leaf/10 bg-sagelight py-7">
            <div className="relative overflow-hidden" data-testid="services-marquee">
                <div className="flex w-max animate-marquee">
                    <Row />
                    <div aria-hidden="true">
                        <Row />
                    </div>
                </div>
            </div>
        </section>
    );
}
