import { ArrowRight } from 'lucide-react';

const blogs = [
    {
        id: 1,
        image: '/blog-biogas-science.webp',
        title: 'The Science Behind Biogas',
        description: 'A breakdown of the anaerobic digestion process and why it works so well...',
        category: 'General',
        date: 'Jan 28, 2026',
    },
    {
        id: 2,
        image: '/blog-biofertilizer.webp',
        title: 'How Biofertilizer Can Restore Soil Health Naturally',
        description: 'Chemical fertilizers degrade the soil. Learn how biogas byproducts offer a...',
        category: 'Clean Energy',
        date: 'Jan 28, 2026',
    },
];

export function BlogPreview() {
    return (
        <section className="bg-white pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8" id="blog">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-[var(--spacing-header-mb-mobile)] md:mb-[var(--spacing-header-mb-desktop)]">
                    <div className="flex flex-col items-start max-w-[800px]">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5f5f0] border border-[#e8e8e0] rounded-full font-body text-[0.7rem] font-semibold tracking-wider text-[#1a1a1a] mb-6">
                            <img
                                src="/what-we-do-icon.svg"
                                alt=""
                                className="w-4 h-4"
                            />
                            OUR BLOG
                        </span>

                        <h2 className="font-heading text-[2.5rem] md:text-[4rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a]">
                            Our latest insights
                        </h2>
                    </div>

                    <a href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 font-body text-[0.875rem] font-medium text-[#1a1a1a] bg-[#c0ff75] border-2 border-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group self-start md:self-end">
                        View all posts
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 gap-y-12">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="flex flex-col group">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden mb-6 md:mb-8">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-start flex-1">
                                <h3 className="font-heading text-[1.5rem] md:text-[1.75rem] font-medium leading-tight text-[#1a1a1a] mb-3 md:mb-4">
                                    {blog.title}
                                </h3>

                                <p className="font-body text-[1rem] leading-relaxed text-[#555555] mb-4 line-clamp-2 md:line-clamp-3">
                                    {blog.description}
                                </p>

                                <div className="flex items-center gap-3 text-[0.875rem] text-[#888888] font-body mb-6 md:mb-8">
                                    <span>{blog.category}</span>
                                    <span className="w-px h-3 bg-[#e0e0e0]"></span>
                                    <span>{blog.date}</span>
                                </div>

                                <a href={`/blog/${blog.id}`} className="inline-flex items-center gap-2 px-5 py-2 font-body text-[0.875rem] font-medium text-[#1a1a1a] bg-transparent border border-[#e0e0e0] rounded-full hover:border-[#1a1a1a] transition-colors group/btn mt-auto">
                                    Read blog
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-[#888888] group-hover/btn:text-[#1a1a1a]" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
