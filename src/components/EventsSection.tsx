
import { motion } from "framer-motion";
import WindowFrame from "./WindowFrame";
import ZigZagPattern from "./ZigZagPattern";
import Image from "next/image";

export default function EventsSection() {
    return (
        <section className="py-24 bg-charcoal text-cream overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20 text-center">
                    <h2 className="font-serif text-5xl md:text-7xl text-gold mb-2">The Vibe.</h2>
                    <p className="font-sans text-terracotta tracking-[0.3em] uppercase text-sm">Upcoming Happenings</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Saturdaze Window */}
                    <div className="flex flex-col items-center gap-6 group">
                        <WindowFrame id="saturdaze-window" className="transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="relative w-full h-full bg-[#1F1F1F]">
                                <Image
                                    src="/Saturdaze.png"
                                    alt="Saturdaze Poster"
                                    fill
                                    className="object-cover"
                                />

                                {/* Overlay for texture */}
                                <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply" />

                                {/* Zig Zag Pattern Overlay */}
                                <div className="absolute bottom-[15%] left-0 w-full h-8 z-30 pointer-events-none opacity-90">
                                    <ZigZagPattern strokeColor="#E07A5F" />
                                </div>
                            </div>
                        </WindowFrame>
                        <div className="text-center space-y-2">
                            <h3 className="font-serif text-3xl text-gold">Saturdaze</h3>
                            <p className="text-white/60 font-light text-sm tracking-wider uppercase">Every Saturday • 2PM - Late</p>
                        </div>
                    </div>

                    {/* Noches Window */}
                    <div className="flex flex-col items-center gap-6 group md:translate-y-12">
                        <WindowFrame id="noches-window" className="transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="relative w-full h-full bg-[#1F1F1F]">
                                <Image
                                    src="/Noches.png"
                                    alt="Noches Poster"
                                    fill
                                    className="object-cover"
                                />

                                {/* Overlay for texture */}
                                <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply" />

                                {/* Zig Zag Pattern Overlay */}
                                <div className="absolute bottom-[15%] left-0 w-full h-8 z-30 pointer-events-none opacity-90">
                                    <ZigZagPattern strokeColor="#C0A062" />
                                </div>
                            </div>
                        </WindowFrame>
                        <div className="text-center space-y-2">
                            <h3 className="font-serif text-3xl text-gold">Noches</h3>
                            <p className="text-white/60 font-light text-sm tracking-wider uppercase">Feature Event • 13-02-26</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
