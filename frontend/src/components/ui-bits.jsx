import { motion } from "framer-motion";
import { scrollToId } from "@/lib/smooth";

export const WaIcon = ({ className = "h-4 w-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

export const LeafSprig = ({ className = "h-5 w-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 21c0-6 0-9 0-13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11 11C11 6.5 7.5 3.5 3.5 3.5 3.5 8 7 11 11 11Z" fill="currentColor" />
        <path d="M13 9c0-3.3 2.5-5.5 5.5-5.5C18.5 6.8 16 9 13 9Z" fill="currentColor" opacity="0.55" />
    </svg>
);

export const Logo = ({ dark = false, compact = false, onClick }) => (
    <a
        href="#home"
        data-testid="nav-brand-logo"
        aria-label="Arovyam — home"
        onClick={(e) => {
            e.preventDefault();
            if (onClick) onClick();
            scrollToId("#home");
        }}
        className="group flex items-center gap-3"
    >
        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-cream ring-1 ring-leaf/25 transition-transform duration-500 group-hover:rotate-[8deg] sm:h-11 sm:w-11">
            <img
                src="/logo.png"
                alt="Arovyam logo"
                className="h-full w-full object-cover"
                style={{ transform: "scale(1.16)" }}
            />
        </span>
        <span className="leading-none">
            <span
                className={`block font-display text-xl font-semibold tracking-[0.14em] sm:text-2xl ${
                    dark ? "text-cream" : "text-forest"
                }`}
            >
                AROVYAM
            </span>
            {!compact && (
                <span
                    className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.24em] sm:text-[10px] ${
                        dark ? "text-sage" : "text-moss"
                    }`}
                >
                    Integrative Health & Naturopathy
                </span>
            )}
        </span>
    </a>
);

export const Eyebrow = ({ children, dark = false }) => (
    <span
        className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-sage" : "text-leaf"
        }`}
    >
        <span className={`h-px w-8 ${dark ? "bg-sage/60" : "bg-leaf/50"}`} />
        {children}
    </span>
);

export const Reveal = ({ children, delay = 0, y = 26, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export const SectionHead = ({ eyebrow, title, sub, dark = false, center = false }) => (
    <div className={`${center ? "mx-auto text-center" : "max-w-3xl"}`}>
        <Reveal>
            <div className={center ? "flex justify-center" : ""}>
                <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
            </div>
        </Reveal>
        <Reveal delay={0.08}>
            <h2
                className={`mt-5 font-display text-3xl font-medium leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem] ${
                    dark ? "text-cream" : "text-forest"
                }`}
            >
                {title}
            </h2>
        </Reveal>
        {sub && (
            <Reveal delay={0.16}>
                <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? "text-cream/70" : "text-moss"} ${center ? "mx-auto" : ""}`}>
                    {sub}
                </p>
            </Reveal>
        )}
    </div>
);

export const RotatingBadge = ({ className = "" }) => (
    <div className={`relative ${className}`} aria-hidden="true">
        <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
            <defs>
                <path id="circlePath" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
            </defs>
            <text className="fill-forest text-[9.5px] font-semibold uppercase" style={{ letterSpacing: "0.24em" }}>
                <textPath href="#circlePath">
                    Doctor-Guided Care • Nutrition • Yoga Therapy •
                </textPath>
            </text>
        </svg>
        <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-leaf text-cream">
            <LeafSprig className="h-5 w-5" />
        </span>
    </div>
);
