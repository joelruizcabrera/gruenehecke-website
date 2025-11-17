import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGsap = () => {
    // Register GSAP plugins (only on client side)
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger)

        // Performance-Optimierungen für ScrollTrigger
        ScrollTrigger.config({
            limitCallbacks: true, // Reduziert Callback-Aufrufe
            syncInterval: 150, // Sync-Intervall optimieren
        })
    }

    /**
     * Fade in animation with scroll trigger
     */
    const fadeIn = (
        target: string | Element | Element[],
        options?: {
            duration?: number
            delay?: number
            y?: number
            stagger?: number
            trigger?: string | Element
        }
    ) => {
        const {
            duration = 0.8,
            delay = 0,
            y = 30,
            stagger = 0.2,
            trigger = target
        } = options || {}

        return gsap.from(target, {
            opacity: 0,
            y,
            duration,
            delay,
            stagger,
            ease: 'power2.out',
            force3D: true, // GPU-Beschleunigung
            clearProps: 'all', // Entfernt Inline-Styles nach Animation
            scrollTrigger: {
                trigger,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none none', // Spielt nur einmal
                once: true, // Animation nur einmal abspielen
                fastScrollEnd: true, // Bessere Performance bei schnellem Scrollen
            }
        })
    }

    /**
     * Slide in from left animation
     */
    const slideInLeft = (
        target: string | Element | Element[],
        options?: {
            duration?: number
            delay?: number
            x?: number
            trigger?: string | Element
        }
    ) => {
        const {
            duration = 0.8,
            delay = 0,
            x = -50,
            trigger = target
        } = options || {}

        return gsap.from(target, {
            opacity: 0,
            x,
            duration,
            delay,
            ease: 'power2.out',
            force3D: true,
            clearProps: 'all',
            scrollTrigger: {
                trigger,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
                fastScrollEnd: true,
            }
        })
    }

    /**
     * Slide in from right animation
     */
    const slideInRight = (
        target: string | Element | Element[],
        options?: {
            duration?: number
            delay?: number
            x?: number
            trigger?: string | Element
        }
    ) => {
        const {
            duration = 0.8,
            delay = 0,
            x = 50,
            trigger = target
        } = options || {}

        return gsap.from(target, {
            opacity: 0,
            x,
            duration,
            delay,
            ease: 'power2.out',
            force3D: true,
            clearProps: 'all',
            scrollTrigger: {
                trigger,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
                fastScrollEnd: true,
            }
        })
    }

    /**
     * Scale in animation
     */
    const scaleIn = (
        target: string | Element | Element[],
        options?: {
            duration?: number
            delay?: number
            scale?: number
            stagger?: number
            trigger?: string | Element
        }
    ) => {
        const {
            duration = 0.6,
            delay = 0,
            scale = 0.8,
            stagger = 0.1,
            trigger = target
        } = options || {}

        return gsap.from(target, {
            opacity: 0,
            scale,
            duration,
            delay,
            stagger,
            ease: 'back.out(1.7)',
            force3D: true,
            clearProps: 'all',
            scrollTrigger: {
                trigger,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
                fastScrollEnd: true,
            }
        })
    }

    /**
     * Stagger animation for lists
     */
    const staggerList = (
        target: string | Element | Element[],
        options?: {
            duration?: number
            stagger?: number
            y?: number
            trigger?: string | Element
        }
    ) => {
        const {
            duration = 0.6,
            stagger = 0.15,
            y = 20,
            trigger = target
        } = options || {}

        return gsap.from(target, {
            opacity: 0,
            y,
            duration,
            stagger,
            ease: 'power2.out',
            force3D: true,
            clearProps: 'all',
            scrollTrigger: {
                trigger,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
                fastScrollEnd: true,
            }
        })
    }

    /**
     * Counter animation (numbers counting up)
     */
    const countUp = (
        target: string | Element,
        endValue: number,
        options?: {
            duration?: number
            decimals?: number
            prefix?: string
            suffix?: string
            trigger?: string | Element
        }
    ) => {
        const {
            duration = 2,
            decimals = 0,
            prefix = '',
            suffix = '',
            trigger = target
        } = options || {}

        const obj = { value: 0 }
        const element = typeof target === 'string' ? document.querySelector(target) : target

        if (!element) return

        return gsap.to(obj, {
            value: endValue,
            duration,
            ease: 'power1.out',
            scrollTrigger: {
                trigger,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
            },
            onUpdate: () => {
                if (element) {
                    element.textContent = prefix + obj.value.toFixed(decimals) + suffix
                }
            }
        })
    }

    return {
        gsap,
        ScrollTrigger,
        fadeIn,
        slideInLeft,
        slideInRight,
        scaleIn,
        staggerList,
        countUp
    }
}