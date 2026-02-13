"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-terracotta">
            {/* Video Background - Shadows on the Wall */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-60 mix-blend-multiply scale-125"
                >
                    <source src="/hero-2.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Texture Overlay for Wall Effect */}
            <div
                className="absolute inset-0 z-1 pointer-events-none mix-blend-multiply opacity-50"
                style={{ backgroundImage: "url('/wall-texture.png')", backgroundSize: "200px" }}
            />

            {/* Grain Overlay */}
            <div className="absolute inset-0 z-2 bg-black/10 mix-blend-overlay pointer-events-none" />

            {/* Hero Content - Logo */}
            <div className="relative z-10 text-center px-4 w-full flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="w-full flex justify-center"
                >
                    <Image
                        src="/LOGO.svg?v=new"
                        alt="Bandeja"
                        width={1000}
                        height={400}
                        className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-[800px] h-auto brightness-0 invert opacity-90 drop-shadow-2xl"
                        priority
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-paper/60 text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-paper/30" />
            </motion.div>
        </section>
    );
}
