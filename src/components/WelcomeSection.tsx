import WindowVideo from "./WindowVideo";

export default function WelcomeSection() {
    return (
        <section className="pt-12 pb-24 text-charcoal">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: All Text Content */}
                    <div className="md:col-span-7 space-y-12 pt-4">
                        {/* Header */}
                        <div>
                            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl text-burgundy leading-[0.9] md:leading-[0.9] mb-8">
                                Welcome to <br />
                                <span className="italic">Bandeja.</span>
                            </h2>

                            {/* Dictionary Look */}
                            <div className="space-y-2 border-l-4 border-terracotta/30 pl-6 py-1">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-display font-normal text-3xl md:text-4xl text-burgundy">ban·de·ja</span>
                                    <span className="font-sans italic text-lg text-burgundy/60">noun</span>
                                </div>
                                <p className="font-serif text-xl md:text-2xl text-charcoal/80 leading-snug">
                                    Spanish word for <span className="italic text-terracotta">meal platter</span>.
                                </p>
                            </div>
                        </div>

                        {/* Body Text (Moved from Right) */}
                        <div className="space-y-6 md:pr-12">
                            <p className="font-serif text-charcoal/80 text-base md:text-lg leading-relaxed">
                                We are happy to have you with us in this adventure, to taste our flavours and be part of our gastronomic re-evolution.
                            </p>

                            <p className="font-serif text-charcoal/80 text-base md:text-lg leading-relaxed">
                                We honour the freshness of local produce, the warmth of Kenyan
                                hospitality, the lively - colourful spirit of Latino culture, and
                                the refined touch of European dining.
                            </p>

                            <p className="font-serif text-charcoal/80 text-base md:text-lg leading-relaxed italic text-burgundy">
                                Bandeja is the place to gather after a game, recharge after a workout, or simply savour great food with friends. Bienvenidos, the table is ready!
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Window Video */}
                    <div className="md:col-span-5 flex justify-center md:justify-end w-full pt-4 relative z-20">
                        <div className="w-full">
                            <WindowVideo />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
