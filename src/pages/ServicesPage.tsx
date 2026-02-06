import { ServicesHero } from '../components/ServicesHero';
import { ServicesSolutions } from '../components/ServicesSolutions';
import { ServicesTestimonials } from '../components/ServicesTestimonials';

export function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <ServicesHero />

            {/* Solutions Section */}
            <ServicesSolutions />

            {/* Testimonials Section */}
            <ServicesTestimonials />
        </>
    );
}
