import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageMarquee } from './ImageMarquee';
import type { Project } from '../data/projects';

interface ProjectWriteupProps {
    project: Project;
}

export function ProjectWriteup({ project }: ProjectWriteupProps) {
    return (
        <article className="bg-white">
            {/* Header Section */}
            <header className="pt-28 md:pt-32 pb-4 md:pb-6 px-4 md:px-8">
                <div className="max-w-[700px] mx-auto text-center">
                    {/* Location, Status, Date */}
                    <div className="flex items-center justify-center gap-3 mb-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 font-body text-sm text-[#555555]">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                        </span>
                        <span className="text-[#888888]">·</span>
                        <span className="px-2 py-0.5 bg-[#c0ff75] rounded-full font-body text-xs font-medium text-[#1a1a1a]">
                            {project.status}
                        </span>
                        <span className="font-body text-sm text-[#888888]">
                            {project.completionDate}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-heading text-[2rem] md:text-[2.75rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-4">
                        {project.title}
                    </h1>

                    {/* Description */}
                    <p className="font-body text-[1rem] text-[#555555] leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/assessment"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-body text-sm font-medium text-[#1a1a1a] border border-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors group"
                    >
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </header>

            {/* Image Marquee */}
            <ImageMarquee images={project.galleryImages} />

            {/* Quick Project Facts */}
            <section className="px-4 md:px-8 pt-8 pb-6 bg-white">
                <div className="max-w-[700px] mx-auto text-center">
                    <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-medium text-[#1a1a1a] mb-4">
                        Quick Project Facts
                    </h2>
                    <div className="border-t border-[#e0e0e0]">
                        <div className="flex items-center justify-between font-body text-sm text-[#888888] py-2 border-b border-[#e0e0e0]">
                            <span>Attribute</span>
                            <span>Details</span>
                        </div>
                        {project.quickFacts.map((fact, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-3 border-b border-[#e0e0e0] font-body text-sm"
                            >
                                <span className="flex items-center gap-2 font-medium text-[#1a1a1a] text-left">
                                    <span>{fact.icon}</span>
                                    {fact.label}
                                </span>
                                <span className="text-[#555555] text-right">{fact.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="px-4 md:px-8 pb-6 bg-white">
                <div className="max-w-[700px] mx-auto">
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full aspect-[16/9] object-cover rounded-[4px]"
                    />
                </div>
            </section>

            {/* Implementation Process */}
            <section className="px-4 md:px-8 pb-6 bg-white">
                <div className="max-w-[700px] mx-auto">
                    <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-medium text-[#1a1a1a] mb-3">
                        Implementation Process
                    </h2>
                    <p className="font-body text-[1rem] text-[#555555] leading-relaxed mb-6">
                        {project.implementationProcess.intro}
                    </p>

                    {/* Process Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.implementationProcess.steps.slice(0, 4).map((step, index) => (
                            <div
                                key={index}
                                className="p-4 border border-[#e0e0e0] rounded-[4px]"
                            >
                                <img
                                    src={step.icon}
                                    alt=""
                                    className="w-8 h-8 mb-3"
                                />
                                <h3 className="font-heading text-[1rem] font-medium text-[#1a1a1a] mb-1">
                                    {step.title}
                                </h3>
                                <p className="font-body text-sm text-[#555555] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Fifth step if exists (full width) */}
                    {project.implementationProcess.steps.length > 4 && (
                        <div className="mt-4 p-4 border border-[#e0e0e0] rounded-[4px]">
                            <img
                                src={project.implementationProcess.steps[4].icon}
                                alt=""
                                className="w-8 h-8 mb-3"
                            />
                            <h3 className="font-heading text-[1rem] font-medium text-[#1a1a1a] mb-1">
                                {project.implementationProcess.steps[4].title}
                            </h3>
                            <p className="font-body text-sm text-[#555555] leading-relaxed">
                                {project.implementationProcess.steps[4].description}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Measurable Impact */}
            <section className="px-4 md:px-8 pb-6 bg-white">
                <div className="max-w-[700px] mx-auto text-center">
                    <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-medium text-[#1a1a1a] mb-4">
                        Measurable Impact
                    </h2>
                    <div className="border-t border-[#e0e0e0]">
                        <div className="flex items-center justify-between font-body text-sm text-[#888888] py-2 border-b border-[#e0e0e0]">
                            <span>Impact Area</span>
                            <span>Results</span>
                        </div>
                        {project.measurableImpact.map((metric, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-3 border-b border-[#e0e0e0] font-body text-sm"
                            >
                                <span className="flex items-center gap-2 font-medium text-[#1a1a1a] text-left">
                                    <span>{metric.icon}</span>
                                    {metric.label}
                                </span>
                                <span className="text-[#555555] text-right">{metric.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges & Innovations */}
            <section className="px-4 md:px-8 pb-6 bg-white">
                <div className="max-w-[700px] mx-auto">
                    <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-medium text-[#1a1a1a] mb-3">
                        Challenges & Innovations
                    </h2>
                    <p className="font-body text-[1rem] text-[#555555] leading-relaxed">
                        {project.challengesAndInnovations}
                    </p>
                </div>
            </section>

            {/* Conclusion */}
            <section className="px-4 md:px-8 pb-2 bg-white">
                <div className="max-w-[700px] mx-auto">
                    <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-medium text-[#1a1a1a] mb-3">
                        Conclusion
                    </h2>
                    <p className="font-body text-[1rem] text-[#555555] leading-relaxed">
                        {project.conclusion}
                    </p>
                </div>
            </section>
        </article>
    );
}
