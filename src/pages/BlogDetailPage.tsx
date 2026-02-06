import { ArrowRight, ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { blogsData } from '../data/blogs';

export function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f0] px-4">
                <h1 className="font-heading text-4xl font-medium text-[#1a1a1a] mb-4">Blog Post Not Found</h1>
                <p className="font-body text-[#555555] mb-8">The blog post you're looking for doesn't exist.</p>
                <Link
                    to="/blogs"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-body text-sm font-medium text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>
            </section>
        );
    }

    // Get related posts (excluding current)
    const relatedPosts = blogsData.filter((b) => b.id !== blog.id).slice(0, 2);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#06402b] overflow-hidden">
                <div className="max-w-[900px] mx-auto px-4 md:px-8">
                    {/* Back Link */}
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Category Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full font-body text-xs font-medium tracking-wider text-white mb-6">
                        {blog.category}
                    </span>

                    {/* Headline */}
                    <h1 className="font-heading text-3xl md:text-5xl font-medium text-white leading-[1.1] mb-6">
                        {blog.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-white/70">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span className="font-body text-sm">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-body text-sm">{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="font-body text-sm">{blog.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-4 md:px-8 -mt-8 relative z-10">
                <div className="max-w-[900px] mx-auto">
                    <div className="rounded-[4px] overflow-hidden">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full aspect-[16/9] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[700px] mx-auto">
                    <article className="prose prose-lg font-body text-[#333333]">
                        <p className="lead text-xl text-[#555555] mb-8">
                            {blog.description}
                        </p>

                        <h2>Introduction</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <h2>Understanding the Process</h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <h2>Key Benefits</h2>
                        <ul>
                            <li>Renewable energy source from organic waste</li>
                            <li>Reduced carbon emissions and environmental impact</li>
                            <li>Cost savings on energy bills</li>
                            <li>Valuable byproducts for soil enhancement</li>
                        </ul>

                        <h2>Conclusion</h2>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                        </p>
                    </article>

                    {/* Share & Tags */}
                    <div className="border-t border-[#e0e0e0] mt-12 pt-8">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="font-body text-sm text-[#888888]">Tags:</span>
                            <div className="flex flex-wrap gap-2">
                                {['Biogas', 'Sustainability', 'Agriculture', 'Clean Energy'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-[#f5f5f0] rounded-full font-body text-xs text-[#555555]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#f5f5f0]">
                    <div className="max-w-[1400px] mx-auto">
                        <h2 className="font-heading text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-8">
                            Related Posts
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blogs/${relatedPost.slug}`}
                                    className="flex flex-col md:flex-row gap-6 bg-white rounded-[4px] p-4 hover:shadow-lg transition-shadow group"
                                >
                                    <div className="w-full md:w-48 aspect-[16/9] md:aspect-square rounded-[4px] overflow-hidden flex-shrink-0">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-body text-sm text-[#888888] mb-2">
                                            {relatedPost.date} • {relatedPost.readTime}
                                        </p>
                                        <h3 className="font-heading text-lg font-medium text-[#1a1a1a] mb-2">
                                            {relatedPost.title}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1a1a1a] group-hover:text-[#06402b]">
                                            Read More
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#06402b]">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="font-heading text-3xl md:text-5xl font-medium text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="font-body text-lg text-white/80 mb-10">
                        Get a free energy assessment and discover how biogas can work for your farm.
                    </p>
                    <Link
                        to="/assessment"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group"
                    >
                        Free Energy Assessment
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </>
    );
}
