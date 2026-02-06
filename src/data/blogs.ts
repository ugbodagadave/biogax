export type ContentBlock =
    | { type: 'paragraph'; text: string }
    | { type: 'heading'; text: string }
    | { type: 'image'; src: string; alt: string }
    | { type: 'quote'; text: string; author: string; role: string }
    | { type: 'list'; items: string[] };

export interface BlogPost {
    id: number;
    slug: string;
    image: string;
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    authorId: string;
    contentBlocks: ContentBlock[];
}

export const blogsData: BlogPost[] = [
    {
        id: 1,
        slug: 'science-behind-biogas',
        image: '/blog-biogas-science.webp',
        title: 'The Science Behind Biogas',
        description: 'Biogas is no longer just a buzzword—it\'s becoming a real game-changer for small-scale farmers. Across rural Africa, agricultural communities are discovering how waste can be turned into wealth, powering homes, enriching soil, and unlocking new revenue streams.',
        category: 'General',
        date: 'Jan 28, 2025',
        readTime: '5 min read',
        authorId: 'adaora-okafor',
        contentBlocks: [
            { type: 'paragraph', text: 'Biogas is no longer just a buzzword—it\'s becoming a real game-changer for small-scale farmers. Across rural Africa, agricultural communities are discovering how waste can be turned into wealth, powering homes, enriching soil, and unlocking new revenue streams. Here\'s how biogas is reshaping the future of farming.' },
            { type: 'heading', text: 'Turning Farm Waste into a Valuable Resource' },
            { type: 'paragraph', text: 'Livestock manure and crop residue are often seen as waste to be discarded. But through anaerobic digestion, these materials are now being converted into two powerful resources: clean cooking gas and biofertilizer.' },
            { type: 'paragraph', text: 'One farmer in Kaduna, Nigeria, reduced his reliance on firewood by 80% after installing a basic biogas digester. Not only did this lower household fuel costs, but it also eliminated daily firewood collection—a task that used to take over two hours each day.' },
            { type: 'image', src: '/blog-farm-equipment.webp', alt: 'Farm equipment used in biogas production' },
            { type: 'quote', text: 'Renewable energy is not just about electricity—it\'s about empowering communities to be self-sufficient, turning what was once waste into a resource that drives economic growth.', author: 'Adaora Okafor', role: 'Chief Executive Officer' },
            { type: 'heading', text: 'Improving Soil and Crop Yield' },
            { type: 'paragraph', text: 'Biogas doesn\'t stop at energy. The byproduct, known as digestate, is a nutrient-rich biofertilizer. It improves soil structure, boosts microbial activity, and increases crop productivity without the long-term degradation caused by synthetic fertilizers.' },
            { type: 'paragraph', text: 'Farmers in Kenya using biofertilizer have reported a 15–25% increase in maize yield in just one growing season.' },
            { type: 'heading', text: 'Cutting Energy Costs and Carbon Emissions' },
            { type: 'paragraph', text: 'With fuel prices rising, small farms can no longer afford diesel generators or imported LPG. A biogas system allows them to generate renewable energy on-site, using waste they already produce.' },
            { type: 'paragraph', text: 'A pilot program in Tanzania saw households cut monthly energy costs by over 60%, while reducing methane emissions by capturing and repurposing them.' },
            { type: 'image', src: '/blog-solar-panels.webp', alt: 'Solar panels alongside biogas installation' },
            { type: 'heading', text: 'Generating New Income Streams' },
            { type: 'paragraph', text: 'Some farms are scaling up their digesters and selling excess gas or fertilizer to nearby communities. This creates a circular economy where energy and nutrients flow back into the land and local market.' },
            { type: 'paragraph', text: 'In Uganda, a smallholder cooperative installed a shared system and now sells biofertilizer to nearby banana growers, generating up to $300/month in supplemental income.' },
            { type: 'paragraph', text: 'A Path to Energy Independence and Climate Resilience' },
            { type: 'paragraph', text: 'Biogas empowers farmers to become more self-sufficient and less vulnerable to climate disruptions or supply chain shocks. As climate change affects rainfall and crop cycles, having a consistent energy and fertilizer source helps build resilience.' },
            { type: 'heading', text: 'Key Takeaways:' },
            {
                type: 'list', items: [
                    'Biogas reduces reliance on firewood, diesel, and chemical fertilizers',
                    'Biofertilizer improves yields while restoring soil health',
                    'Energy costs can drop by more than half',
                    'Small farms can generate new income from excess fertilizer or gas',
                    'Biogas contributes to climate resilience and energy independence'
                ]
            },
            { type: 'heading', text: 'Conclusion' },
            { type: 'paragraph', text: 'Biogas is more than a renewable energy solution—it\'s a practical, cost-effective tool that empowers farmers to do more with what they already have. From reducing fuel expenses to improving soil health and creating new revenue streams, the impact is clear. As more small farms adopt this technology, the agricultural landscape in Africa is being reshaped—cleaner, more resilient, and future-ready.' },
        ],
    },
    {
        id: 2,
        slug: 'biofertilizer-soil-health',
        image: '/blog-soil-health.webp',
        title: 'How Biofertilizer Can Restore Soil Health Naturally',
        description: 'Chemical fertilizers degrade soil over time. Discover how biogas byproducts offer a sustainable, nutrient-rich alternative that regenerates your land.',
        category: 'Clean Energy',
        date: 'Jan 28, 2025',
        readTime: '7 min read',
        authorId: 'grace-adeyemi',
        contentBlocks: [
            { type: 'paragraph', text: 'For decades, farmers have relied on synthetic fertilizers to boost crop yields. But this short-term gain comes at a long-term cost: depleted soil, reduced biodiversity, and increasing dependence on expensive chemical inputs.' },
            { type: 'heading', text: 'The Hidden Cost of Chemical Fertilizers' },
            { type: 'paragraph', text: 'Synthetic fertilizers provide quick nutrient boosts but don\'t address the soil\'s underlying health. Over time, they kill beneficial microorganisms, degrade soil structure, and lead to nutrient runoff that pollutes waterways.' },
            { type: 'paragraph', text: 'Studies show that after 10 years of continuous synthetic fertilizer use, soil organic matter can decline by up to 30%, making land less productive and more vulnerable to erosion.' },
            { type: 'image', src: '/blog-crop-field.webp', alt: 'Healthy crop field using biofertilizer' },
            { type: 'heading', text: 'What Makes Biofertilizer Different' },
            { type: 'paragraph', text: 'Biofertilizer—the digestate produced during biogas production—is rich in nitrogen, phosphorus, and potassium, but also contains beneficial microbes that restore soil life. Unlike synthetic options, it works with nature rather than against it.' },
            { type: 'quote', text: 'We cannot solve our problems with the same thinking we used when we created them. The soil needs regeneration, not just nutrition.', author: 'Grace Adeyemi', role: 'Director of Sustainability' },
            { type: 'heading', text: 'Real Results from African Farms' },
            { type: 'paragraph', text: 'Farmers who switched to biofertilizer have seen remarkable improvements. In Ghana, cassava farmers reported 20% higher yields in the first year. In Ethiopia, coffee growers noticed improved plant health and reduced pest problems.' },
            {
                type: 'list', items: [
                    'Improved water retention in sandy soils',
                    'Better root development and nutrient uptake',
                    'Reduced need for pesticides due to healthier plants',
                    'Lower input costs over time as soil regenerates'
                ]
            },
            { type: 'heading', text: 'Making the Switch' },
            { type: 'paragraph', text: 'Transitioning to biofertilizer doesn\'t require abandoning existing practices overnight. Many farmers start by blending biofertilizer with reduced amounts of synthetic fertilizer, gradually shifting as soil health improves.' },
            { type: 'paragraph', text: 'The key is consistency—regular application of biofertilizer builds soil organic matter and microbial communities over time, creating a virtuous cycle of improving productivity.' },
            { type: 'heading', text: 'Conclusion' },
            { type: 'paragraph', text: 'Biofertilizer represents a return to farming\'s fundamentals: working with natural systems rather than overriding them. For farmers seeking long-term sustainability and reduced costs, the digestate from biogas production offers a proven path forward.' },
        ],
    },
    {
        id: 3,
        slug: 'maximizing-farm-efficiency',
        image: '/services-hero.webp',
        title: 'Maximizing Farm Efficiency with Integrated Biogas Systems',
        description: 'Learn practical strategies for integrating biogas technology into your daily farm operations to reduce waste, lower energy costs, and boost overall productivity.',
        category: 'Farming Tips',
        date: 'Feb 12, 2025',
        readTime: '6 min read',
        authorId: 'samuel-otieno',
        contentBlocks: [
            { type: 'paragraph', text: 'Running a farm efficiently means making the most of every resource. Biogas technology offers a unique opportunity to close the loop on farm operations—turning waste into energy and fertilizer while reducing costs across the board.' },
            { type: 'heading', text: 'Understanding the Integrated Approach' },
            { type: 'paragraph', text: 'An integrated biogas system isn\'t just about installing a digester. It\'s about rethinking how waste, energy, and nutrients flow through your farm. When designed well, every output becomes an input for something else.' },
            { type: 'image', src: '/blog-biogas-plant.webp', alt: 'Integrated biogas plant on a farm' },
            { type: 'heading', text: 'Step 1: Assess Your Waste Streams' },
            { type: 'paragraph', text: 'Before installing a system, catalog all organic waste your farm produces: livestock manure, crop residues, food processing waste, and even kitchen scraps. Understanding the volume and composition of your feedstock determines the right digester size.' },
            {
                type: 'list', items: [
                    'Cattle manure: High methane potential, consistent production',
                    'Poultry litter: Very high nitrogen, mix with other materials',
                    'Crop residues: Good supplement, may need chopping',
                    'Food waste: Excellent energy potential but variable'
                ]
            },
            { type: 'heading', text: 'Step 2: Right-Size Your System' },
            { type: 'paragraph', text: 'A common mistake is building too large or too small. Work with experienced installers to match your digester capacity to your actual waste production and energy needs. An oversized system wastes money; an undersized one can\'t keep up.' },
            { type: 'quote', text: 'The best biogas system is one that fits seamlessly into your existing operations. It should feel like a natural extension of your farm, not a burden.', author: 'Samuel Otieno', role: 'Director of Engineering' },
            { type: 'heading', text: 'Step 3: Integrate Energy Use' },
            { type: 'paragraph', text: 'Plan how you\'ll use the biogas produced. Cooking and heating are the most direct applications. More advanced setups can power generators for electricity or fuel modified engines for farm equipment.' },
            { type: 'heading', text: 'Step 4: Close the Nutrient Loop' },
            { type: 'paragraph', text: 'Don\'t forget the digestate! This nutrient-rich byproduct should flow directly back to your fields. Many farms set up simple gravity-fed irrigation systems to distribute biofertilizer efficiently.' },
            { type: 'heading', text: 'Measuring Success' },
            { type: 'paragraph', text: 'Track your results: fuel cost savings, fertilizer purchases avoided, crop yield changes, and time saved on waste management. Most farms see payback within 2-4 years, with ongoing savings for decades after.' },
            { type: 'heading', text: 'Conclusion' },
            { type: 'paragraph', text: 'Integrated biogas systems represent the future of sustainable farming. By treating waste as a resource and energy as something you produce rather than purchase, you build a more resilient and profitable operation.' },
        ],
    },
    {
        id: 4,
        slug: 'savannah-case-study',
        image: '/project-savannah.webp',
        title: 'Case Study: Savannah Agro-Processing Success',
        description: 'See how Savannah Agro-Processing slashed their energy bills by 60% and eliminated waste disposal costs by installing a custom Biogax system.',
        category: 'Case Studies',
        date: 'Feb 15, 2025',
        readTime: '8 min read',
        authorId: 'magnus-sorensen',
        contentBlocks: [
            { type: 'paragraph', text: 'When Savannah Agro-Processing approached us in early 2024, they faced a common challenge: rising energy costs and expensive waste disposal were eating into their margins. Their cassava processing facility produced tons of organic waste daily with no profitable outlet.' },
            { type: 'heading', text: 'The Challenge' },
            { type: 'paragraph', text: 'Savannah\'s facility processed over 50 tons of cassava weekly, generating significant quantities of peels, fibers, and wastewater. Previously, they paid for trucks to haul waste to distant disposal sites—an expense that topped $2,000 monthly.' },
            { type: 'paragraph', text: 'Meanwhile, their energy bills for powering processing equipment and heating drying chambers averaged $3,500 per month, making profitability increasingly difficult.' },
            { type: 'image', src: '/blog-green-field.webp', alt: 'Savannah Agro-Processing facility grounds' },
            { type: 'heading', text: 'Our Solution' },
            { type: 'paragraph', text: 'We designed a 150 cubic meter digester system tailored to handle cassava waste specifically. The system includes pre-treatment to optimize the waste for digestion and a combined heat and power (CHP) unit to generate both electricity and process heat.' },
            {
                type: 'list', items: [
                    'Custom pre-treatment chamber for cassava waste',
                    '150m³ insulated digester with automated mixing',
                    '30kW combined heat and power generator',
                    'Digestate separation and storage system',
                    'Full SCADA monitoring and control'
                ]
            },
            { type: 'heading', text: 'Implementation Timeline' },
            { type: 'paragraph', text: 'The project took 16 weeks from groundbreaking to full operation. Our team worked closely with Savannah\'s staff to ensure minimal disruption to ongoing operations during installation.' },
            { type: 'quote', text: 'What used to be our biggest expense—waste disposal—is now generating value. The biogas powers our facility and the digestate goes back to farmers who supply us with cassava.', author: 'James Mensah', role: 'Operations Director, Savannah Agro' },
            { type: 'heading', text: 'Results After 12 Months' },
            { type: 'paragraph', text: 'The numbers speak for themselves. Savannah Agro-Processing achieved remarkable improvements across all metrics:' },
            {
                type: 'list', items: [
                    '60% reduction in energy costs (saving $2,100/month)',
                    '100% elimination of waste disposal costs (saving $2,000/month)',
                    'New revenue stream from selling excess digestate ($500/month)',
                    'Total monthly benefit: $4,600',
                    'Projected ROI: 28 months'
                ]
            },
            { type: 'heading', text: 'Environmental Impact' },
            { type: 'paragraph', text: 'Beyond the financial benefits, Savannah\'s system prevents an estimated 180 tons of CO2-equivalent emissions annually by capturing methane that would otherwise be released from decomposing waste.' },
            { type: 'heading', text: 'Conclusion' },
            { type: 'paragraph', text: 'Savannah Agro-Processing demonstrates what\'s possible when agro-industrial facilities embrace biogas technology. Their success has inspired three neighboring processors to begin feasibility assessments for similar installations.' },
        ],
    },
    {
        id: 5,
        slug: 'soil-composition-yields',
        image: '/benefit-system-design.webp',
        title: 'Understanding Soil Composition for Better Yields',
        description: 'Healthy soil is the foundation of a successful harvest. We explore how organic amendments from biogas digestion can improve soil structure and water retention.',
        category: 'Soil Health',
        date: 'Feb 20, 2025',
        readTime: '5 min read',
        authorId: 'elena-martinez',
        contentBlocks: [
            { type: 'paragraph', text: 'Every successful harvest begins beneath the surface. Soil isn\'t just dirt—it\'s a living ecosystem that determines whether your crops thrive or struggle. Understanding what\'s in your soil and how to improve it is the foundation of sustainable farming.' },
            { type: 'heading', text: 'The Three Components of Healthy Soil' },
            { type: 'paragraph', text: 'Productive agricultural soil contains three essential elements in balance: mineral particles (sand, silt, clay), organic matter, and a thriving community of microorganisms. When any of these is lacking, plant health suffers.' },
            {
                type: 'list', items: [
                    'Sand: Provides drainage but holds few nutrients',
                    'Silt: Retains moisture and nutrients moderately well',
                    'Clay: Holds nutrients but can become compacted',
                    'Organic matter: The key to balancing all three'
                ]
            },
            { type: 'heading', text: 'Why Organic Matter Matters Most' },
            { type: 'paragraph', text: 'Organic matter acts as the glue that holds soil together while creating space for air and water. It feeds beneficial microbes, stores carbon, and slowly releases nutrients as it breaks down.' },
            { type: 'paragraph', text: 'Research shows that increasing soil organic matter by just 1% can improve water-holding capacity by 20,000 gallons per acre—a critical advantage during dry spells.' },
            { type: 'image', src: '/blog-wellness.webp', alt: 'Close-up of healthy soil composition' },
            { type: 'quote', text: 'The soil is the great connector of our lives, the source and destination of all. Understanding it is understanding ourselves.', author: 'Wendell Berry', role: 'Author & Farmer' },
            { type: 'heading', text: 'How Digestate Rebuilds Soil' },
            { type: 'paragraph', text: 'The digestate from biogas production is uniquely valuable for soil improvement. Unlike raw manure, it\'s been partially broken down, making nutrients more immediately available while still contributing to long-term organic matter.' },
            { type: 'paragraph', text: 'Studies comparing digestate to synthetic fertilizers show that while immediate nutrient delivery may be similar, digestate-treated soils show significantly higher microbial activity and better structure within two years.' },
            { type: 'heading', text: 'Testing Your Soil' },
            { type: 'paragraph', text: 'Before making amendments, know what you\'re working with. Simple soil tests can reveal pH, nutrient levels, and organic matter percentage. Many agricultural extension services offer free or low-cost testing.' },
            {
                type: 'list', items: [
                    'Test every 2-3 years to track changes',
                    'Sample from multiple locations in each field',
                    'Test at the same time of year for consistency',
                    'Keep records to observe trends over time'
                ]
            },
            { type: 'heading', text: 'Conclusion' },
            { type: 'paragraph', text: 'Building healthy soil is a long-term investment that pays dividends for generations. By understanding your soil\'s composition and using organic amendments like biogas digestate, you create the foundation for sustainable productivity that improves year after year.' },
        ],
    },
];
