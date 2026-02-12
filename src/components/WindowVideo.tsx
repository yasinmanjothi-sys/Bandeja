"use client";

import ZigZagPattern from "./ZigZagPattern";

export default function WindowVideo() {
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
                <video
                    src="/welcome-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                />

                {/* Overlay for texture/consistency */}
                <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply" />

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
