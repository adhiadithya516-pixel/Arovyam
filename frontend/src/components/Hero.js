import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { IMAGES, WA_DEFAULT } from "@/data/content";
import { scrollToId } from "@/lib/smooth";
import { WaIcon, LeafSprig, RotatingBadge } from "@/components/ui-bits";

const HeadLine = ({ children, delay }) => (
    <span className="block overflow-hidden pb-[0.08em]">
        <motion.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.span>
    </span>
);

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const yImg = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section id="home" ref={ref} className="relative overflow-hidden bg-cream pt-[72px]">
            {/* ambient leaf outlines */}
            <LeafSprig className="pointer-events-none absolute -left-8 top-40 h-40 w-40 text-leaf/10 animate-float-slow" />
            <LeafSprig className="pointer-events-none absolute bottom-24 left-[42%] h-24 w-24 text-leaf/[0.07] animate-float" />
            <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-sagelight/70 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-16">
                {/* copy */}
                <motion.div style={{ y: yText, opacity: fade }} className="lg:col-span-7 xl:col-span-7">
                    <h1
                        data-testid="hero-title"
                        className="mt-7 font-display text-[2.9rem] font-medium leading-[1.02] tracking-tight text-forest sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
                    >
                        <HeadLine delay={0.15}>Look Beyond</HeadLine>
                        <HeadLine delay={0.28}>
                            Symptoms<span className="text-leafbright">.</span>
                        </HeadLine>
                        <HeadLine delay={0.41}>
                            <em className="font-light italic text-leaf">Understand the Person.</em>
                        </HeadLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.62 }}
                        className="mt-7 max-w-xl text-base leading-relaxed text-moss sm:text-lg"
                    >
                        Your health deserves an approach that considers your health history, daily patterns,
                        nutrition, movement, sleep and relevant clinical information. Arovyam offers online-first,
                        doctor-guided supportive care through clinical nutrition, yoga therapy and
                        naturopathy-based guidance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.74 }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-consult-button"
                            className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold text-cream shadow-[0_18px_36px_-16px_rgba(15,45,30,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf"
                        >
                            <WaIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                            Consult on WhatsApp
                        </a>
                        <a
                            href="#programmes"
                            data-testid="hero-programmes-button"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToId("#programmes");
                            }}
                            className="group inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-transparent px-7 py-4 text-sm font-bold text-forest transition-all duration-300 hover:border-leaf hover:bg-sagelight"
                        >
                            Explore Our Programmes
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.95 }}
                        className="mt-10 border-l-2 border-leafbright/50 pl-5 font-display text-lg italic text-forest/80 sm:text-xl"
                    >
                        Small, informed steps. Individualised guidance. Ongoing follow-up.
                    </motion.p>
                </motion.div>

                {/* visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative lg:col-span-5"
                >
                    <motion.div style={{ y: yImg }} className="relative mx-auto max-w-[420px]">
                        <div className="overflow-hidden rounded-b-[2rem] rounded-t-[999px] shadow-[0_40px_80px_-40px_rgba(15,45,30,0.55)] ring-1 ring-leaf/15">
                            <img
                                src="/logo.png"
                                alt="Arovyam — Integrative Health and Naturopathy logo"
                                className="h-[460px] w-full object-contain sm:h-[540px]"
                                loading="eager"
                            />
                        </div>
                        <RotatingBadge className="absolute -left-10 bottom-14 hidden h-28 w-28 sm:block" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="absolute -right-3 top-16 flex items-center gap-3 rounded-2xl border border-leaf/15 bg-card/95 px-4 py-3 shadow-lg backdrop-blur sm:-right-8"
                            data-testid="hero-coordinator-chip"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sagelight text-leaf">
                                <LeafSprig className="h-4 w-4" />
                            </span>
                            <span className="text-[11px] font-semibold leading-snug text-ink/90">
                                Coordinated by Doctors
                                <br />

                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollToId("#approach")}
                aria-label="Scroll to our approach"
                data-testid="hero-scroll-hint"
                style={{ opacity: fade }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-moss lg:flex"
            >
                Scroll
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            </motion.button>
        </section>
    );
}
