import { ArrowRight, ArrowLeft, MapPin, Calendar, Zap, Leaf } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from './ProjectsPage';

export function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f0] px-4">
                <h1 className="font-heading text-4xl font-medium text-[#1a1a1a] mb-4">Project Not Found</h1>
                <p className="font-body text-[#555555] mb-8">The project you're looking for doesn't exist.</p>
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>
            </section>
        );
    }

    // Get related projects (excluding current)
    const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 2);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#06402b] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    {/* Back Link */}
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>

                    <div className="max-w-[800px]">
                        {/* Location Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full font-body text-xs font-medium tracking-wider text-white mb-6">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                        </span>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6">
                            {project.title}
                        </h1>

                        {/* Description */}
                        <p className="font-body text-lg text-white/80 leading-relaxed max-w-[600px]">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Image */}
            <section className="px-4 md:px-8 -mt-8 relative z-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="rounded-[4px] overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full aspect-[21/9] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-6">
                                Project Overview
                            </h2>
                            <div className="prose prose-lg font-body text-[#555555]">
                                <p>
                                    This project demonstrates our commitment to delivering sustainable energy solutions
                                    tailored to the unique needs of each client. Working closely with the farm management
                                    team, we designed and implemented a comprehensive biogas system that maximizes
                                    energy output while minimizing environmental impact.
                                </p>
                                <p>
                                    The installation process was completed on schedule, with minimal disruption to
                                    daily farm operations. Our team provided thorough training to ensure the client's
                                    staff could operate and maintain the system effectively.
                                </p>
                                <p>
                                    Since commissioning, the system has consistently exceeded performance expectations,
                                    generating clean energy while significantly reducing the farm's carbon footprint
                                    and waste management costs.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#f5f5f0] rounded-[4px] p-6">
                                <h3 className="font-heading text-lg font-medium text-[#1a1a1a] mb-6">
                                    Project Details
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-[#888888] mt-0.5" />
                                        <div>
                                            <p className="font-body text-sm text-[#888888]">Location</p>
                                            <p className="font-body font-medium text-[#1a1a1a]">{project.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Leaf className="w-5 h-5 text-[#888888] mt-0.5" />
                                        <div>
                                            <p className="font-body text-sm text-[#888888]">Waste Used</p>
                                            <p className="font-body font-medium text-[#1a1a1a]">{project.wasteUsed}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-[#888888] mt-0.5" />
                                        <div>
                                            <p className="font-body text-sm text-[#888888]">Energy Output</p>
                                            <p className="font-body font-medium text-[#1a1a1a]">{project.output}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-[#888888] mt-0.5" />
                                        <div>
                                            <p className="font-body text-sm text-[#888888]">Completion</p>
                                            <p className="font-body font-medium text-[#1a1a1a]">{project.completion}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-[#e0e0e0] mt-6 pt-6">
                                    <p className="font-body text-sm text-[#888888] mb-1">ROI</p>
                                    <p className="font-heading text-2xl font-medium text-[#c0ff75]">{project.roi}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#f5f5f0]">
                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-8">
                            Related Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedProjects.map((relatedProject) => (
                                <Link
                                    key={relatedProject.id}
                                    to={`/projects/${relatedProject.slug}`}
                                    className="flex flex-col md:flex-row gap-6 bg-white rounded-[4px] p-4 hover:shadow-lg transition-shadow group"
                                >
                                    <div className="w-full md:w-48 aspect-[4/3] md:aspect-square rounded-[4px] overflow-hidden flex-shrink-0">
                                        <img
                                            src={relatedProject.image}
                                            alt={relatedProject.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-body text-sm text-[#888888] mb-2">{relatedProject.location}</p>
                                        <h3 className="font-heading text-lg font-medium text-[#1a1a1a] mb-2">
                                            {relatedProject.title}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1a1a1a] group-hover:text-[#06402b]">
                                            View Project
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#06402b]">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
                        Start Your Project Today
                    </h2>
                    <p className="font-body text-lg text-white/80 mb-10">
                        Get a free assessment and discover how biogas can work for your farm.
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
