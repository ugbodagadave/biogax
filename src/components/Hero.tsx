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

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
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

// Individual stat component
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
        <div ref={ref} className="stat-item">
            <span className={`stat-number ${isVisible ? 'animate-count' : 'opacity-0'}`}>
                {count}{suffix}
            </span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

export function Hero() {
    return (
        <section className="hero">
            {/* Background Image */}
            <div className="hero-background">
                <img
                    src="/hero-bg.webp"
                    alt="Sustainable energy landscape with wind turbines"
                    loading="eager"
                />
            </div>

            {/* Overlay */}
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
                {/* Badge */}
                <span className="hero-badge animate-fade-in">
                    Farm-Powered Energy
                </span>

                {/* Headline */}
                <h1 className="hero-headline animate-fade-in-delay-1">
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
                <div className="hero-cta-group animate-fade-in-delay-2">
                    <a href="#contact" className="hero-cta-primary">
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4 cta-arrow" />
                    </a>
                    <a href="#how-it-works" className="hero-cta-secondary">
                        See How It Works
                        <ArrowRight className="w-4 h-4 cta-arrow" />
                    </a>
                </div>

                {/* Benefits */}
                <div className="hero-benefits animate-fade-in-delay-3">
                    {benefits.map((benefit) => (
                        <div key={benefit} className="benefit-item">
                            <Check className="benefit-check" strokeWidth={2.5} />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="hero-stats animate-fade-in-delay-4">
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
