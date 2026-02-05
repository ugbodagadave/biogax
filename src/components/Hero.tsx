import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
    'Lower energy bills',
    'Reduce emissions',
    'Increase farm productivity',
];

const stats = [
    { value: 350, suffix: '+', label: 'Organic Waste Processed' },
    { value: 200, suffix: '+', label: 'Clean Energy Installed' },
    { value: 120, suffix: '+', label: 'Farms Empowered' },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, start]);

    return count;
}

function AnimatedStat({ value, suffix, label, delay }: {
    value: number;
    suffix: string;
    label: string;
    delay: number;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const count = useCountUp(value, 2000, isVisible);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <span className={`font-heading text-5xl md:text-6xl font-normal text-white mb-2 leading-none transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {count}{suffix}
            </span>
            <span className="text-sm text-white/80">{label}</span>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/hero-bg.webp"
                    alt="Sustainable energy landscape with wind turbines"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

            {/* Content */}
            <div className="flex flex-col items-center text-center pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-desktop)] px-6 max-w-[900px] mx-auto max-md:pt-[var(--spacing-section-pt-mobile)] max-md:pb-[var(--spacing-section-pb-mobile)]">
                {/* Badge */}
                <span className="inline-flex items-center px-4 py-1.5 font-medium text-xs text-[#1a1a1a] bg-gradient-to-br from-white/60 via-white/30 to-white/45 backdrop-blur-xl border border-white/30 rounded-full mb-6 shadow-[0_4px_16px_rgba(0,0,0,0.1)] animate-fade-in">
                    Farm-Powered Energy
                </span>

                {/* Headline */}
                <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-8 max-w-[1100px] animate-fade-in-delay-1">
                    <span className="md:hidden">
                        Sustainable Biogas<br />
                        Energy for Modern<br />
                        Agriculture
                    </span>
                    <span className="hidden md:block">
                        Sustainable Biogas Energy <br />
                        for Modern Agriculture
                    </span>
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-delay-2 w-full max-w-[300px] md:max-w-none flex-col md:flex-row">
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] border-2 border-[#c0ff75] rounded-full hover:bg-[#d4ff9e] hover:border-[#d4ff9e] transition-all group w-full md:w-auto">
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-white bg-transparent border-2 border-white rounded-full hover:bg-white/10 transition-all group w-full md:w-auto">
                        See How It Works
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-fade-in-delay-3 flex-col md:flex-row">
                    {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm text-white">
                            <Check className="w-4 h-4 text-white shrink-0" strokeWidth={2.5} />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-[800px] pt-8 animate-fade-in-delay-4 border-t border-white/10">
                    {stats.map((stat, index) => (
                        <AnimatedStat
                            key={stat.label}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={index * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
