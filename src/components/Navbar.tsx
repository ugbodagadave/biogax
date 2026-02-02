import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-[#1a1a1a]">
            <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 text-white group">
                    <img
                        src="/biogax-logo.svg"
                        alt="Biogax"
                        className="h-5 md:h-6 w-auto"
                    />
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 font-body text-sm font-medium text-white rounded-full transition-all duration-200 hover:bg-[#c0ff75] hover:text-[#1a1a1a] "
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] rounded-full transition-all duration-200 hover:bg-[#d4ff9e] group"
                >
                    Free Energy Assessment
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2 text-white transition-colors hover:bg-white/10 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 bg-[#1a1a1a]/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2 mt-2 border border-white/10 shadow-2xl animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 font-body text-base font-medium text-white rounded-xl transition-colors hover:bg-white/10"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-4 py-3 font-body text-base font-medium text-[#1a1a1a] bg-[#c0ff75] rounded-xl transition-colors hover:bg-[#d4ff9e] flex items-center justify-between mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            )}
        </nav>
    );
}
