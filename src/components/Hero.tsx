import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

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
      <section
        id="hero"
        className="min-h-screen relative flex items-end justify-center overflow-hidden pt-16"
      >
        <div className="h-screen w-screen absolute inset-0 transition-all">
          <div className="object-cover object-center w-full h-full">
            <ImageSlider images={images} />
          </div>

          {/* Overlays */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-700 ${isScrolled ? "opacity-0" : "opacity-50"
              }`}
          />
          <div
            className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#f3e8e2_0%,_transparent_40%)] transition-opacity duration-700 ${isScrolled ? "opacity-0" : "opacity-100"
              }`}
          />
          <div
            className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#d2bab0_0%,_transparent_40%)] transition-opacity duration-700 ${isScrolled ? "opacity-0" : "opacity-100"
              }`}
          />
        </div>
        <div className="container mx-auto px-4 h-screen-minus-20 relative">
          <div className="max-w-4xl h-full mx-auto text-center animate-fadeIn flex flex-col items-center justify-end pb-16">
            <a
              href="/#collections"
              className="px-8 py-3 border border-primary text-black bg-white/20 hover:bg-white/50 backdrop-blur text-xs mt-4 transition-all ease-out duration-500 hover-lift inline-flex items-center gap-2 group shadow-lg"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
