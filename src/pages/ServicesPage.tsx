import { ArrowRight, Zap, Droplets, Leaf, Wrench, BarChart3, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Zap,
        title: 'Biogas Plant Design',
        description: 'Custom-designed biogas systems tailored to your farm\'s specific waste output and energy needs.',
    },
    {
        icon: Wrench,
        title: 'Installation & Setup',
        description: 'Professional installation by our certified technicians, ensuring optimal performance from day one.',
    },
    {
        icon: BarChart3,
        title: 'Energy Consulting',
        description: 'Comprehensive energy audits and feasibility studies to maximize your ROI.',
    },
    {
        icon: Droplets,
        title: 'Waste Management',
        description: 'End-to-end organic waste processing solutions that turn liability into asset.',
    },
    {
        icon: Leaf,
        title: 'Biofertilizer Production',
        description: 'Convert digestate into valuable organic fertilizer for improved soil health and crop yields.',
    },
    {
        icon: Shield,
        title: 'Maintenance & Support',
        description: 'Ongoing maintenance programs and 24/7 support to keep your system running efficiently.',
    },
];

export function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#06402b] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="max-w-[800px]">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full font-body text-xs font-medium tracking-wider text-white mb-6">
                            <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4 invert" />
                            OUR SERVICES
                        </span>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6">
                            Complete Biogas Solutions for Modern Agriculture
                        </h1>

                        {/* Description */}
                        <p className="font-body text-lg text-white/80 leading-relaxed max-w-[600px]">
                            From initial assessment to ongoing maintenance, we provide comprehensive services
                            to help you harness the power of biogas energy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.title}
                                    className="flex flex-col p-8 bg-[#f5f5f0] rounded-[4px] hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center bg-[#c0ff75] rounded-full mb-6">
                                        <Icon className="w-7 h-7 text-[#1a1a1a]" />
                                    </div>
                                    <h3 className="font-heading text-xl font-medium text-[#1a1a1a] mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="font-body text-[#555555] leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

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
