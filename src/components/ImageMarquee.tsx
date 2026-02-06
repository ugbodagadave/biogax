import { motion } from 'framer-motion';

interface ImageMarqueeProps {
    images: string[];
}

export function ImageMarquee({ images }: ImageMarqueeProps) {
    // Duplicate images 4 times to ensure seamless loop on wide screens
    // and prevent gaps when the first set scrolls out
    const duplicatedImages = [...images, ...images, ...images, ...images];

    return (
        <div className="w-full overflow-hidden py-4">
            <motion.div
                className="flex gap-4 w-max"
                animate={{
                    x: '-25%', // Move by one set of images (1/4 of total)
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 50, // Slower speed
                        ease: 'linear',
                    },
                }}
            >
                {duplicatedImages.map((image, index) => (
                    <div
                        key={`${image}-${index}`}
                        className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] flex-shrink-0 rounded-[4px] overflow-hidden"
                    >
                        <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
