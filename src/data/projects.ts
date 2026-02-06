export interface ProjectFact {
    label: string;
    value: string;
    icon: string;
}

export interface ProcessStep {
    icon: string;
    title: string;
    description: string;
}

export interface ImpactMetric {
    label: string;
    value: string;
    icon: string;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    location: string;
    status: 'Completed' | 'In Progress';
    completionDate: string;
    heroImage: string;
    galleryImages: string[];
    quickFacts: ProjectFact[];
    implementationProcess: {
        intro: string;
        steps: ProcessStep[];
    };
    measurableImpact: ImpactMetric[];
    challengesAndInnovations: string;
    conclusion: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        slug: 'savannah-agro-processing',
        title: 'Savannah Agro-Processing Biogas Retrofit',
        description: 'We designed and installed a 60m³ anaerobic digester that now powers the entire milking and cold storage system.',
        location: 'Eldoret, Kenya',
        status: 'Completed',
        completionDate: 'Aug 21, 2025',
        heroImage: '/project-savannah.webp',
        galleryImages: [
            '/services-1.webp',
            '/services-2.webp',
            '/services-3.webp',
            '/what-we-do-1.webp',
            '/what-we-do-2.webp',
            '/what-we-do-3.webp',
        ],
        quickFacts: [
            { label: 'Location', value: 'Eldoret, Kenya', icon: '📍' },
            { label: 'Waste Used', value: 'Cow dung', icon: '♻️' },
            { label: 'Biogas Capacity', value: '60 m³/day', icon: '🔋' },
            { label: 'Energy Output', value: '~6,200 kWh/month', icon: '⚡' },
            { label: 'Completion', value: 'Aug 21, 2025', icon: '🏁' },
            { label: 'ROI', value: 'Estimated 13 months', icon: '💰' },
        ],
        implementationProcess: {
            intro: 'Before installation, Savannah Agro relied on diesel generators to run milking machines and chillers—costly, unreliable, and carbon-intensive. With rising fuel costs and local climate pressures, the farm needed a renewable solution to support its dairy operations.',
            steps: [
                {
                    icon: '/icon-site-audit.svg',
                    title: 'Site Audit',
                    description: 'Performed waste and energy assessment; estimated 4–5 tons of daily cow dung.',
                },
                {
                    icon: '/icon-system-design.svg',
                    title: 'System Design',
                    description: 'Custom fixed-dome digester with gas storage, slurry outlet, and underground piping.',
                },
                {
                    icon: '/icon-construction.svg',
                    title: 'Construction',
                    description: 'Took 6 weeks with local masonry labor and prefabricated dome components.',
                },
                {
                    icon: '/icon-expert-installation.svg',
                    title: 'Installation & Integration',
                    description: 'Biogas piped directly to kitchen, milking parlor, and backup generator.',
                },
                {
                    icon: '/icon-installation.svg',
                    title: 'Training & Handover',
                    description: 'Staff trained on maintenance, gas flow control, and slurry reuse.',
                },
            ],
        },
        measurableImpact: [
            { label: 'CO₂ Reduced', value: '~28 tons/year', icon: '🌿' },
            { label: 'Diesel Replaced', value: '~500 liters/month', icon: '⛽' },
            { label: 'Cost Savings', value: 'KES 130,000/month (~$950)', icon: '💎' },
            { label: 'Byproduct', value: '~1.5 tons/week organic fertilizer', icon: '🌱' },
            { label: 'Jobs Created', value: '6 temporary, 1 permanent technician', icon: '👷' },
        ],
        challengesAndInnovations: 'The high elevation of Eldoret meant cooler nights, which can slow digestion. We added thermal insulation and used slurry pre-warming to maintain optimal temperatures and microbial activity.',
        conclusion: 'Biogas is more than a renewable energy solution—it\'s a practical, cost-effective tool that empowers farmers to do more with what they already have.',
    },
    {
        id: 2,
        slug: 'nyeri-co-digestion-pilot',
        title: 'Nyeri Co-Digestion Pilot',
        description: 'A pioneering co-digestion project combining agricultural waste with food processing residues for maximum biogas yield.',
        location: 'Nyeri, Kenya',
        status: 'Completed',
        completionDate: 'Jun 15, 2025',
        heroImage: '/services-hero.webp',
        galleryImages: [
            '/what-we-do-1.webp',
            '/what-we-do-2.webp',
            '/what-we-do-3.webp',
            '/services-1.webp',
            '/services-2.webp',
            '/services-3.webp',
        ],
        quickFacts: [
            { label: 'Location', value: 'Nyeri, Kenya', icon: '📍' },
            { label: 'Waste Used', value: 'Mixed agricultural & food waste', icon: '♻️' },
            { label: 'Biogas Capacity', value: '45 m³/day', icon: '🔋' },
            { label: 'Energy Output', value: '~4,800 kWh/month', icon: '⚡' },
            { label: 'Completion', value: 'Jun 15, 2025', icon: '🏁' },
            { label: 'ROI', value: 'Estimated 11 months', icon: '💰' },
        ],
        implementationProcess: {
            intro: 'The Nyeri facility faced a unique challenge: managing diverse waste streams from both farming operations and a nearby food processing plant. We designed a co-digestion system that optimizes biogas production by combining complementary feedstocks.',
            steps: [
                {
                    icon: '/icon-site-audit.svg',
                    title: 'Site Audit',
                    description: 'Analyzed waste composition from multiple sources to determine optimal mixing ratios.',
                },
                {
                    icon: '/icon-system-design.svg',
                    title: 'System Design',
                    description: 'Dual-inlet digester with automated feedstock blending and pH monitoring.',
                },
                {
                    icon: '/icon-construction.svg',
                    title: 'Construction',
                    description: 'Built over 8 weeks with specialized mixing chambers and pre-treatment tanks.',
                },
                {
                    icon: '/icon-expert-installation.svg',
                    title: 'Installation & Integration',
                    description: 'Connected to on-site generator powering processing equipment.',
                },
                {
                    icon: '/icon-installation.svg',
                    title: 'Training & Handover',
                    description: 'Comprehensive training on co-digestion management and waste sorting protocols.',
                },
            ],
        },
        measurableImpact: [
            { label: 'CO₂ Reduced', value: '~22 tons/year', icon: '🌿' },
            { label: 'Diesel Replaced', value: '~380 liters/month', icon: '⛽' },
            { label: 'Cost Savings', value: 'KES 105,000/month (~$770)', icon: '💎' },
            { label: 'Byproduct', value: '~1.2 tons/week organic fertilizer', icon: '🌱' },
            { label: 'Jobs Created', value: '4 temporary, 2 permanent', icon: '👷' },
        ],
        challengesAndInnovations: 'Balancing diverse waste streams required custom automation. We developed a real-time pH monitoring system that automatically adjusts feedstock ratios for optimal digestion.',
        conclusion: 'Co-digestion represents the next frontier in biogas technology—turning multiple waste problems into a single, powerful solution.',
    },
    {
        id: 3,
        slug: 'green-pastures-dairy',
        title: 'Green Pastures Dairy Biogas Plant',
        description: 'A comprehensive biogas installation serving a large-scale dairy operation with integrated fertilizer production.',
        location: 'Nakuru, Kenya',
        status: 'Completed',
        completionDate: 'Sep 30, 2025',
        heroImage: '/projects-hero.webp',
        galleryImages: [
            '/services-3.webp',
            '/services-1.webp',
            '/services-2.webp',
            '/what-we-do-3.webp',
            '/what-we-do-1.webp',
            '/what-we-do-2.webp',
        ],
        quickFacts: [
            { label: 'Location', value: 'Nakuru, Kenya', icon: '📍' },
            { label: 'Waste Used', value: 'Dairy cattle manure', icon: '♻️' },
            { label: 'Biogas Capacity', value: '80 m³/day', icon: '🔋' },
            { label: 'Energy Output', value: '~8,400 kWh/month', icon: '⚡' },
            { label: 'Completion', value: 'Sep 30, 2025', icon: '🏁' },
            { label: 'ROI', value: 'Estimated 10 months', icon: '💰' },
        ],
        implementationProcess: {
            intro: 'Green Pastures Dairy manages over 500 head of cattle, producing significant waste that previously created environmental and logistical challenges. Our solution converted this burden into a competitive advantage.',
            steps: [
                {
                    icon: '/icon-site-audit.svg',
                    title: 'Site Audit',
                    description: 'Mapped waste collection routes and quantified daily manure production across all facilities.',
                },
                {
                    icon: '/icon-system-design.svg',
                    title: 'System Design',
                    description: 'Large-scale continuous-flow digester with mechanical agitation and heat recovery.',
                },
                {
                    icon: '/icon-construction.svg',
                    title: 'Construction',
                    description: 'Phased construction over 10 weeks to minimize disruption to dairy operations.',
                },
                {
                    icon: '/icon-expert-installation.svg',
                    title: 'Installation & Integration',
                    description: 'Full integration with dairy heating, pasteurization, and cooling systems.',
                },
                {
                    icon: '/icon-installation.svg',
                    title: 'Training & Handover',
                    description: 'Dedicated on-site training program with ongoing technical support.',
                },
            ],
        },
        measurableImpact: [
            { label: 'CO₂ Reduced', value: '~38 tons/year', icon: '🌿' },
            { label: 'Diesel Replaced', value: '~680 liters/month', icon: '⛽' },
            { label: 'Cost Savings', value: 'KES 175,000/month (~$1,280)', icon: '💎' },
            { label: 'Byproduct', value: '~2.5 tons/week organic fertilizer', icon: '🌱' },
            { label: 'Jobs Created', value: '8 temporary, 3 permanent', icon: '👷' },
        ],
        challengesAndInnovations: 'Scale required careful thermal management. We implemented a heat exchanger system that captures waste heat from the generator to pre-warm incoming slurry, boosting efficiency by 15%.',
        conclusion: 'Large-scale dairy operations have immense potential for biogas. Green Pastures now serves as a model for sustainable dairy farming across the region.',
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projectsData.find((p) => p.slug === slug);
}
