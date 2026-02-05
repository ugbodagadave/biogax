import { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter submission
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <footer className="bg-[#0A0E17] text-white">
            {/* CTA Header Section */}
            <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-normal leading-tight">
                        Ready to Transform<br />
                        Your Farm With Biogax?
                    </h2>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-all group whitespace-nowrap"
                    >
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Main Footer Grid - 4 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
                    {/* Column 1: Logo */}
                    <div>
                        <a href="/" className="inline-block">
                            <img
                                src="/biogax-logo.svg"
                                alt="Biogax"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="font-heading text-sm font-medium mb-5 text-white/60 uppercase tracking-wider">Links</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#about" className="text-white/80 hover:text-white transition-colors text-sm">About</a></li>
                            <li><a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">Services</a></li>
                            <li><a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm">Projects</a></li>
                            <li><a href="#blog" className="text-white/80 hover:text-white transition-colors text-sm">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Socials */}
                    <div>
                        <h4 className="font-heading text-sm font-medium mb-5 text-white/60 uppercase tracking-wider">Socials</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">LinkedIn</a></li>
                            <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">X</a></li>
                            <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Subscribe Newsletter */}
                    <div>
                        <h4 className="font-heading text-sm font-medium mb-3 text-white/60 uppercase tracking-wider">Subscribe Newsletter</h4>
                        <p className="text-white/60 text-sm mb-4">Sign up to get updates & news.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="jane@framer.com"
                                className="w-full px-4 py-2.5 bg-transparent border border-white/20 rounded-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2.5 bg-transparent border border-white/20 rounded-full text-sm text-white hover:bg-white/5 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-white/10">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-white/60 text-xs mb-0.5">Phone No:</p>
                            <a href="tel:+542456789963" className="text-white text-sm hover:text-[#c0ff75] transition-colors">+542 456 789 963</a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20">
                            <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-white/60 text-xs mb-0.5">Email Address:</p>
                            <a href="mailto:biogax@gmail.com" className="text-white text-sm hover:text-[#c0ff75] transition-colors">biogax@gmail.com</a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20">
                            <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="text-white/60 text-xs mb-0.5">Location:</p>
                            <p className="text-white text-sm">No: 59 A East Madison Street  Baltimore, MD, USA, 4508</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
                    <p className="text-sm text-white/40">©Biogax</p>
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#terms" className="text-sm text-white/40 hover:text-white transition-colors">Terms & Conditions</a>
                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2 font-medium text-xs text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-all group"
                        >
                            Free Energy Assessment
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
