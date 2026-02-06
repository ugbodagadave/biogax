export interface Author {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
}

export const authors: Author[] = [
    {
        id: 'adaora-okafor',
        name: 'Adaora Okafor',
        role: 'Chief Executive Officer',
        image: '/team-1.webp',
        bio: 'Adaora leads Biogax with over 15 years of experience in renewable energy and sustainable agriculture across Africa.',
    },
    {
        id: 'magnus-sorensen',
        name: 'Magnus Sørensen',
        role: 'Chief Operations Officer',
        image: '/team-2.webp',
        bio: 'Magnus oversees daily operations and supply chain logistics, bringing expertise from European biogas installations.',
    },
    {
        id: 'elena-martinez',
        name: 'Elena Martinez',
        role: 'Chief Technology Officer',
        image: '/team-3.webp',
        bio: 'Elena drives our technological innovation, with a PhD in biochemical engineering and 10+ years in anaerobic digestion systems.',
    },
    {
        id: 'samuel-otieno',
        name: 'Samuel Otieno',
        role: 'Director of Engineering',
        image: '/team-4.webp',
        bio: 'Samuel leads the engineering team, specializing in custom biogas system design for diverse agricultural contexts.',
    },
    {
        id: 'grace-adeyemi',
        name: 'Grace Adeyemi',
        role: 'Director of Sustainability',
        image: '/team-5.webp',
        bio: 'Grace ensures our projects meet the highest environmental standards and maximize positive impact for farming communities.',
    },
    {
        id: 'chloe-anderson',
        name: 'Chloe Anderson',
        role: 'Head of Business Development',
        image: '/team-6.webp',
        bio: 'Chloe builds strategic partnerships and expands Biogax reach across emerging markets in Africa and beyond.',
    },
    {
        id: 'layla-amrani',
        name: 'Layla Amrani',
        role: 'Chief Financial Officer',
        image: '/team-7.webp',
        bio: 'Layla manages financial strategy, ensuring sustainable growth and accessibility for smallholder farmers.',
    },
    {
        id: 'ann-igbinedion',
        name: 'Ann Igbinedion',
        role: 'Head of Operations',
        image: '/team-8.webp',
        bio: 'Ann coordinates field operations and farmer support programs, with deep roots in agricultural extension services.',
    },
];

export function getAuthorById(id: string): Author | undefined {
    return authors.find((author) => author.id === id);
}
