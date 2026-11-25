import Lenis from "lenis";

let lenis = null;

export function initLenis() {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId;
    const raf = (t) => {
        lenis.raf(t);
        rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return {
        destroy: () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenis = null;
        },
    };
}

export function scrollToId(hash) {
    const el = document.querySelector(hash);
    if (!el) return;
    if (lenis) {
        lenis.scrollTo(el, {
            offset: -72,
            duration: 1.35,
            easing: (t) => 1 - Math.pow(1 - t, 4),
        });
    } else {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
