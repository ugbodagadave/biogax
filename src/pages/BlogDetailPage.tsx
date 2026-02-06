import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { BlogWriteup } from '../components/BlogWriteup';
import { RelatedBlogs } from '../components/RelatedBlogs';

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

    return (
        <>
            <BlogWriteup blog={blog} />
            <RelatedBlogs currentBlog={blog} />
        </>
    );
}
