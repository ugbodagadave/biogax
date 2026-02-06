import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServicesHero } from '../components/ServicesHero';
import { ServicesSolutions } from '../components/ServicesSolutions';

export function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <ServicesHero />

            {/* Solutions Section */}
            <ServicesSolutions />

            {/* Process Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#f5f5f0]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#e8e8e0] rounded-full font-body text-xs font-medium tracking-wider text-[#1a1a1a] mb-6">
                            <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4" />
                            HOW WE WORK
                        </span>
                        <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1a1a1a] mb-6">
                            Our Service Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {['Consultation', 'Design', 'Installation', 'Support'].map((step, i) => (
                            <div key={step} className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-[#c0ff75] rounded-full font-heading text-xl font-medium text-[#1a1a1a] mb-4">
                                    {i + 1}
                                </div>
                                <h4 className="font-heading text-lg font-medium text-[#1a1a1a] mb-2">
                                    {step}
                                </h4>
                                <p className="font-body text-sm text-[#555555]">
                                    Brief description of this stage in the process.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#06402b]">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="font-body text-lg text-white/80 mb-10">
                        Schedule a free consultation to discuss your energy needs.
                    </p>
                    <Link
                        to="/assessment"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group"
                    >
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </>
    );
}
