import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const values = [
    {
        title: 'Sustainable Practices',
        description: 'Our biogas solutions are designed to be both reliable and efficient, reducing waste, lowering emissions, and delivering reliable energy.',
        image: '/benefit-site-audit.webp',
    },
    {
        title: 'Global Expertise',
        description: 'We bring world-class solutions tailored to local needs. From design to deployment, our experience ensures efficient, and sustainable power.',
        image: '/benefit-installation.webp',
    },
    {
        title: 'Reliable and Efficient',
        description: 'Our biogas solutions are designed to be both reliable and efficient, reducing waste, lowering emissions, and delivering reliable energy.',
        image: '/benefit-system-design.webp',
    },
];

export function OurValues() {
    return (
        <section className="bg-white py-[var(--spacing-section-pt-desktop)] px-6 max-md:py-[var(--spacing-section-pt-mobile)]">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Sticky Headline */}
                    <div className="flex flex-col items-start lg:sticky lg:top-32 lg:self-start lg:h-fit">
                        {/* Pill Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-[#1a1a1a] border border-gray-300 rounded-full mb-6">
                            <img
                                src="/badge-icon.svg"
                                alt=""
                                className="w-4 h-4"
                            />
                            OUR VALUES
                        </span>

                        {/* Headline */}
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-8">
                            Cleaner Tomorrow Starts with Biogas
                        </h2>

                        {/* CTA Button */}
                        <Button
                            className="rounded-full bg-[#c0ff75] text-[#1a1a1a] hover:bg-[#b0ef65] border-none px-6 py-2.5 h-auto text-sm font-medium"
                        >
                            Free Energy Assessment
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>

                    {/* Right Column: Stacking Cards */}
                    {/* Added min-h to ensure scroll distance for sticky effect */}
                    <div className="flex flex-col gap-6 lg:min-h-[120vh]">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="sticky top-24 lg:top-32"
                                style={{
                                    // Use smaller increment for tighter stacking
                                    marginTop: index > 0 ? `${index * 1}rem` : 0
                                }}
                            >
                                <Card className="border-none shadow-none bg-gray-50 overflow-hidden rounded-[4px] p-6 h-full transition-all">
                                    <div className="flex flex-row items-start justify-between gap-6">
                                        <div className="flex flex-col gap-3 flex-1">
                                            <h3 className="font-heading text-xl font-semibold text-[#1a1a1a]">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-sm text-balance">
                                                {value.description}
                                            </p>
                                        </div>

                                        {/* Image on the right, square and compact */}
                                        <div className="w-24 h-24 shrink-0 rounded-[4px] overflow-hidden bg-gray-200">
                                            <img
                                                src={value.image}
                                                alt={value.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden lg:block h-6" /> {/* Spacer for visual stacking depth */}
                                </Card>
                            </div>
                        ))}

                        {/* Buffer space at bottom to allow full unstacking/scrolling before section ends */}
                        <div className="h-[20vh] hidden lg:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}
