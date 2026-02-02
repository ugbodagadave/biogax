import sharp from 'sharp';
import { unlink } from 'fs/promises';

const conversions = [
    {
        input: 'meric-tuna-fNlp-8iqSN8-unsplash.jpg',
        output: 'public/services-1.webp'
    },
    {
        input: 'close-up-metallic-wine-barrels-winery.jpg',
        output: 'public/services-2.webp'
    },
    {
        input: 'selective-focus-shot-person-wearing-gloves-holding-shredded-rubber-tires.jpg',
        output: 'public/services-3.webp'
    }
];

async function convertImages() {
    for (const { input, output } of conversions) {
        console.log(`Converting ${input} -> ${output}...`);

        await sharp(input)
            .webp({ quality: 85 })
            .resize({ width: 1920, withoutEnlargement: true })
            .toFile(output);

        console.log(`  ✓ Converted successfully`);

        // Delete original file
        await unlink(input);
        console.log(`  ✓ Deleted original`);
    }

    console.log('\nAll images converted and originals deleted!');
}

convertImages().catch(console.error);
