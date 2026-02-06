import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';

const categories = ['All Blog', 'Clean Energy', 'Farming Tips', 'Case Studies', 'Soil Health'];

export function BlogsPage() {
    const [activeCategory, setActiveCategory] = useState('All Blog');

    const filteredBlogs = activeCategory === 'All Blog'
        ? blogsData
        : blogsData.filter(blog => blog.category === activeCategory);

    return (
        <>
            {/* Header Section */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-[#f5f5f0]">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-medium text-[#1a1a1a] leading-[1.1] mb-6">
                        News & Insight
                    </h1>
                    <p className="font-body text-lg text-[#555555] leading-relaxed max-w-[600px] mx-auto">
                        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="flex items-center gap-6 md:gap-8 overflow-x-auto py-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`font-body text-sm whitespace-nowrap pb-2 border-b-2 transition-colors ${activeCategory === category
                                    ? 'text-[#1a1a1a] border-[#1a1a1a] font-medium'
                                    : 'text-[#888888] border-transparent hover:text-[#1a1a1a]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        {filteredBlogs.map((blog) => (
                            <article key={blog.id} className="flex flex-col group">
                                {/* Image */}
                                <div className="relative w-full aspect-[16/10] rounded-[4px] overflow-hidden mb-6">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1">
                                    <h3 className="font-heading text-xl md:text-2xl font-medium text-[#1a1a1a] mb-3">
                                        {blog.title}
                                    </h3>
                                    <p className="font-body text-[#555555] leading-relaxed mb-4 line-clamp-2">
                                        {blog.description}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm text-[#888888] font-body mb-6">
                                        <span>{blog.category}</span>
                                        <span className="w-px h-3 bg-[#e0e0e0]"></span>
                                        <span>{blog.date}</span>
                                    </div>

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
        </>
    );
}
