import { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`image-slider-img ${index === currentIndex ? "visible" : "hidden"}`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageSlider;
