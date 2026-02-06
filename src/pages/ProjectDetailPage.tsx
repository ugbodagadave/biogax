import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import { ProjectWriteup } from '../components/ProjectWriteup';
import { RelatedProjects } from '../components/RelatedProjects';

export function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
                <h1 className="font-heading text-4xl font-medium text-[#1a1a1a] mb-4">
                    Project Not Found
                </h1>
                <p className="font-body text-[#555555] mb-8">
                    The project you're looking for doesn't exist.
                </p>
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

    return (
        <>
            <ProjectWriteup project={project} />
            <RelatedProjects currentProject={project} />
        </>
    );
}
