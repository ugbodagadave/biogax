import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample projects data - can be moved to a shared data file later
export const projectsData = [
    {
        id: 1,
        slug: 'savannah-agro-processing',
        title: 'Savannah Agro-Processing Biogas Retrofit',
        description: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking and cold storage system.',
        image: '/project-savannah.webp',
        location: 'Eldoret, Kenya',
        wasteUsed: 'Cow dung',
        capacity: '60 m³/day',
        output: '~6,200 kWh/month',
        completion: 'Aug 21, 2025',
        roi: 'Estimated 13 months'
    },
    {
        id: 2,
        slug: 'greenfield-dairy-farm',
        title: 'Greenfield Dairy Farm Biogas System',
        description: 'A comprehensive biogas solution for a large-scale dairy operation, reducing energy costs by 70%.',
        image: '/project-savannah.webp',
        location: 'Nakuru, Kenya',
        wasteUsed: 'Cow dung, food waste',
        capacity: '80 m³/day',
        output: '~8,500 kWh/month',
        completion: 'Dec 15, 2025',
        roi: 'Estimated 11 months'
    },
    {
        id: 3,
        slug: 'sunrise-poultry',
        title: 'Sunrise Poultry Energy Project',
        description: 'Converting poultry waste into clean energy for heating and electricity needs.',
        image: '/project-savannah.webp',
        location: 'Nairobi, Kenya',
        wasteUsed: 'Poultry litter',
        capacity: '40 m³/day',
        output: '~4,000 kWh/month',
        completion: 'Mar 10, 2026',
        roi: 'Estimated 14 months'
    },
];

export function ProjectsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#06402b] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="max-w-[800px]">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full font-body text-xs font-medium tracking-wider text-white mb-6">
                            <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4 invert" />
                            OUR PROJECTS
                        </span>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6">
                            See How We're Powering Change Around the World
                        </h1>

                        {/* Description */}
                        <p className="font-body text-lg text-white/80 leading-relaxed max-w-[600px]">
                            Explore our portfolio of successful biogas installations helping farms achieve
                            energy independence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projectsData.map((project) => (
                            <article key={project.id} className="flex flex-col group">
                                {/* Image */}
                                <div className="relative w-full aspect-[4/3] rounded-[4px] overflow-hidden mb-6">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#1a1a1a]">
                                            {project.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1">
                                    <h3 className="font-heading text-xl font-medium text-[#1a1a1a] mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="font-body text-[#555555] leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Quick Stats */}
                                    <div className="flex items-center gap-4 text-sm text-[#888888] mb-6">
                                        <span>{project.capacity}</span>
                                        <span className="w-1 h-1 bg-[#888888] rounded-full" />
                                        <span>{project.output}</span>
                                    </div>

                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group/btn mt-auto self-start"
                                    >
                                        View Details
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#06402b]">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
                        Want to Be Our Next Success Story?
                    </h2>
                    <p className="font-body text-lg text-white/80 mb-10">
                        Get a free energy assessment and see how biogas can transform your farm.
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
