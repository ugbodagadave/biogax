import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import type { BlogPost } from '../data/blogs';

interface RelatedBlogsProps {
    currentBlog: BlogPost;
}

export function RelatedBlogs({ currentBlog }: RelatedBlogsProps) {
    // Filter blogs by same category, exclude current blog, limit to 3
    const relatedBlogs = blogsData
        .filter((blog) => blog.category === currentBlog.category && blog.id !== currentBlog.id)
        .slice(0, 3);

    // If no blogs in same category, show other blogs
    const blogsToShow = relatedBlogs.length > 0
        ? relatedBlogs
        : blogsData.filter((blog) => blog.id !== currentBlog.id).slice(0, 3);

    if (blogsToShow.length === 0) {
        return null;
    }

    return (
        <section className="bg-white pt-8 md:pt-10 pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8">
            <div className="max-w-[700px] mx-auto">
                {/* Header with separator */}
                <div className="border-t border-[#e0e0e0] pt-6 mb-6">
                    <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-medium text-[#1a1a1a]">
                        Related Blogs
                    </h2>
                </div>

                {/* Blog List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {blogsToShow.map((blog) => (
                        <Link
                            key={blog.id}
                            to={`/blogs/${blog.slug}`}
                            className="flex items-start gap-3 group"
                        >
                            {/* Thumbnail */}
                            <div className="w-16 h-14 md:w-20 md:h-16 flex-shrink-0 rounded-[4px] overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-heading text-[0.9rem] md:text-[1rem] font-medium text-[#1a1a1a] leading-tight mb-1 flex items-center gap-1">
                                    <span className="line-clamp-2">{blog.title}</span>
                                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                                </h3>
                                <div className="flex items-center gap-1.5 font-body text-xs text-[#888888]">
                                    <Clock className="w-3 h-3" />
                                    <span>{blog.date}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
