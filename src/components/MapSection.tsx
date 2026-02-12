"use client";

import Image from "next/image";
import WindowFrame from "./WindowFrame";
import ZigZagPattern from "./ZigZagPattern";

const MAP_URL = "https://www.google.com/maps/place/bandeja+nairobi/data=!4m2!3m1!1s0x182f1790780dd665:0x5212e9ea8cafc249?sa=X&ved=1t:242&ictx=111";

export default function MapSection() {
    return (
        <section className="py-24 bg-charcoal relative border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-12">

                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="font-display text-5xl md:text-6xl text-gold">
                        Visit Us
                    </h2>
                    <p className="font-serif text-lg text-paper/80 max-w-md mx-auto">
                        Find us in the heart of Westlands. Click the map for directions.
                    </p>
                </div>

                {/* The Map Window */}
                <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full max-w-2xl relative transition-transform duration-500 hover:scale-[1.02]"
                >
                    <WindowFrame id="map-window">
                        <div className="relative w-full h-full bg-paper">
                            {/* Map Screenshot */}
                            <Image
                                src="/bandeja-map.png"
                                alt="Bandeja Location Map"
                                fill
                                className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                            />

                            {/* Mix-blend overlay for texture integration */}
                            <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply pointer-events-none" />

                            {/* Zig Zag Pattern at the bottom */}
                            <div className="absolute bottom-[15%] left-0 w-full h-6 z-20 pointer-events-none opacity-80">
                                <ZigZagPattern strokeColor="#5D2A2A" />
                            </div>

                            {/* "Open Map" Hover Indicator */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                <div className="bg-paper/90 backdrop-blur-sm px-6 py-3 rounded-full border border-burgundy shadow-xl">
                                    <span className="font-sans font-bold text-burgundy uppercase tracking-widest text-sm">
                                        Open in Google Maps
                                    </span>
                                </div>
                            </div>
                        </div>
                    </WindowFrame>
                </a>

            </div>
        </section>
    );
}
