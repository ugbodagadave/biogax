import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
    AvatarGroup,
} from './ui/avatar';

const teamImages = [
    '/team-1.webp',
    '/team-2.webp',
    '/team-3.webp',
    '/team-4.webp',
    '/team-5.webp',
];

const stats = [
    { value: 84, suffix: '+', label: 'Organic Waste Processed' },
    { value: 84, suffix: '+', label: 'Clean energy generated' },
    { value: 84, suffix: '+', label: 'Organic Waste Processed' },
    { value: 84, suffix: '+', label: 'Farms Employed' },
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
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setShouldAnimate(true), delay);
            return () => clearTimeout(timer);
        }
    }, [isInView, delay]);

    const count = useCountUp(value, 2000, shouldAnimate);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="font-heading text-4xl md:text-5xl font-medium text-[#1a1a1a] mb-2 leading-none"
            >
                {count}{suffix}
            </motion.span>
            <span className="text-sm text-gray-600">{label}</span>
        </div>
    );
}

export function AboutUs() {
    return (
        <section className="bg-white py-[var(--spacing-section-pt-desktop)] px-6 max-md:py-[var(--spacing-section-pt-mobile)]">
            <div className="max-w-[1200px] mx-auto">
                {/* Top Section: Two columns on desktop */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    {/* Left Column: Badge + Headline */}
                    <div className="flex flex-col items-start">
                        {/* Pill Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-[#1a1a1a] border border-gray-300 rounded-full mb-6">
                            <img
                                src="/badge-icon.svg"
                                alt=""
                                className="w-4 h-4"
                            />
                            ABOUT US
                        </span>

                        {/* Headline */}
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a]">
                            Founded in 2025,<br />
                            Nurturing Nature
                        </h2>
                    </div>

                    {/* Right Column: Avatars + Text */}
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                            {/* Overlapping Avatars */}
                            <AvatarGroup className="*:data-[slot=avatar]:ring-white *:data-[slot=avatar]:ring-[3px]">
                                {teamImages.map((src, index) => (
                                    <Avatar key={index} className="size-12">
                                        <AvatarImage src={src} alt={`Team member ${index + 1}`} />
                                        <AvatarFallback>TM</AvatarFallback>
                                    </Avatar>
                                ))}
                            </AvatarGroup>

                            {/* Happy Users Text */}
                            <span className="text-lg font-medium text-[#1a1a1a]">
                                20K+ Happy Users
                            </span>
                        </div>

                        {/* Supporting Text */}
                        <p className="text-gray-600 text-base leading-relaxed max-w-[450px]">
                            Our solar generator provides clean energy, cuts carbon emissions, and supports a sustainable future.
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
                    {stats.map((stat, index) => (
                        <AnimatedStat
                            key={`${stat.label}-${index}`}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
