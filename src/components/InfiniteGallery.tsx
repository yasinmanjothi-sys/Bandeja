"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/hero-carousel/Screenshot 2026-02-11 at 20.49.55.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.50.21.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.50.40.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.51.01.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.51.20.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.51.37.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.51.57.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.52.21.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.52.41.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.53.18.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.53.57.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.54.20.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.54.44.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.55.03.png",
    "/hero-carousel/Screenshot 2026-02-11 at 20.56.13.png",
];

// Duplicate images to create seamless loop
const galleryImages = [...images, ...images];

export default function InfiniteGallery() {
    return (
        <section className="w-full overflow-hidden bg-burgundy border-y border-white/5 relative z-10 py-12">
            <motion.div
                className="flex gap-6"
                animate={{ x: "-50%" }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ width: "fit-content" }}
            >
                {galleryImages.map((src, index) => (
                    <div key={index} className="relative w-[300px] h-[200px] md:w-[400px] md:h-[280px] flex-shrink-0 transition-transform duration-500 hover:scale-[1.02]">
                        <Image
                            src={src}
                            alt={`Bandeja Atmosphere ${index}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 300px, 400px"
                        />
                        {/* Overlay for subtle depth */}
                        <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity duration-300 hover:opacity-0" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
