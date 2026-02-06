import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const benefits = [
    {
        icon: '/icon-site-audit.svg',
        title: 'Site Audit',
        description: 'Performed waste and energy assessment; estimated 4-5 tons of daily cow dung.',
        image: '/benefit-site-audit.webp',
    },
    {
        icon: '/icon-construction.svg',
        title: 'Construction',
        description: 'Took 6 weeks with local masonry labor and prefabricated dome components.',
        image: '/benefit-construction.webp',
    },
    {
        icon: '/icon-system-design.svg',
        title: 'System Design',
        description: 'Custom fixed-dome digester with gas storage, slurry outlet, and underground piping.',
        image: '/benefit-system-design.webp',
    },
    {
        icon: '/icon-installation.svg',
        title: 'Installation & Integration',
        description: 'Biogas piped directly to kitchen, milking parlor, and backup generator.',
        image: '/benefit-installation.webp',
    },
];

export function Benefits() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section className="bg-white pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8" id="benefits">
            <div className="max-w-[1050px] mx-auto">
                <div className="flex flex-col items-center text-center mb-[var(--spacing-header-mb-mobile)] md:mb-[var(--spacing-header-mb-desktop)]">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5f5f0] border border-[#e8e8e0] rounded-full font-body text-[0.7rem] font-semibold tracking-wider text-[#1a1a1a] mb-6">
                        <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4" />
                        BENEFITS
                    </span>

                    <h2 className="font-heading text-[2rem] md:text-[3rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-6 max-w-[700px]">
                        Practical Solutions for Real Farm Challenges.
                    </h2>

                    <p className="font-body text-[0.95rem] leading-relaxed text-[#555555] max-w-[600px]">
                        Our biogas systems are designed to solve the everyday problems farmers face — from rising fuel costs to waste management.
                    </p>
                </div>

                <div ref={containerRef} className="relative flex flex-col gap-[var(--spacing-list-gap-mobile)] md:gap-[var(--spacing-list-gap-desktop)]">
                    {/* Unified Vertical Progress Line */}
                    <div className="absolute left-[19px] top-6 bottom-6 w-[2.5px] bg-[#e5e5e5] z-0">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-black origin-top"
                        />
                    </div>
                    {/* Mobile Line Container (Left aligned) - We can just use the same logic but left aligned if we want specific mobile look, but design suggests centered or possibly left on mobile? 
                        User said "as i scroll down, the lines linking the numbers...". 
                        Based on Screenshot 3 (mobile view?), the numbers are on the left.
                        Wait, Screenshot 3 shows desktop view with numbers on the left? "1 Site Audit".
                    */}

                    {/* Actually, looking at the layout again.
                        Screenshot 3 shows:
                        (1) [Icon] Title...   [Image]
                        (2) [Icon] Title...   [Image]
                        The numbers (1, 2) are on the far left of the content block.
                        The line would go through them.
                        So layout is:
                        Col 1: Number + Line
                        Col 2: Text Content
                        Col 3: Image
                         OR
                        The number is just part of the text block.
                        
                        Let's revisit the screenshot design.
                        It shows a number circle on the left.
                        Then an Icon.
                        Then Title.
                        The vertical line goes through the number circles.
                        
                        So on desktop, if it is side-by-side (Image Right), the line is on the LEFT of the text column?
                        If I put the image on the right for ALL items, then the line is on the far left of the text column.
                        
                        Let's check the user request images.
                        The user image shows:
                        1. Site Audit (Left) | Image (Right)
                        2. Construction (Left) | Image (Right)
                        
                        The line connects the numbers 1, 2, 3, 4.
                        So the line is on the LEFT side of the content column.
                    */}

                    <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-[#e5e5e5] md:hidden">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-black origin-top"
                        />
                    </div>


                    {benefits.map((benefit, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative pl-16 md:pl-20 items-center">
                            {/* Left Column: Content */}
                            <div className="flex flex-col items-start relative">
                                {/* Number Circle absolute-positioned to center on the line */}
                                <div className="absolute -left-16 md:-left-20 top-0 flex flex-col items-center shrink-0 h-10 w-10">
                                    <div className="w-10 h-10 rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center text-sm font-medium z-10 text-[#1a1a1a] shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="flex flex-col items-start pt-1">
                                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-6 text-[#1a1a1a]">
                                        <img src={benefit.icon} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                                    </div>

                                    <h3 className="font-heading text-2xl md:text-[2rem] font-medium leading-tight text-[#1a1a1a] mb-4">
                                        {benefit.title}
                                    </h3>

                                    <p className="font-body text-[0.95rem] md:text-[1rem] leading-relaxed text-[#555555] mb-6 md:mb-8 max-w-[400px]">
                                        {benefit.description}
                                    </p>


                                </div>
                            </div>

                            {/* Right Column: Image */}
                            <div className="relative rounded-[4px] overflow-hidden aspect-[16/8] md:aspect-[16/9]">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}

                    {/* CTA at the end */}
                    <div className="pl-16 mt-8">
                        <Link
                            to="/assessment"
                            className="inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] border-2 border-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group"
                        >
                            Free Energy Assessment
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                /* Add any custom styles if needed */
            `}</style>
        </section>
    );
}
