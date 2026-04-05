export const INTERSTELLAR_EASE = [0.25, 0.1, 0.25, 1] as const;

export const DURATION = {
    fast: 0.5,
    base: 0.9,
    slow: 1.4,
    glacial: 2.0,
} as const;

export const VARIANTS = {
    floatIn: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: DURATION.base,
                ease: INTERSTELLAR_EASE
            }
        },
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.96 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: DURATION.slow,
                ease: INTERSTELLAR_EASE
            }
        },
    },
    fade: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: DURATION.slow,
                ease: INTERSTELLAR_EASE
            }
        }
    },
    blurIn: {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: DURATION.base,
                ease: INTERSTELLAR_EASE
            }
        }
    },
    hover: {
        y: -5,
        transition: {
            duration: DURATION.fast,
            ease: INTERSTELLAR_EASE
        }
    }
};
