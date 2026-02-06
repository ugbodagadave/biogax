import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const testimonials = [
    {
        quote: "Biogax transformed our dairy farm's waste management completely. We've cut energy costs by 60% and now produce enough power to run our entire milking operation. The installation was seamless and the ongoing support has been exceptional.",
        name: 'Cooper Geidt',
        avatar: '/team-1.webp',
        variant: 'light-green',
    },
    {
        quote: "The team's expertise in biogas systems is unmatched. From consultation to installation, they delivered exactly what we needed.",
        name: 'Maria',
        avatar: '/team-2.webp',
        variant: 'white',
    },
    {
        quote: "Our ROI exceeded expectations. The biogas plant paid for itself in just 18 months.",
        name: 'James Garry',
        avatar: '/team-3.webp',
        variant: 'white',
    },
    {
        quote: "Professional service from start to finish. Zero downtime in two years of operation.",
        name: 'Sabrina Kay',
        avatar: '/team-4.webp',
        variant: 'white',
    },
    {
        quote: "The biofertilizer output has improved our soil quality. We're seeing 25% higher crop yields.",
        name: 'Mercy Gomes',
        avatar: '/team-5.webp',
        variant: 'white',
    },
    {
        quote: "Clean energy and sustainable waste management.",
        name: 'Jason Roy',
        avatar: '/team-6.webp',
        variant: 'white',
    },
    {
        quote: "We were skeptical at first, but Biogax proved that renewable energy can be practical and profitable for farms of any size. The entire process from site assessment to final commissioning was handled professionally. Our energy bills have dropped significantly and we're now contributing to a cleaner environment. Highly recommend their solutions to any agricultural business.",
        name: 'Garry Bones',
        avatar: '/team-7.webp',
        variant: 'dark-green',
    },
];

export function ServicesTestimonials() {
    const getCardStyles = (variant: string) => {
        switch (variant) {
            case 'light-green':
                return 'bg-[#c0ff75] border-[#c0ff75] text-[#1a1a1a]';
            case 'dark-green':
                return 'bg-[#06402b] border-[#06402b] text-white';
            default:
                return 'bg-white border-[#e8e8e0] text-[#1a1a1a]';
        }
    };

    const getQuoteColor = (variant: string) => {
        return variant === 'dark-green' ? 'text-white' : 'text-[#1a1a1a]';
    };

    const getNameColor = (variant: string) => {
        return variant === 'dark-green' ? 'text-white/80' : 'text-[#555555]';
    };

    // Split testimonials into columns for masonry layout
    const column1 = testimonials.filter((_, i) => i === 0 || i === 1);
    const column2 = testimonials.filter((_, i) => i >= 2 && i <= 4);
    const column3 = testimonials.filter((_, i) => i === 5 || i === 6);

    const renderCard = (testimonial: typeof testimonials[0]) => (
        <Card
            key={testimonial.name}
            className={`${getCardStyles(testimonial.variant)} rounded-[4px] shadow-none`}
        >
            <CardContent className="flex flex-col gap-4">
                {/* Company Logo */}
                <img
                    src="/testimonials-logo.svg"
                    alt=""
                    className={`h-5 w-auto self-start ${testimonial.variant === 'dark-green' ? 'invert' : ''}`}
                />

                {/* Quote */}
                <p className={`font-heading text-lg md:text-xl leading-relaxed ${getQuoteColor(testimonial.variant)}`}>
                    "{testimonial.quote}"
                </p>

                {/* Avatar & Name */}
                <div className="flex items-center gap-3 mt-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className={`font-body text-sm ${getNameColor(testimonial.variant)}`}>
                        {testimonial.name}
                    </span>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-[#f5f5f0]">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#e8e8e0] rounded-full font-body text-xs font-medium tracking-wider text-[#1a1a1a] mb-6">
                        <img src="/badge-icon.svg" alt="" className="w-4 h-4" />
                        TESTIMONIALS
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-medium text-[#1a1a1a]">
                        Trusted by Leading <br className="hidden md:block" />
                        Agricultural Innovators
                    </h2>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        {column1.map(renderCard)}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        {column2.map(renderCard)}
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                        {column3.map(renderCard)}
                    </div>
                </div>
            </div>
        </section>
    );
}
