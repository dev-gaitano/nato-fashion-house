import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "./ui/ImageSlider";
import "./Hero.css";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const images = [
    "https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635325/hero-img-1-comp_v2qg6o.jpg",
    "https://res.cloudinary.com/diwkfbsgv/image/upload/v1777635330/hero-img-0-comp_xw6c9w.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <section id="hero" className="hero">
        <div className="hero-slider-wrapper">
          <div className="hero-slider-inner">
            <ImageSlider images={images} />
          </div>

          {/* Overlays */}
          <div
            className={`hero-overlay hero-overlay-black ${isScrolled ? "hero-overlay-hidden" : ""}`}
          />
          <div
            className={`hero-overlay hero-overlay-gradient-tr ${isScrolled ? "hero-overlay-hidden" : ""}`}
          />
          <div
            className={`hero-overlay hero-overlay-gradient-bl ${isScrolled ? "hero-overlay-hidden" : ""}`}
          />
        </div>
        <div className="container hero-content-container">
          <div className="hero-content-inner animate-fadeIn">
            <a href="/#collections" className="hero-cta-btn">
              Explore Collections
              <ArrowRight className="arrow-icon" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
