import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import GallerySection from "@/components/GallerySection";
import MenuSection from "@/components/MenuSection";
import BarMenuSection from "@/components/BarMenuSection";
import EventsSection from "@/components/EventsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <WelcomeSection />
      <GallerySection />
      <MenuSection />
      <BarMenuSection />
      <EventsSection />
      <MapSection />
      <Footer />
    </main>
  );
}
