import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        <Hero />
        <Authority />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Testimonials />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
