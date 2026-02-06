import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    });

    const isActiveLink = (href: string) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' },
            }}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 liquid-glass"
        >
            <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-white group">
                    <img
                        src="/biogax-logo.svg"
                        alt="Biogax"
                        className="h-5 md:h-6 w-auto"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`relative px-4 py-2 font-body text-sm font-medium rounded-full transition-all duration-300 ${isActiveLink(link.href)
                                ? 'bg-[#c0ff75] text-[#1a1a1a]'
                                : 'text-white/90 hover:bg-[#c0ff75] hover:text-[#1a1a1a]'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <Link
                    to="/assessment"
                    className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] rounded-full transition-all duration-300 hover:bg-[#d4ff9e] shadow-[0_0_15px_rgba(192,255,117,0.2)] group"
                >
                    Free Energy Assessment
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2 text-white transition-colors hover:bg-white/10 rounded-full border border-white/10 bg-white/5"
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
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-4 right-4 liquid-glass rounded-2xl p-5 flex flex-col gap-3 mt-3 shadow-2xl overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`px-5 py-3 font-body text-lg font-medium rounded-xl transition-all hover:bg-white/10 hover:pl-7 ${isActiveLink(link.href)
                                    ? 'bg-white/10 text-white'
                                    : 'text-white/90'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/assessment"
                            className="px-5 py-4 font-body text-lg font-medium text-[#1a1a1a] bg-[#c0ff75] rounded-xl transition-all hover:bg-[#d4ff9e] flex items-center justify-between mt-2 shadow-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Free Energy Assessment
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}


