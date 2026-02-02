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
        <nav className="navbar">
            <div className="navbar-inner">
                {/* Logo */}
                <a href="/" className="navbar-logo">
                    <img
                        src="/biogax-logo.svg"
                        alt="Biogax"
                        className="h-5 md:h-6 w-auto"
                    />
                </a>

                {/* Desktop Navigation Links */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <a href="#contact" className="navbar-cta hidden md:flex">
                    Free Energy Assessment
                    <ArrowRight className="w-4 h-4 cta-arrow" />
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
