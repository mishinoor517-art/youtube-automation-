import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home
 * Single-page landing experience: Navbar sits fixed above the Hero, followed
 * by Services, Features ("Why Choose Us"), Contact, and Footer in sequence.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
