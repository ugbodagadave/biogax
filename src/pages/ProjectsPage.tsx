import { ProjectsHero } from '../components/ProjectsHero';
import { Projects } from '../components/Projects';
import { ProjectsArchives } from '../components/ProjectsArchives';

// Re-export for backward compatibility with components that import from here
export { projectsData } from '../data/projects';

export function ProjectsPage() {
    return (
        <>
            {/* Hero Section */}
            <ProjectsHero />

            {/* Projects Section - imported from homepage */}
            <Projects />

            {/* Archives Section */}
            <ProjectsArchives />
        </>
    );
}
