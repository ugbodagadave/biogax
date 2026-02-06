import { Copy } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { getAuthorById } from '../data/authors';
import type { BlogPost, ContentBlock } from '../data/blogs';

interface BlogWriteupProps {
    blog: BlogPost;
}

function renderContentBlock(block: ContentBlock, index: number) {
    switch (block.type) {
        case 'paragraph':
            return (
                <p key={index} className="font-body text-[1rem] leading-relaxed text-[#555555] mb-3">
                    {block.text}
                </p>
            );
        case 'heading':
            return (
                <h2 key={index} className="font-heading text-[1.5rem] md:text-[1.75rem] font-medium text-[#1a1a1a] mt-5 mb-2">
                    {block.text}
                </h2>
            );
        case 'image':
            return (
                <figure key={index} className="my-4">
                    <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full h-[280px] md:h-[320px] rounded-[4px] object-cover"
                        loading="lazy"
                    />
                </figure>
            );
        case 'quote':
            return (
                <blockquote key={index} className="my-4 pl-6 border-l-4 border-[#c0ff75]">
                    <p className="font-heading text-[1.125rem] md:text-[1.25rem] italic text-[#333333] leading-relaxed mb-2">
                        "{block.text}"
                    </p>
                    <footer className="font-body text-[0.875rem] text-[#555555]">
                        — {block.author}, <span className="text-[#888888]">{block.role}</span>
                    </footer>
                </blockquote>
            );
        case 'list':
            return (
                <ul key={index} className="my-3 pl-6 space-y-1">
                    {block.items.map((item, i) => (
                        <li key={i} className="font-body text-[1rem] text-[#555555] list-disc">
                            {item}
                        </li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
}

export function BlogWriteup({ blog }: BlogWriteupProps) {
    const author = getAuthorById(blog.authorId);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    if (!author) {
        return null;
    }

    return (
        <article className="bg-white">
            {/* Header Section - Reduced spacing */}
            <header className="pt-28 md:pt-32 pb-4 md:pb-6 px-4 md:px-8">
                <div className="max-w-[700px] mx-auto text-center">
                    {/* Category & Date */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-white border border-[#e0e0e0] rounded-full font-body text-xs font-medium text-[#1a1a1a]">
                            {blog.category}
                        </span>
                        <span className="font-body text-sm text-[#888888]">
                            {blog.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-heading text-[2rem] md:text-[2.75rem] font-medium leading-[1.1] tracking-tight text-[#1a1a1a] mb-4">
                        {blog.title}
                    </h1>

                    {/* Author Info */}
                    <div className="flex items-center justify-center gap-3">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={author.image} alt={author.name} />
                            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <p className="font-body text-sm font-medium text-[#1a1a1a]">
                                {author.name}
                            </p>
                            <p className="font-body text-xs text-[#888888]">
                                {author.role}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Headline Image */}
            <div className="px-4 md:px-8 mb-6">
                <div className="max-w-[900px] mx-auto">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full aspect-[16/9] object-cover rounded-[4px]"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 md:px-8 pb-6">
                <div className="max-w-[700px] mx-auto">
                    {blog.contentBlocks.map((block, index) => renderContentBlock(block, index))}
                </div>
            </div>

            {/* Footer Section */}
            <footer className="px-4 md:px-8 pb-0">
                <div className="max-w-[700px] mx-auto">
                    <div className="border-t border-[#e0e0e0] pt-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            {/* Author Info */}
                            <div className="flex items-center gap-3">
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={author.image} alt={author.name} />
                                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-body text-sm font-medium text-[#1a1a1a]">
                                        {author.name}
                                    </p>
                                    <p className="font-body text-xs text-[#888888]">
                                        {author.role}
                                    </p>
                                </div>
                            </div>

                            {/* Copy Link Button */}
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleCopyLink}
                                className="rounded-full px-4 gap-2 self-start sm:self-center"
                            >
                                <Copy className="w-4 h-4" />
                                Copy link
                            </Button>
                        </div>

                        {/* Author Bio */}
                        <p className="font-body text-sm text-[#555555] mt-4 leading-relaxed">
                            {author.bio}
                        </p>
                    </div>
                </div>
            </footer>
        </article>
    );
}
