import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const solutions = [
    {
        title: 'Biogas Plant Installation',
        description: 'From site assessment to commissioning, we deliver full-scale biogas plant setups that are efficient, and durable',
        image: '/services-2.webp',
        imageAlt: 'Sustainable farming with natural vegetation',
    },
    {
        title: 'Waste-to-Energy Conversion',
        description: 'Our expert engineers design custom biogas systems to maximize gas output, and reduce emissions',
        image: '/services-1.webp',
        imageAlt: 'Aerial view of biogas storage tanks',
    },
    {
        title: 'Biofertilizer Recovery & Soil Enrichment',
        description: 'From site assessment to commissioning, we deliver full-scale biogas plant setups that are efficient, and durable',
        image: '/services-3.webp',
        imageAlt: 'Hands holding rich organic soil and compost',
    },
];

const whatsIncluded = [
    'Tailored digester designs for dairy, poultry, and crop farms',
    'On-site assessment and feasibility study',
    'End-to-end project execution, from design to commissioning',
    'Scalable systems for smallholders and large farms',
    'Integration with existing infrastructure',
];

export function ServicesSolutions() {
    return (
        <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1a1a1a] text-center mb-12 md:mb-16 italic">
                    Eco-Friendly Solutions We Provide
                </h2>

                {/* Solutions List */}
                <div className="flex flex-col gap-12 md:gap-16">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 4.0,
                                delay: index * 0.2,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start"
                        >
                            {/* Left Column - Title & Description */}
                            <div className="flex flex-col">
                                <h3 className="font-heading text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-4 leading-tight">
                                    {solution.title}
                                </h3>
                                <p className="font-body text-[#555555] leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>

                            {/* Center - Image */}
                            <div className="w-full">
                                <img
                                    src={solution.image}
                                    alt={solution.imageAlt}
                                    className="w-full h-auto object-cover rounded-[4px]"
                                    loading="lazy"
                                />
                            </div>

                            {/* Right Column - What's Included */}
                            <div className="flex flex-col">
                                <h4 className="font-heading text-xl md:text-2xl font-medium text-[#1a1a1a] mb-4">
                                    Whats Included
                                </h4>
                                <ul className="flex flex-col gap-3 mb-6">
                                    {whatsIncluded.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 font-body text-[#555555] text-sm leading-relaxed"
                                        >
                                            <span className="w-2 h-2 mt-1.5 bg-[#1a1a1a] rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/assessment"
                                    className="inline-flex items-center gap-2 px-5 py-2 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group w-fit"
                                >
                                    Free Energy Assessment
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

