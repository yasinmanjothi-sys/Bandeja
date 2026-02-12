"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// --- Menu Data ---

const signatures = [
    { name: "Rhub Gimlet", price: "1,400", desc: "Gin · Rhubarb Syrup · Lemon · Rosemary" },
    { name: "Santa Paloma", price: "1,450", desc: "Tequila Blanco · Grapefruit · Thyme · Lime · Soda Water" },
    { name: "Purple Lake", price: "1,450", desc: "Vodka · Blue Curaçao · Pineapple · Red Grape · Soda Water" },
    { name: "Run Lola Run", price: "1,400", desc: "Dark Rum · Créme de Cacao · Orange Liquor · Cranberry" },
    { name: "Coco Loco", price: "1,250", desc: "Rum · Malibu · Pineapple · Coconut" },
    { name: "Bloody María", price: "1,250", desc: "Tequila or Vodka · Tomato Juice · Lime" },
    { name: "Roselle Margarita", price: "1,050", desc: "Tequila · Hibiscus Infusion · Lime" },
    { name: "Lemon-G Dawa", price: "1,050", desc: "Vodka · Ginger · Lemongrass Syrup" },
    { name: "X-Presso Martini", price: "1,050", desc: "Tequila · Khalua · Espresso Shot" },
];

const spritz = [
    { name: "Venezia | Aperol", price: "1,200" },
    { name: "Amalfi | Limoncello", price: "1,350" },
    { name: "Bicicletta | Campari", price: "1,200" },
];

const beerCider = [
    { name: "Craft Beer 254", price: "500", desc: "(Niaje, Sandtrap)" },
    { name: "Corona", price: "750" },
    { name: "Heineken", price: "650" },
    { name: "Heineken 0.0", price: "550" },
    { name: "Local Beers", price: "500" },
    { name: "Ciders", price: "550" },
];

const wines = {
    sparkling: [
        { name: "Le Dolci Colline Prosecco Brut (ITA)", glass: "1,200", bottle: "6,000" },
        { name: "Canti Prosecco (ITA)", bottle: "6,700" },
    ],
    white: [
        { name: "Ancora Pinot Grigio (ITA)", glass: "1,050", bottle: "5,100" },
        { name: "Beach House Sauvignon Blanc (RSA)", glass: "1,200", bottle: "6,000" },
    ],
    rose: [
        { name: "Ancora Pinot Grigio Rosé (ITA)", glass: "1,050", bottle: "5,150" },
        { name: "Frontera Rosé (CHI)", glass: "900", bottle: "4,500" },
    ],
    red: [
        { name: "Wild House Cab Sav (RSA)", glass: "1,100", bottle: "5,200" },
        { name: "Baron Philippe De Rothschild Pinot Noir (FRA)", bottle: "6,500" },
    ],
};

const categories = [
    { id: "signatures", label: "Signatures" },
    { id: "spritz", label: "Spritz & Classics" },
    { id: "beer", label: "Beer & Cider" },
    { id: "wines", label: "Wines" },
] as const;

type CategoryId = typeof categories[number]["id"];

// --- Components ---

const MenuItem = ({ name, price, desc }: { name: string; price: string; desc?: string }) => (
    <div className="flex flex-col gap-2 items-center text-center group">
        <div className="font-serif text-xl md:text-2xl text-burgundy group-hover:text-terracotta transition-colors duration-300">
            {name}
        </div>
        <div className="text-terracotta font-sans text-sm tracking-widest uppercase">
            Ksh {price}
        </div>
        {desc && (
            <p className="text-charcoal/80 leading-relaxed font-serif italic max-w-lg">
                {desc}
            </p>
        )}
    </div>
);

const WineItem = ({ name, glass, bottle }: { name: string; glass?: string; bottle: string }) => (
    <div className="mb-6 flex flex-col items-center text-center group">
        <span className="font-serif text-lg text-charcoal font-medium max-w-[80%] mb-2 group-hover:text-burgundy transition-colors">{name}</span>
        <div className="flex gap-4 font-sans text-sm text-terracotta font-bold whitespace-nowrap">
            {glass && <span>G Ksh{glass}</span>}
            <span className="text-burgundy/20 font-light">|</span>
            <span>B Ksh{bottle}</span>
        </div>
    </div>
);

export default function BarMenuSection() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>("signatures");

    return (
        <section className="py-24 text-charcoal relative">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-5xl md:text-6xl text-burgundy mb-4">BAR MENU</h2>
                    <p className="text-center font-sans text-terracotta uppercase tracking-[0.2em] text-sm mb-12">
                        Drinks Selection
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 border-b border-burgundy/10 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`font-sans uppercase tracking-widest text-sm md:text-base pb-2 transition-all duration-300 relative
              ${activeCategory === cat.id
                                    ? "text-burgundy font-bold"
                                    : "text-charcoal/50 hover:text-burgundy/80"
                                }`}
                        >
                            {cat.label}
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeBarTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    {activeCategory === "signatures" && (
                        <div className="space-y-12">
                            {signatures.map((item, i) => (
                                <MenuItem key={i} {...item} />
                            ))}
                        </div>
                    )}

                    {activeCategory === "spritz" && (
                        <div className="space-y-12 text-center">
                            <div className="mb-12">
                                <p className="font-serif italic text-burgundy/60 text-lg">"All classics available upon request"</p>
                            </div>
                            {spritz.map((item, i) => (
                                <MenuItem key={i} {...item} />
                            ))}
                        </div>
                    )}

                    {activeCategory === "beer" && (
                        <div className="space-y-12">
                            {beerCider.map((item, i) => (
                                <MenuItem key={i} {...item} />
                            ))}
                        </div>
                    )}

                    {activeCategory === "wines" && (
                        <div className="grid md:grid-cols-2 gap-12 md:gap-x-20">
                            <div>
                                <h4 className="font-sans text-terracotta uppercase tracking-[0.2em] mb-8 text-center text-sm border-b border-terracotta/20 pb-2">Sparkling</h4>
                                {wines.sparkling.map((item, i) => <WineItem key={i} {...item} />)}
                            </div>
                            <div>
                                <h4 className="font-sans text-terracotta uppercase tracking-[0.2em] mb-8 text-center text-sm border-b border-terracotta/20 pb-2">White</h4>
                                {wines.white.map((item, i) => <WineItem key={i} {...item} />)}
                            </div>
                            <div>
                                <h4 className="font-sans text-terracotta uppercase tracking-[0.2em] mb-8 text-center text-sm border-b border-terracotta/20 pb-2">Rosé</h4>
                                {wines.rose.map((item, i) => <WineItem key={i} {...item} />)}
                            </div>
                            <div>
                                <h4 className="font-sans text-terracotta uppercase tracking-[0.2em] mb-8 text-center text-sm border-b border-terracotta/20 pb-2">Red</h4>
                                {wines.red.map((item, i) => <WineItem key={i} {...item} />)}
                            </div>
                        </div>
                    )}
                </motion.div>

                <div className="mt-20 text-center text-[10px] md:text-xs text-charcoal/40 font-mono tracking-wide uppercase max-w-2xl mx-auto leading-relaxed border-t border-burgundy/5 pt-8">
                    Products are prepared fresh daily. Please notify us of any allergies prior to ordering. <br />
                    All prices displayed are 16.00% VAT and 2.00% CTI inclusive.
                </div>

            </div>
        </section>
    );
}
