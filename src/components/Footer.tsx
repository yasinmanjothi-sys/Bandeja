"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-paper py-20 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="space-y-6">
                        <Image
                            src="/LOGO.svg?v=new"
                            alt="Bandeja"
                            width={300}
                            height={120}
                            className="w-48 md:w-64 h-auto brightness-0 invert opacity-90"
                        />
                    </div>

                    <div className="flex flex-col gap-8 md:text-right">
                        <div className="space-y-2">
                            <p className="text-xl font-serif text-terracotta">Visit Us</p>
                            <p className="opacity-80 font-light">
                                Jalaram Rd,<br />
                                Westlands, Nairobi
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-xl font-serif text-terracotta">Contact</p>
                            <a href="tel:0707844606" className="opacity-80 font-light hover:text-gold transition-colors cursor-pointer block">
                                0707 844606
                            </a>
                            <a href="mailto:hola@bandeja.co.ke" className="opacity-80 font-light hover:text-gold transition-colors cursor-pointer block">
                                hola@bandeja.co.ke
                            </a>
                        </div>

                        <a
                            href="tel:0707844606"
                            className="inline-block mt-4 px-8 py-3 bg-burgundy text-paper font-sans font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-all duration-300 text-center"
                        >
                            Reserve a Table
                        </a>
                    </div>

                </div>


                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-mono">
                    <p>© 2026 Bandeja Nairobi. All Rights Reserved.</p>

                    {/* Red Boat Media Badge */}
                    <a
                        href="https://redboatmedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="my-4 md:my-0 hover:opacity-100 transition-opacity duration-300"
                    >
                        <Image
                            src="/RED BOAT Badge .svg"
                            alt="Made by Red Boat Media"
                            width={100}
                            height={30}
                            className="h-6 w-auto"
                        />
                    </a>

                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/bandeja.kenya/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors">INSTAGRAM</a>
                        <span className="hover:text-white cursor-pointer transition-colors">TIKTOK</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
