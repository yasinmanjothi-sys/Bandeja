"use client";

import Image from "next/image";

const galleryImages = [
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

export default function GallerySection() {
    return (
        <section className="bg-burgundy py-8 md:py-16 overflow-hidden">
            {/* 
                track-container:
                Use a negative margin or mask if you want to fade edges, 
                but here we just want a clean infinite scroll.
            */}
            <div className="relative w-full flex">

                {/* 
                  We render the set twice to ensure seamless looping.
                  Key changes:
                  - flex-nowrap: prevents wrapping
                  - animate-scroll: moves the entire track
                  - gap-4 md:gap-8: consistent spacing
                */}
                <div className="flex animate-scroll whitespace-nowrap">
                    {/* First Loop */}
                    <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
                        {galleryImages.map((src, index) => (
                            <div
                                key={`gallery-1-${index}`}
                                className="relative h-48 md:h-80 w-auto aspect-[3/4] flex-shrink-0 border-2 md:border-4 border-paper overflow-hidden"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 150px, 300px"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Loop (Exact Duplicate) */}
                    <div className="flex gap-4 md:gap-8 pr-4 md:pr-8" aria-hidden="true">
                        {galleryImages.map((src, index) => (
                            <div
                                key={`gallery-2-${index}`}
                                className="relative h-48 md:h-80 w-auto aspect-[3/4] flex-shrink-0 border-2 md:border-4 border-paper overflow-hidden"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 150px, 300px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
