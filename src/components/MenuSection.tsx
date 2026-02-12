"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Leaf, WheatOff, Vegan, Nut } from "lucide-react";

// Menu Data structure
interface MenuItem {
    name: string;
    price: string;
    desc: string;
    notes?: string;
}

const menuItems: Record<string, MenuItem[]> = {
    appetizers: [
        { name: "Camembert Samosas (3 pcs)", price: "1,150", desc: "Camembert cheese, onion jam, mango chutney dip." },
        { name: "Bitterballen (5 pcs)", price: "1,250", desc: "Panko crusted beef brisket fritters, oxtail bone marrow kick, sweet mustard side." },
        { name: "Chicken Lollys (8 pcs)", price: "1,450", desc: "Apple-spice glazed bone-in chicken." },
        { name: "Halloumi Fries (5 pcs)", price: "1,150", desc: "Panko crusted halloumi, spinach pesto dip." },
    ],
    bowls: [
        { name: "Soup Of The Day", price: "950", desc: "Ask the chef's daily recommendation. Includes sourdough toast or green plantain crisps." },
        { name: "Mediterra", price: "1,350", desc: "Feta, black olives, cherry tomatoes, pickled red onion, cucumber, roasted pumpkin seeds, oregano-yoghurt dressing.", notes: "*Add on: sautéd chicken cubes / Ksh350" },
        { name: "Longevity Bowl (High-Prot.)", price: "1,550", desc: "Creamy chickpeas, sweet potato, spinach pesto, mango, red cabbage, spiced sweet corn, mint-tomato salad, avocado.", notes: "*Add on: sautéd chicken cubes / Ksh350 choice of eggs (2 pcs) / Ksh200" },
    ],
    crunch: [
        { name: "Ají Verde Lo-Fries", price: "1,350", desc: "Charred halloumi, trio cheese melt, caramelized onion, homemade potato chips, kale crisps, salsa verde drizzle." },
        { name: "Philly Lo-Fries", price: "1,550", desc: "Pulled beef brisket, sauteed bell peppers & onions, charred jalapeño rings, trio cheese mix, parmesan, parsley, homemade potato chips, salsa roja." },
        { name: "Nachos Bandeja", price: "1,450", desc: "Black bean purée, avo mash, pico de gallo, charred jalaperños, cheese sauce, yoghurt cream, corn tortilla crisps, coriander leaves, salsa tatemada (fire roasted salsa).", notes: "*Addon: sautéd ground beef (chili con carne) / Ksh300 extra cheese sauce / Ksh250" },
    ],
    generous: [
        // Assuming matching simple format for consistency unless specified otherwise
        { name: "Avocado Toast No.2", price: "1,200", desc: "Avo mash, blackbean purée, cherry tomatoes, pickled red onion, roasted sunflower seeds." },
        { name: "Chimi-Chicken Wrap", price: "1,550", desc: "Chicken strips or crispy tofu sautéed w/ chimichurri, fresh cucumber, pickled roots, lettuce, spinach chapati." },
        { name: "Le Smash", price: "1,900", desc: "Double smash beef patty burger, cheddar, onion jam, piccalilli mayo, lettuce-tomato slaw." },
        { name: "Ribeye Steak", price: "2,600", desc: "Pan seared (250g, medium & sliced), charred broccolini & green beans, chimichurri salsa." },
    ]
};

const categories = [
    { id: "appetizers", label: "Appetizers" },
    { id: "bowls", label: "In A Bowl" },
    { id: "crunch", label: "Casa Crunch" },
    { id: "generous", label: "The Generous" },
] as const;

type CategoryId = typeof categories[number]["id"];

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>("appetizers");

    return (
        <section className="py-24 text-charcoal min-h-[80vh]">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Main Menu Content */}
                <div>
                    <h2 className="text-center font-display text-5xl md:text-6xl text-burgundy mb-4">GARDEN KITCHEN</h2>
                    <p className="text-center font-sans text-terracotta uppercase tracking-[0.2em] text-sm mb-12">
                        Menu Season 1
                    </p>

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
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Menu Items List */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-12 max-w-3xl mx-auto"
                    >
                        {menuItems[activeCategory].map((item, i) => (
                            <div key={i} className="flex flex-col gap-2 items-center text-center group">
                                <div className="font-serif text-xl md:text-2xl text-burgundy group-hover:text-terracotta transition-colors duration-300">
                                    {item.name}
                                </div>
                                <div className="text-terracotta font-sans text-sm tracking-widest uppercase">
                                    Ksh {item.price}
                                </div>
                                <p className="text-charcoal/80 leading-relaxed font-serif italic max-w-lg">
                                    {item.desc}
                                </p>
                                {item.notes && (
                                    <p className="text-xs text-burgundy/60 italic mt-1 font-serif max-w-md">
                                        {item.notes}
                                    </p>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* Bottom Decorative Element */}
                    <div className="flex flex-col items-center gap-8 mt-24">
                        <div className="opacity-30">
                            <Leaf className="w-6 h-6 text-burgundy rotate-180" />
                        </div>

                        {/* Dietary Icons Legend - Moved from WelcomeSection */}
                        <div className="flex justify-center gap-6 md:gap-8 text-xs md:text-sm font-sans uppercase tracking-wider text-burgundy/60 py-4 flex-wrap border-t border-burgundy/5 pt-8 w-full max-w-2xl mx-auto">
                            <div className="flex items-center gap-2"> <Leaf className="w-4 h-4 text-[#8BA888]" /> Vegetarian </div>
                            <div className="flex items-center gap-2"> <WheatOff className="w-4 h-4 text-[#8BA888]" /> Gluten Free </div>
                            <div className="flex items-center gap-2"> <Vegan className="w-4 h-4 text-[#8BA888]" /> Vegan </div>
                            <div className="flex items-center gap-2"> <Nut className="w-4 h-4 text-[#A89F91]" /> Nuts </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
