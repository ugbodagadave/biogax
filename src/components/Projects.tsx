import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
    {
        id: 1,
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
        id: 3,
        title: 'Savannah Agro-Processing Biogas Retrofit',
        description: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking and cold storage system.',
        image: '/project-savannah.webp',
        location: 'Eldoret, Kenya',
        wasteUsed: 'Cow dung',
        capacity: '60 m³/day',
        output: '~6,200 kWh/month',
        completion: 'Aug 21, 2025',
        roi: 'Estimated 13 months'
    }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    const blur = useTransform(scrollYProgress, [0, 1], ["8px", "0px"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{ filter: `blur(${blur})`, opacity, scale }}
            className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch py-[calc(var(--spacing-list-gap-mobile)/2)] md:py-[calc(var(--spacing-list-gap-desktop)/3)] ${index !== 0 ? 'border-t border-gray-100 dark:border-white/5' : ''}`}
        >
            {/* Image */}
            <div className="w-full lg:flex-1 overflow-hidden bg-gray-100 dark:bg-white/5 relative aspect-square lg:aspect-auto rounded-[4px]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full lg:absolute lg:inset-0 object-cover"
                    loading="lazy"
                />
            </div>

            {/* Details */}
            <div className="w-full lg:w-[500px] xl:w-[550px] flex-none flex flex-col justify-center py-1">
                <h3 className="font-heading text-3xl md:text-4xl font-medium text-[#1a1a1a] dark:text-white mb-3 md:mb-4 leading-tight">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed">
                    {project.description}
                </p>

                {/* Data Grid */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-white/5">
                        <span className="flex items-center gap-2 font-medium text-[#1a1a1a] dark:text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                            Location
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-right">{project.location}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-white/5">
                        <span className="flex items-center gap-2 font-medium text-[#1a1a1a] dark:text-white">
                            <span className="text-green-500">♻</span>
                            Waste Used
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-right">{project.wasteUsed}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-white/5">
                        <span className="flex items-center gap-2 font-medium text-[#1a1a1a] dark:text-white">
                            <span className="text-green-500">🔋</span>
                            Biogas Capacity
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-right">{project.capacity}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-white/5">
                        <span className="flex items-center gap-2 font-medium text-[#1a1a1a] dark:text-white">
                            <span className="text-orange-500">⚡</span>
                            Energy Output
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-right">{project.output}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-white/5">
                        <span className="flex items-center gap-2 font-medium text-[#1a1a1a] dark:text-white">
                            <span className="text-gray-400">🏁</span>
                            Completion
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-right">{project.completion}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-white/5">
                        <span className="flex items-center gap-2 font-medium text-[#1a1a1a] dark:text-white">
                            <span className="text-yellow-500">💰</span>
                            ROI
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-right">{project.roi}</span>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-1">
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group cursor-pointer">
                        View Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white dark:bg-[#1a1a1a]">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-[var(--spacing-header-mb-mobile)] md:mb-[var(--spacing-header-mb-desktop)]">
                    <div className="max-w-[700px]">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 mb-6">
                            <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4" />
                            <span className="text-xs font-medium tracking-wide uppercase text-[#1a1a1a] dark:text-white">
                                SEE OUR PROJECTS
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] dark:text-white leading-[1.1]">
                            See How We're Powering Change Around the World
                        </h2>
                    </div>

                    {/* View All Button */}
                    <a
                        href="/projects"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group whitespace-nowrap"
                    >
                        View all projects
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Projects List */}
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
