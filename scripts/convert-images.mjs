import sharp from 'sharp';
import { unlink } from 'fs/promises';

const conversions = [
    {
        input: 'sven-mieke-fteR0e2BzKo-unsplash.jpg',
        output: 'public/benefit-site-audit.webp'
    },
    {
        input: 'troy-mortier-tq3ay5TKqzE-unsplash.jpg',
        output: 'public/benefit-construction.webp'
    },
    {
        input: 'encata-pd-ZmDk8tXQRS0-unsplash.jpg',
        output: 'public/benefit-system-design.webp'
    },
    {
        input: 'ricardo-gomez-angel-MagdWoazARo-unsplash.jpg',
        output: 'public/benefit-installation.webp'
    },
    {
        input: 'simone-hutsch-XTyNwgCYWTk-unsplash.jpg',
        output: 'public/project-savannah.webp'
    },
    {
        input: 'declan-sun-nk90n_MEph8-unsplash.jpg',
        output: 'public/blog-biogas-science.webp'
    },
    {
        input: 'melissa-askew-y4xZxzN754M-unsplash.jpg',
        output: 'public/blog-biofertilizer.webp'
    },
    {
        input: 'jason-mavrommatis-kufsOr1-F-s-unsplash.jpg',
        output: 'public/services-hero.webp'
    },
    {
        input: 'ari-shojaei-9ZsTW8KH5CE-unsplash.jpg',
        output: 'public/projects-hero.webp'
    },
    // New blog images
    {
        input: 'blogimages/auroom-wellness-50wtGumkZIA-unsplash.jpg',
        output: 'public/blog-wellness.webp'
    },
    {
        input: 'blogimages/mathias-reding-4fVFi0ZLUIQ-unsplash.jpg',
        output: 'public/blog-farm-equipment.webp'
    },
    {
        input: 'blogimages/melissa-laun-wZ7DKdf1Hsk-unsplash.jpg',
        output: 'public/blog-solar-panels.webp'
    },
    {
        input: 'blogimages/michal-jagodzinski-dy1TzH9Sujs-unsplash.jpg',
        output: 'public/blog-biogas-plant.webp'
    },
    {
        input: 'blogimages/sergei-wing-fFRtvdWqyLk-unsplash.jpg',
        output: 'public/blog-green-field.webp'
    },
    {
        input: 'blogimages/zoe-richardson-m1eKjNDaf-4-unsplash.jpg',
        output: 'public/blog-crop-field.webp'
    }
];

async function convertImages() {
    for (const { input, output } of conversions) {
        console.log(`Converting ${input} -> ${output}...`);

        try {
            await sharp(input)
                .webp({ quality: 75, effort: 6 }) // Reduced quality slightly for better compression, higher effort
                .resize({ width: 1200, withoutEnlargement: true }) // Reduced generic width since they are side images
                .toFile(output);

            console.log(`  ✓ Converted successfully`);

            // Delete original file
            await unlink(input);
            console.log(`  ✓ Deleted original`);
        } catch (error) {
            console.error(`  ✗ Error converting ${input}:`, error);
        }
    }

    console.log('\nAll images converted and originals deleted!');
}

convertImages().catch(console.error);
