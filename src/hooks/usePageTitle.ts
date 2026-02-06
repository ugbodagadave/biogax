import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
    '/': 'Biogax - Sustainable Biogas Energy',
    '/about': 'About Us - Biogax',
    '/services': 'Our Services - Biogax',
    '/projects': 'Projects - Biogax',
    '/blogs': 'News & Insights - Biogax',
    '/assessment': 'Free Energy Assessment - Biogax',
};

export function usePageTitle() {
    const location = useLocation();

    useEffect(() => {
        // Check for exact match first
        let title = pageTitles[location.pathname];

        // Check for dynamic routes
        if (!title) {
            if (location.pathname.startsWith('/blogs/')) {
                title = 'Blog - Biogax';
            } else if (location.pathname.startsWith('/projects/')) {
                title = 'Project - Biogax';
            } else {
                title = 'Biogax';
            }
        }

        document.title = title;
    }, [location.pathname]);
}
