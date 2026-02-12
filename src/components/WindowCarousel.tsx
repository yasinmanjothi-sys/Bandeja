"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ZigZagPattern from "./ZigZagPattern";

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

export default function WindowCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full aspect-[3/4] mx-auto">
            {/* The Window Shape Container */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <clipPath id="window-arch" clipPathUnits="objectBoundingBox">
                        {/* Approximate Gothic Arch: 
                            Start bottom-left (0,1), up to (0, 0.4), 
                            Curve to top-center (0.5, 0),
                            Curve to right (1, 0.4),
                            Down to bottom-right (1, 1).
                        */}
                        <path d="M 0,1 L 0,0.4 C 0,0.1 0.5,0 0.5,0 C 0.5,0 1,0.1 1,0.4 L 1,1 Z" />
                    </clipPath>
                </defs>
            </svg>

            <div
                className="w-full h-full relative bg-burgundy/10 shadow-2xl"
                style={{ clipPath: "url(#window-arch)" }}
            >
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="Bandeja Atmosphere"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay for texture/consistency */}
                        <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply" />
                    </motion.div>
                </AnimatePresence>

                {/* Zig Zag Pattern Overlay - Inside clipped container */}
                <div className="absolute bottom-[20%] left-0 w-full h-8 z-30 pointer-events-none opacity-80">
                    <ZigZagPattern strokeColor="#E07A5F" />
                </div>
            </div>

            {/* Optional border outline to emphasize the window effect */}
            <div
                className="absolute inset-0 pointer-events-none border-[8px] border-paper z-20"
                style={{ clipPath: "url(#window-arch)" }}
            />
        </div>
    );
}
