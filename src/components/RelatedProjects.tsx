import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';

interface RelatedProjectsProps {
    currentProject: Project;
}

export function RelatedProjects({ currentProject }: RelatedProjectsProps) {
    // Get other projects (excluding current)
    const relatedProjects = projectsData.filter((p) => p.id !== currentProject.id);

    if (relatedProjects.length === 0) {
        return null;
    }

    return (
        <section className="bg-white pt-0 pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8">
            <div className="max-w-[700px] mx-auto">
                {/* Header with separator */}
                <div className="border-t border-[#e0e0e0] pt-6 mb-6">
                    <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-medium text-[#1a1a1a]">
                        Related Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedProjects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.slug}`}
                            className="flex items-start gap-3 group"
                        >
                            {/* Thumbnail */}
                            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-[4px] overflow-hidden">
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-heading text-[0.9rem] md:text-[1rem] font-medium text-[#1a1a1a] leading-tight mb-1 flex items-center gap-1">
                                    <span className="line-clamp-2">{project.title}</span>
                                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                                </h3>
                                <p className="font-body text-xs text-[#888888]">
                                    {project.location}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
