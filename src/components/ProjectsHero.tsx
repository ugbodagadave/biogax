export function ProjectsHero() {
    return (
        <section className="relative min-h-[550px] flex flex-col items-start justify-start overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/projects-hero.webp"
                    alt="Industrial biogas facility"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/40" />

            {/* Content */}
            <div className="flex flex-col items-start text-left px-4 md:px-8 max-w-[1400px] w-full mx-auto pt-32 pb-32">
                <div className="max-w-[600px]">
                    {/* Headline */}
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-6">
                        Projects
                    </h1>

                    {/* Subtext */}
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                        From small holder farms to large-scale dairies, our biogas systems are powering agriculture sustainably across the region
                    </p>
                </div>
            </div>
        </section>
    );
}
