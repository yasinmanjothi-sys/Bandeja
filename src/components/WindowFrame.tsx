"use client";

import React from "react";

interface WindowFrameProps {
    children: React.ReactNode;
    className?: string;
    id?: string; // Unique ID for the clipPath to avoid conflicts
}

export default function WindowFrame({ children, className = "", id = "window-arch-def" }: WindowFrameProps) {
    return (
        <div className={`relative w-full aspect-[3/4] ${className}`}>
            {/* The Window Shape Definition */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <clipPath id={id} clipPathUnits="objectBoundingBox">
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

            {/* The Clipped Content */}
            <div
                className="w-full h-full relative shadow-2xl overflow-hidden"
                style={{ clipPath: `url(#${id})` }}
            >
                {children}
            </div>

            {/* Optional border outline to emphasize the window effect */}
            <div
                className="absolute inset-0 pointer-events-none border-[8px] border-paper z-20"
                style={{ clipPath: `url(#${id})` }}
            />
        </div>
    );
}
