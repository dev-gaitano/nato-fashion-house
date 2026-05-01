import { useState, useEffect } from "react";
import "./NewsBar.css";

const offers = [
  {
    text: "Elegance Ease Launch: Get 15% off with code",
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
    text: "LIMITED TIME: Buy One Get One 50% Off with code",
    code: "GAI50",
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
    <div className="news-bar">
      <div className="container news-bar-inner">
        <div className="news-bar-text">
          {currentOffer.text}{" "}
          <span className="news-bar-code">
            {currentOffer.code}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OffersBar;
