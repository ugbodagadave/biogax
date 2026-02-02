import { ArrowRight } from 'lucide-react';

const tags = [
    'Visionary',
    'Collaborative',
    'Sustainable',
    'Global',
    'Impactful',
    'Reliable',
    'Adaptive',
    'Efficient',
    'Innovative',
];

const stickyCards = [
    {
        image: '/what-we-do-1.webp',
        title: "Boost Your Farm's Sustainability.",
        description:
            'Reduce carbon emissions and your environmental footprint with clean, renewable biogas energy.',
    },
    {
        image: '/what-we-do-2.webp',
        title: 'Maximize Farm Efficiency.',
        description:
            'Reduce carbon emissions and your environmental footprint with clean, renewable biogas energy.',
    },
    {
        image: '/what-we-do-3.webp',
        title: 'Generate Revenue from Waste.',
        description:
            'Reduce carbon emissions and your environmental footprint with clean, renewable biogas energy.',
    },
];

export function WhatWeDo() {
    return (
        <section className="bg-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8" id="what-we-do">
            {/* Text Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[1400px] mx-auto mb-12 md:mb-16">
                {/* Left Column */}
                <div className="flex flex-col items-start">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5f5f0] border border-[#e8e8e0] rounded-full font-body text-[0.7rem] font-semibold tracking-wider text-[#1a1a1a] mb-6">
                        <img
                            src="/what-we-do-icon.svg"
                            alt=""
                            className="w-4 h-4"
                        />
                        WHAT WE DO
                    </span>

                    <h2 className="font-heading text-[1.75rem] md:text-[2.75rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-6">
                        Powering Farms with Clean, Circular Energy
                    </h2>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-8">
                        {tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2.5 py-1 md:px-3.5 md:py-1.5 bg-transparent border border-[#d1d1d1] rounded text-[0.75rem] md:text-[0.8rem] font-normal text-[#1a1a1a]">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] border-2 border-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group">
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    <h3 className="font-heading text-[1.25rem] md:text-[2rem] font-medium leading-tight tracking-tight text-[#1a1a1a]">
                        We're helping farmers turn waste into opportunity with sustainable
                        biogas systems that fuel productivity.
                    </h3>

                    <p className="font-body text-[0.95rem] leading-relaxed text-[#555555]">
                        Our mission is simple: to make clean energy accessible to farmers by
                        transforming everyday agricultural waste into reliable biogas. We
                        design and install complete systems that help reduce emissions, cut
                        energy costs, and produce organic fertilizer as a valuable
                        byproduct.
                    </p>

                    <p className="font-body text-[0.95rem] leading-relaxed text-[#555555]">
                        From small family farms to larger agricultural operations, our
                        solutions are built to scale with your needs. We bring renewable
                        power and environmental benefits straight to the farm—empowering you
                        to grow sustainably, today and for the future.
                    </p>
                </div>
            </div>

            {/* Sticky Scroll Images */}
            <div className="max-w-[1400px] mx-auto px-0 md:px-4">
                <div className="relative flex flex-col">
                    {stickyCards.map((card, index) => (
                        <div
                            key={card.title}
                            className="sticky w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-none overflow-hidden shadow-[0_-4px_24px_rgba(0,0,0,0.15)] first:shadow-none"
                            style={{
                                top: `${16 + index * 20}px`,
                                zIndex: index + 1,
                                marginBottom: index < stickyCards.length - 1 ? 'var(--sticky-card-spacing)' : '0'
                            }}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover object-center"
                                loading={index === 0 ? 'eager' : 'lazy'}
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-12 bg-gradient-to-t from-black/70 via-black/40 via-40% to-transparent to-70%">
                                <h3 className="font-heading text-2xl md:text-[2.5rem] font-medium leading-[1.1] tracking-tight text-white mb-3 md:mb-4 max-w-[450px]">
                                    {card.title}
                                </h3>
                                <p className="font-body text-[0.875rem] md:text-[0.95rem] leading-relaxed text-white/90 max-w-[400px] mb-4 md:mb-6">
                                    {card.description}
                                </p>
                                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 font-body text-[0.8125rem] md:text-[0.875rem] font-medium text-[#1a1a1a] bg-white border-2 border-white rounded-full hover:bg-white/90 transition-colors group">
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
