import { useState } from 'react';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';

export function AssessmentPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        farmName: '',
        farmSize: '',
        wasteType: '',
        currentEnergy: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center bg-[#06402b] px-4">
                <div className="text-center max-w-[500px]">
                    <div className="w-20 h-20 flex items-center justify-center bg-[#c0ff75] rounded-full mx-auto mb-6">
                        <Check className="w-10 h-10 text-[#1a1a1a]" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-white mb-4">
                        Thank You!
                    </h2>
                    <p className="font-body text-lg text-white/80 mb-8">
                        Your assessment request has been submitted. Our team will contact you within 24-48 hours.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors"
                    >
                        Back to Home
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#06402b] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="max-w-[800px]">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full font-body text-xs font-medium tracking-wider text-white mb-6">
                            <img src="/what-we-do-icon.svg" alt="" className="w-4 h-4 invert" />
                            FREE ASSESSMENT
                        </span>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl md:text-6xl font-medium text-white leading-[1.1] mb-6">
                            Get Your Free Energy Assessment
                        </h1>

                        {/* Description */}
                        <p className="font-body text-lg text-white/80 leading-relaxed max-w-[600px]">
                            Discover how much energy your farm can generate from organic waste.
                            Our experts will analyze your situation and provide a customized recommendation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="pt-[var(--spacing-section-pt-mobile)] md:pt-[var(--spacing-section-pt-desktop)] pb-[var(--spacing-section-pb-mobile)] md:pb-[var(--spacing-section-pb-desktop)] px-4 md:px-8 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                            placeholder="+254 700 000 000"
                                        />
                                    </div>

                                    {/* Farm Name */}
                                    <div>
                                        <label htmlFor="farmName" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                            Farm/Business Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="farmName"
                                            name="farmName"
                                            value={formData.farmName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                            placeholder="Green Valley Farm"
                                        />
                                    </div>

                                    {/* Farm Size */}
                                    <div>
                                        <label htmlFor="farmSize" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                            Farm Size (acres)
                                        </label>
                                        <input
                                            type="text"
                                            id="farmSize"
                                            name="farmSize"
                                            value={formData.farmSize}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                            placeholder="50"
                                        />
                                    </div>

                                    {/* Waste Type */}
                                    <div>
                                        <label htmlFor="wasteType" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                            Primary Waste Type *
                                        </label>
                                        <select
                                            id="wasteType"
                                            name="wasteType"
                                            value={formData.wasteType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                        >
                                            <option value="">Select waste type</option>
                                            <option value="cow-dung">Cow Dung</option>
                                            <option value="poultry">Poultry Litter</option>
                                            <option value="pig">Pig Waste</option>
                                            <option value="food-waste">Food Waste</option>
                                            <option value="crop-residue">Crop Residue</option>
                                            <option value="mixed">Mixed Organic Waste</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Current Energy */}
                                <div>
                                    <label htmlFor="currentEnergy" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                        Current Monthly Energy Bill (optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="currentEnergy"
                                        name="currentEnergy"
                                        value={formData.currentEnergy}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                                        placeholder="e.g., KES 50,000"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block font-body text-sm font-medium text-[#1a1a1a] mb-2">
                                        Additional Information
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-[#f5f5f0] border border-[#e0e0e0] rounded-[4px] font-body text-[#1a1a1a] placeholder:text-[#888888] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                                        placeholder="Tell us more about your energy needs and goals..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-sm text-[#1a1a1a] bg-[#c0ff75] rounded-full hover:bg-[#d4ff9e] transition-colors group"
                                >
                                    Submit Assessment Request
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#f5f5f0] rounded-[4px] p-6 sticky top-32">
                                <h3 className="font-heading text-xl font-medium text-[#1a1a1a] mb-6">
                                    What Happens Next?
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        'Our team reviews your information',
                                        'We schedule a call to discuss your needs',
                                        'We conduct an on-site assessment',
                                        'You receive a detailed proposal',
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 flex items-center justify-center bg-[#c0ff75] rounded-full text-sm font-medium text-[#1a1a1a] flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <p className="font-body text-[#555555]">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-[#e0e0e0] mt-8 pt-8">
                                    <h4 className="font-heading text-lg font-medium text-[#1a1a1a] mb-4">
                                        Contact Us Directly
                                    </h4>
                                    <div className="space-y-3">
                                        <a href="tel:+254700000000" className="flex items-center gap-3 text-[#555555] hover:text-[#1a1a1a] transition-colors">
                                            <Phone className="w-5 h-5" />
                                            <span className="font-body">+254 700 000 000</span>
                                        </a>
                                        <a href="mailto:info@biogax.com" className="flex items-center gap-3 text-[#555555] hover:text-[#1a1a1a] transition-colors">
                                            <Mail className="w-5 h-5" />
                                            <span className="font-body">info@biogax.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
