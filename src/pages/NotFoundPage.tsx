import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export function NotFoundPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-[#06402b] px-4 md:px-8">
            <div className="text-center max-w-[600px] mx-auto">
                {/* 404 Number */}
                <h1 className="font-heading text-[8rem] md:text-[12rem] font-medium leading-none text-[#c0ff75] mb-4">
                    404
                </h1>

                {/* Message */}
                <h2 className="font-heading text-2xl md:text-4xl font-medium text-white mb-4">
                    Page Not Found
                </h2>
                <p className="font-body text-lg text-white/70 mb-10">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* CTA Button */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group"
                >
                    <Home className="w-4 h-4" />
                    Back to Home
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
