interface TeamMember {
    name: string;
    role: string;
    image: string;
    hasTwitter: boolean;
    objectPosition?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Adaora Okafor',
        role: 'Chief Executive Officer (CEO)',
        image: '/team-1.webp',
        hasTwitter: true,
        objectPosition: 'center 30%',
    },
    {
        name: 'Magnus Sørensen',
        role: 'Chief Operations Officer',
        image: '/team-2.webp',
        hasTwitter: false,
        objectPosition: 'center 15%',
    },
    {
        name: 'Elena Martinez',
        role: 'Chief Technology Officer',
        image: '/team-3.webp',
        hasTwitter: true,
        objectPosition: 'center 15%',
    },
    {
        name: 'Samuel Otieno',
        role: 'Director of Engineering',
        image: '/team-4.webp',
        hasTwitter: false,
        objectPosition: 'center 25%',
    },
    {
        name: 'Grace Adeyemi',
        role: 'Director of Sustainability',
        image: '/team-5.webp',
        hasTwitter: true,
        objectPosition: 'center 20%',
    },
    {
        name: 'Chloe Anderson',
        role: 'Head of Business Development',
        image: '/team-6.webp',
        hasTwitter: false,
        objectPosition: 'center 15%',
    },
    {
        name: 'Layla Amrani',
        role: 'Chief Financial Officer',
        image: '/team-7.webp',
        hasTwitter: true,
        objectPosition: 'center 30%',
    },
    {
        name: 'Ann Igbinedion',
        role: 'Head of Operations',
        image: '/team-8.webp',
        hasTwitter: false,
        objectPosition: 'center 15%',
    },
];

// X (Twitter) Icon
function XIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

// LinkedIn Icon
function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

export function Leadership() {
    return (
        <section
            className="bg-white pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8"
            id="leadership"
        >
            {/* Header */}
            <div className="max-w-[1400px] mx-auto text-center mb-[var(--spacing-header-mb-mobile)] md:mb-[var(--spacing-header-mb-desktop)]">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5f5f0] border border-[#e8e8e0] rounded-full font-body text-[0.7rem] font-semibold tracking-wider text-[#1a1a1a] mb-6">
                    <img
                        src="/badge-icon.svg"
                        alt=""
                        className="w-4 h-4"
                    />
                    OUR LEADERSHIP
                </span>

                <h2 className="font-heading text-[1.75rem] md:text-[2.75rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-4 md:mb-6 max-w-[600px] mx-auto">
                    Our Visionary Team
                </h2>

                <p className="font-body text-[0.95rem] leading-relaxed text-[#555555] max-w-[550px] mx-auto">
                    Our visionary team blends expertise and passion to drive
                    sustainable change through biogas innovation
                </p>
            </div>

            {/* Team Grid */}
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="group">
                            {/* Image Container */}
                            <div className="relative aspect-square rounded-[4px] overflow-hidden mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: member.objectPosition || 'center 15%' }}
                                    loading="lazy"
                                />

                                {/* Hover Overlay Bar */}
                                <div className="absolute bottom-0 left-0 right-0 bg-[#c0ff75] px-4 py-3 flex items-center justify-between transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                    <span className="text-[#1a1a1a] text-sm font-medium">
                                        Connect on
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {member.hasTwitter && (
                                            <a
                                                href="#"
                                                className="text-[#1a1a1a] hover:text-[#06402b] transition-colors"
                                                aria-label={`Follow ${member.name} on X`}
                                            >
                                                <XIcon className="w-5 h-5" />
                                            </a>
                                        )}
                                        <a
                                            href="#"
                                            className="text-[#1a1a1a] hover:text-[#06402b] transition-colors"
                                            aria-label={`Connect with ${member.name} on LinkedIn`}
                                        >
                                            <LinkedInIcon className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Name & Role */}
                            <h3 className="font-heading text-lg md:text-xl font-medium text-[#1a1a1a] mb-1">
                                {member.name}
                            </h3>
                            <p className="font-body text-sm text-[#555555]">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
