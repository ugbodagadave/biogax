import { ArrowRight } from 'lucide-react';

const services = [
    {
        image: '/services-1.webp',
        icon: '/waste-to-energy-icon.svg',
        title: 'Waste-to-Energy Conversion',
        description:
            'Our expert engineers design custom biogas systems to maximize gas output, and reduce emissions',
    },
    {
        image: '/services-2.webp',
        icon: '/biogas-icon.svg',
        title: 'Biogas Plant Installation',
        description:
            'From site assessment to commissioning, we deliver full-scale biogas plant setups that are efficient, and durable',
    },
    {
        image: '/services-3.webp',
        icon: '/biofertilizer-icon.svg',
        title: 'Biofertilizer Recovery & Soil Enrichment',
        description:
            'We upgrade outdated components and integrate modern technologies to improve efficiency and capacity',
    },
];

export function Services() {
    return (
        <section className="bg-white pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8" id="services">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto text-center mb-[var(--spacing-header-mb-mobile)] md:mb-[var(--spacing-header-mb-desktop)]">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5f5f0] border border-[#e8e8e0] rounded-full font-body text-[0.7rem] font-semibold tracking-wider text-[#1a1a1a] mb-6">
                    <img
                        src="/what-we-do-icon.svg"
                        alt=""
                        className="w-4 h-4"
                    />
                    SERVICES WE OFFER
                </span>

                <h2 className="font-heading text-[1.75rem] md:text-[2.75rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-4 md:mb-6 max-w-[600px] mx-auto">
                    Clean energy solutions built for farms
                </h2>

                <p className="font-body text-[0.95rem] leading-relaxed text-[#555555] max-w-[550px] mx-auto mb-8">
                    We deliver farm-ready biogas systems that convert agricultural waste into
                    clean energy, boosting sustainability, reducing fuel costs, and unlocking
                    new revenue streams.
                </p>

                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] border-2 border-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group"
                >
                    View all services
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            {/* Sticky Scroll Cards */}
            <div className="max-w-[1400px] mx-auto flex justify-center">
                <div className="relative flex flex-col w-full max-w-[500px]">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="sticky w-full h-[450px] md:h-[500px] lg:h-[550px] rounded-none overflow-hidden shadow-[0_-8px_30px_rgba(0,0,0,0.2)] first:shadow-none"
                            style={{
                                top: `${24 + index * 24}px`,
                                zIndex: index + 1,
                                marginBottom: index < services.length - 1 ? 'var(--sticky-card-spacing)' : '0'
                            }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover object-center"
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />

                            {/* Icon */}
                            <img
                                src={service.icon}
                                alt=""
                                className="absolute top-4 left-4 md:top-6 md:left-6 w-12 h-12 md:w-14 md:h-14"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-10 bg-gradient-to-t from-black/80 via-black/50 via-40% to-transparent to-70%">
                                <h3 className="font-heading text-xl md:text-[1.75rem] font-medium leading-[1.1] tracking-tight text-white mb-2 md:mb-3 max-w-[400px]">
                                    {service.title}
                                </h3>
                                <p className="font-body text-[0.8rem] md:text-[0.875rem] leading-relaxed text-white/90 max-w-[350px] mb-4 md:mb-5">
                                    {service.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 font-body text-[0.8125rem] md:text-[0.875rem] font-medium text-[#1a1a1a] bg-[#c0ff75] border-2 border-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group"
                                >
                                    Free Energy Assessment
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
