import { AboutHero } from '../components/AboutHero';
import { AboutUs } from '../components/AboutUs';

export function AboutPage() {
    return (
        <main className="flex-1 w-full">
            <AboutHero />
            <AboutUs />
        </main>
    );
}
