import { ProjectsHero } from '../components/ProjectsHero';
import { Projects } from '../components/Projects';
import { ProjectsArchives } from '../components/ProjectsArchives';

// Shared projects data - used by ProjectDetailPage
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
        slug: 'nyeri-co-digestion-pilot',
        title: 'Nyeri Co-Digestion Pilot',
        description: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking and cold storage system.',
        image: '/project-savannah.webp',
        location: 'Nyeri, Kenya',
        wasteUsed: 'Cow dung',
        capacity: '60 m³/day',
        output: '~6,200 kWh/month',
        completion: 'Aug 21, 2025',
        roi: 'Estimated 13 months'
    },
    {
        id: 3,
        slug: 'green-pastures-dairy',
        title: 'Green Pastures Dairy Biogas Plant',
        description: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking and cold storage system.',
        image: '/project-savannah.webp',
        location: 'Nakuru, Kenya',
        wasteUsed: 'Cow dung',
        capacity: '60 m³/day',
        output: '~6,200 kWh/month',
        completion: 'Aug 21, 2025',
        roi: 'Estimated 13 months'
    },
];
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
