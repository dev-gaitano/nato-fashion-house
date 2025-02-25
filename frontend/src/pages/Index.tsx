import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Values from "@/components/Values";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Sustainability from "@/components/Sustainability";
import OffersBar from "@/components/OffersBar";
import { useState, useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in", "opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    };
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    // Observe all sections except Hero (which should always be visible)
    document.querySelectorAll("section:not(#hero)").forEach((section) => {
      section.classList.add(
        "opacity-0",
        "translate-y-8",
        "transition-all",
        "duration-700"
      );
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        {isScrolled ? (
          <>
            <OffersBar />
            <Navbar />
          </>
        ) : (
          <Navbar />
        )}
      </div>
      <Hero />
      <Values />
      <Collections />
      <Sustainability />
      <About />
      <Partners />
      <Testimonials />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;
