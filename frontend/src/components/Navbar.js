import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, WA_DEFAULT } from "@/data/content";
import { scrollToId } from "@/lib/smooth";
import { Logo, WaIcon } from "@/components/ui-bits";

const NavLink = ({ link, onGo, testid }) => (
    <a
        href={link.id}
        data-testid={testid}
        onClick={(e) => {
            e.preventDefault();
            onGo();
            scrollToId(link.id);
        }}
        className="group relative whitespace-nowrap text-[12px] font-semibold text-ink/80 transition-colors hover:text-forest"
    >
        {link.label}
        <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-leaf transition-all duration-300 group-hover:w-full" />
    </a>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = () => setOpen(false);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "border-b border-leaf/10 bg-cream/85 backdrop-blur-xl"
                        : "border-b border-transparent bg-cream/40 backdrop-blur-sm"
                }`}
            >
                <motion.div
                    className="absolute inset-x-0 top-0 h-[2px] origin-left bg-leaf"
                    style={{ scaleX: progress }}
                />
                <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
                    <div className="shrink-0"><Logo compact /></div>
                    <nav className="hidden min-[1600px]:flex flex-1 items-center justify-between gap-4 px-4">
                        {NAV_LINKS.map((l) => (
                            <NavLink key={l.id} link={l} onGo={() => {}} testid={`nav-link-${l.id.replace("#", "")}`} />
                        ))}
                    </nav>
                    <div className="ml-auto flex shrink-0 items-center gap-3">
                        <a
                            href={WA_DEFAULT}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="nav-whatsapp-button"
                            className="group hidden min-[1600px]:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-leaf px-3.5 py-2.5 text-[12px] font-bold text-cream shadow-[0_10px_24px_-12px_rgba(35,83,54,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest"
                        >
                            <WaIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                            Consult on WhatsApp
                        </a>
                        <button
                            data-testid="nav-mobile-toggle"
                            aria-label="Open menu"
                            onClick={() => setOpen(true)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-leaf/20 bg-cream/70 text-forest min-[1600px]:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 z-[80] bg-forest text-cream"
                        initial={{ opacity: 0, y: "-4%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-4%" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">

                            <button
                                data-testid="nav-mobile-close"
                                aria-label="Close menu"
                                onClick={() => setOpen(false)}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <nav className="mt-4 flex flex-col gap-1 px-6">
                            {NAV_LINKS.map((l, i) => (
                                <motion.a
                                    key={l.id}
                                    href={l.id}
                                    data-testid={`mobile-nav-link-${l.id.replace("#", "")}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(false);
                                        setTimeout(() => scrollToId(l.id), 80);
                                    }}
                                    initial={{ opacity: 0, x: -18 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                                    className="group flex items-center justify-between border-b border-cream/10 py-4 font-display text-2xl font-medium text-cream"
                                >
                                    {l.label}
                                    <ArrowUpRight className="h-5 w-5 text-sage opacity-0 transition-opacity group-hover:opacity-100" />
                                </motion.a>
                            ))}
                        </nav>
                        <div className="px-6 pt-8">
                            <a
                                href={WA_DEFAULT}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="mobile-whatsapp-button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wagreen px-6 py-4 text-sm font-bold text-forest"
                            >
                                <WaIcon className="h-5 w-5" />
                                Consult on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
