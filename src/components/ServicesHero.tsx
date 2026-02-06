import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ServicesHero() {
    return (
        <section className="relative min-h-[550px] flex flex-col items-center justify-start overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/services-hero.webp"
                    alt="Biogas storage tanks at facility"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/40" />

            {/* Content */}
            <div className="flex flex-col items-center text-center px-6 max-w-[900px] mx-auto pt-32 pb-32">

                {/* Headline */}
                <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-6">
                    Smart Energy, <br className="hidden md:block" />
                    Expertly Delivered
                </h1>

                {/* Subtext */}
                <p className="text-white/90 text-lg md:text-xl max-w-[700px] mb-10 leading-relaxed">
                    Explore our range of biogas solutions designed to meet your energy, sustainability, and operational needs
                </p>

                {/* CTA Button */}
                <Link
                    to="/assessment"
                    className="inline-flex items-center gap-2 px-6 py-2.5 font-medium text-sm text-[#1a1a1a] bg-white rounded-full hover:bg-white/90 transition-all group"
                >
                    Free Energy Assessment
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
