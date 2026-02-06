import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const archiveProjects = [
    {
        slug: 'savannah-agro-processing',
        title: 'Savannah Agro-Processing Biogas Retrofit',
        location: 'Eldoret, Kenya',
        preview: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking a...',
    },
    {
        slug: 'nyeri-co-digestion-pilot',
        title: 'Nyeri Co-Digestion Pilot',
        location: 'Nyeri, Kenya',
        preview: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking a...',
    },
    {
        slug: 'green-pastures-dairy',
        title: 'Green Pastures Dairy Biogas Plant',
        location: 'Nakuru, Kenya',
        preview: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking a...',
    },
];

export function ProjectsArchives() {
    return (
        <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4 md:mb-6">
                    Archives
                </h2>

                {/* Archives List */}
                <div className="flex flex-col divide-y divide-gray-100">
                    {archiveProjects.map((project) => (
                        <div
                            key={project.slug}
                            className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr_auto] gap-4 md:gap-8 items-center py-6"
                        >
                            {/* Project Name */}
                            <h3 className="font-heading text-lg font-medium text-[#1a1a1a]">
                                {project.title}
                            </h3>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-sm text-[#555555]">
                                <MapPin className="w-4 h-4" />
                                <span>{project.location}</span>
                            </div>

                            {/* Preview */}
                            <p className="text-sm text-[#888888] line-clamp-1">
                                {project.preview}
                            </p>

                            {/* View Details Button */}
                            <Link
                                to={`/projects/${project.slug}`}
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-body text-sm font-medium text-[#1a1a1a] border border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors group whitespace-nowrap"
                            >
                                View Details
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
