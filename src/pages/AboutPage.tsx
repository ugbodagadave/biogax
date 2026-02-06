import { AboutHero } from '../components/AboutHero';
import { AboutUs } from '../components/AboutUs';
import { OurValues } from '../components/OurValues';

export function AboutPage() {
    return (
        <main className="flex-1 w-full">
            <AboutHero />
            <AboutUs />
            <OurValues />
        </main>
    );
}
