import sharp from 'sharp';
import { unlink } from 'fs/promises';

const conversions = [
    {
        input: 'representation-ecology-sustainability (1).jpg',
        output: 'public/what-we-do-1.webp'
    },
    {
        input: 'zoe-richardson-siD6uufCyt8-unsplash.jpg',
        output: 'public/what-we-do-2.webp'
    },
    {
        input: 'jonas-koel-nnxWQZTmoxQ-unsplash.jpg',
        output: 'public/what-we-do-3.webp'
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
