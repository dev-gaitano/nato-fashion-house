import { useState, useEffect } from "react";
import { X } from "lucide-react";

const offers = [
  {
    text: "Elegance Ease Collection Launch: Get 15% off with code",
    code: "ELEGANCE24",
  },
  {
    text: "Free Shipping on Orders Over KSHs. 50,000 with code",
    code: "FREESHIP",
  },
  {
    text: "New Customer Special: 10% off your first order with",
    code: "WELCOME10",
  },
  {
    text: "Limited Time: Buy One Get One 50% Off with code",
    code: "BOGO50",
  },
];

const OffersBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000); // Change offer every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible || isDismissed) return null;

  const currentOffer = offers[currentOfferIndex];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-white transition-all duration-300">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">
        <div className="text-sm font-medium text-center transition-opacity duration-300">
          {currentOffer.text}{" "}
          <span className="font-bold text-primary animate-pulse">
            {currentOffer.code}
          </span>
        </div>
        {/* <button
          onClick={() => setIsDismissed(true)}
          className="absolute right-4 hover:opacity-75 transition-opacity"
          aria-label="Dismiss offer"
        >
          <X size={16} />
        </button> */}
      </div>
    </div>
  );
};

export default OffersBar;
