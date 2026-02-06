import { ArrowRight, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#06402b] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="max-w-[800px]">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full font-body text-xs font-medium tracking-wider text-white mb-6">
                            <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4 invert" />
                            ABOUT US
                        </span>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6">
                            Transforming Waste Into Clean Energy for a Sustainable Future
                        </h1>

                        {/* Description */}
                        <p className="font-body text-lg text-white/80 leading-relaxed max-w-[600px]">
                            We're on a mission to revolutionize how farms and agribusinesses manage waste
                            by turning it into reliable, renewable energy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="flex flex-col p-8 bg-[#f5f5f0] rounded-[4px]">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#c0ff75] rounded-full mb-6">
                                <Target className="w-6 h-6 text-[#1a1a1a]" />
                            </div>
                            <h3 className="font-heading text-2xl font-medium text-[#1a1a1a] mb-4">
                                Our Mission
                            </h3>
                            <p className="font-body text-[#555555] leading-relaxed">
                                To provide accessible, affordable biogas solutions that empower farms
                                to achieve energy independence while protecting our planet.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col p-8 bg-[#f5f5f0] rounded-[4px]">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#c0ff75] rounded-full mb-6">
                                <Users className="w-6 h-6 text-[#1a1a1a]" />
                            </div>
                            <h3 className="font-heading text-2xl font-medium text-[#1a1a1a] mb-4">
                                Our Vision
                            </h3>
                            <p className="font-body text-[#555555] leading-relaxed">
                                A world where every farm operates on clean, self-generated energy,
                                creating a circular economy that benefits both farmers and the environment.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="flex flex-col p-8 bg-[#f5f5f0] rounded-[4px]">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#c0ff75] rounded-full mb-6">
                                <Heart className="w-6 h-6 text-[#1a1a1a]" />
                            </div>
                            <h3 className="font-heading text-2xl font-medium text-[#1a1a1a] mb-4">
                                Our Values
                            </h3>
                            <p className="font-body text-[#555555] leading-relaxed">
                                Sustainability, innovation, and community drive everything we do.
                                We believe in building long-term partnerships with our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#f5f5f0]">
                <div className="max-w-[1400px] mx-auto text-center">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#e8e8e0] rounded-full font-body text-xs font-medium tracking-wider text-[#1a1a1a] mb-6">
                        <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4" />
                        MEET THE TEAM
                    </span>

                    <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1a1a1a] mb-6">
                        The People Behind Biogax
                    </h2>
                    <p className="font-body text-lg text-[#555555] max-w-[600px] mx-auto mb-12">
                        Our team of experts is dedicated to designing and implementing biogas solutions
                        that make a real difference.
                    </p>

                    {/* Team Grid Placeholder */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-40 h-40 bg-gray-200 rounded-full mb-4" />
                                <h4 className="font-heading text-lg font-medium text-[#1a1a1a]">Team Member</h4>
                                <p className="font-body text-sm text-[#888888]">Position</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#06402b]">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
                        Ready to Transform Your Farm?
                    </h2>
                    <p className="font-body text-lg text-white/80 mb-10">
                        Get a free energy assessment and discover how biogas can work for you.
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
