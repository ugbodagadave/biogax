import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blogs data - can be moved to a shared data file later
export const blogsData = [
    {
        id: 1,
        slug: 'science-behind-biogas',
        image: '/blog-biogas-science.webp',
        title: 'The Science Behind Biogas',
        description: 'A breakdown of the anaerobic digestion process and why it works so well for agricultural waste processing.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        category: 'General',
        date: 'Jan 28, 2026',
        author: 'Biogax Team',
        readTime: '5 min read',
    },
    {
        id: 2,
        slug: 'biofertilizer-soil-health',
        image: '/blog-biofertilizer.webp',
        title: 'How Biofertilizer Can Restore Soil Health Naturally',
        description: 'Chemical fertilizers degrade the soil. Learn how biogas byproducts offer a sustainable alternative for your crops.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        category: 'Clean Energy',
        date: 'Jan 28, 2026',
        author: 'Biogax Team',
        readTime: '7 min read',
    },
    {
        id: 3,
        slug: 'future-of-farm-energy',
        image: '/blog-biogas-science.webp',
        title: 'The Future of Farm Energy Independence',
        description: 'How modern farms are achieving energy independence through renewable biogas solutions.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        category: 'Innovation',
        date: 'Feb 5, 2026',
        author: 'Biogax Team',
        readTime: '6 min read',
    },
    {
        id: 4,
        slug: 'reducing-carbon-footprint',
        image: '/blog-biofertilizer.webp',
        title: 'Reducing Your Farm\'s Carbon Footprint',
        description: 'Practical steps for agricultural operations to minimize environmental impact.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        category: 'Sustainability',
        date: 'Feb 10, 2026',
        author: 'Biogax Team',
        readTime: '8 min read',
    },
];

export function BlogsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#06402b] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="max-w-[800px]">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full font-body text-xs font-medium tracking-wider text-white mb-6">
                            <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4 invert" />
                            OUR BLOG
                        </span>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6">
                            Insights & Updates
                        </h1>

                        {/* Description */}
                        <p className="font-body text-lg text-white/80 leading-relaxed max-w-[600px]">
                            Stay informed with the latest news, tips, and insights about biogas technology,
                            sustainable agriculture, and renewable energy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {blogsData.map((blog) => (
                            <article key={blog.id} className="flex flex-col group">
                                {/* Image */}
                                <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden mb-6">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#1a1a1a]">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-sm text-[#888888] mb-3">
                                        <span>{blog.date}</span>
                                        <span className="w-1 h-1 bg-[#888888] rounded-full" />
                                        <span>{blog.readTime}</span>
                                    </div>

                                    <h3 className="font-heading text-xl font-medium text-[#1a1a1a] mb-3">
                                        {blog.title}
                                    </h3>
                                    <p className="font-body text-[#555555] leading-relaxed mb-6 line-clamp-2">
                                        {blog.description}
                                    </p>

                                    <Link
                                        to={`/blogs/${blog.slug}`}
                                        className="inline-flex items-center gap-2 px-5 py-2 font-body text-sm font-medium text-[#1a1a1a] bg-transparent border border-[#e0e0e0] rounded-full hover:border-[#1a1a1a] transition-colors group/btn mt-auto self-start"
                                    >
                                        Read blog
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-[#888888] group-hover/btn:text-[#1a1a1a]" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#f5f5f0]">
                <div className="max-w-[600px] mx-auto text-center">
                    <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-4">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="font-body text-[#555555] mb-8">
                        Get the latest insights on biogas technology and sustainable agriculture delivered to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-white border border-[#e0e0e0] rounded-full font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a]"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors"
                        >
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
