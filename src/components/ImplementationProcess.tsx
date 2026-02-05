

const steps = [
    {
        icon: '/icon-expert-installation.svg',
        title: 'Expert installation',
        description: 'Our team is skilled in designing and implementing energy systems for all types of properties.',
    },
    {
        icon: '/icon-long-term-savings.svg',
        title: 'Long-term savings',
        description: 'We partner with leading manufacturers to bring you the best solar, battery, and EV charging solutions.',
    },
    {
        icon: '/icon-premium-technology.svg',
        title: 'Premium Technology',
        description: 'Our energy solutions are designed to reduce electricity costs and maximize efficiency.',
    },
];

export function ImplementationProcess() {
    return (
        <section className="bg-white pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-[var(--spacing-header-mb-mobile)] md:mb-[var(--spacing-header-mb-desktop)]">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5f5f0] border border-[#e8e8e0] rounded-full font-body text-[0.7rem] font-semibold tracking-wider text-[#1a1a1a] mb-6">
                        <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4" />
                        OUR PROCESS
                    </span>

                    <h2 className="font-heading text-[2rem] md:text-[3rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-[var(--item-inner-gap)]">
                        Implementation Process.
                    </h2>

                    <p className="font-body text-[0.95rem] leading-relaxed text-[#555555] max-w-[500px]">
                        Take a quick look at the intricate implementation process as
                        our contributions grow everyday
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-[#032b16] rounded-[4px] p-8 md:p-10 flex flex-col items-start min-h-[250px] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Top Left Icon */}
                            <div className="relative z-10 w-10 h-10 mb-auto">
                                <img
                                    src={step.icon}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 mt-8">
                                <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="font-body text-[0.9rem] leading-relaxed text-white/80">
                                    {step.description}
                                </p>
                            </div>

                            {/* Background Large Icon */}
                            <img
                                src={step.icon}
                                alt=""
                                className="absolute -top-4 -right-4 w-40 h-40 object-contain opacity-[0.1] rotate-12 pointer-events-none"
                            />
                            {/* Background Decorative Element (Subtle Gradient/Texture if needed, adhering to clean design for now) */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
