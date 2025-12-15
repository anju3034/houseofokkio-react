import React, { useState } from "react";
import "../AboutGallery/AboutGallery.css";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      img: "/about-image.jpeg",
      heading: "The Vision & Philosophy",
      text: "At House of Okkio, style is effortless refined through presence, not attention. We craft eyewear as self-expression: timeless, intentional, and distinctly yours.",
    },
    {
      img: "/about-image2.jpeg",
      heading: "The Founders",
      text: "Feather-light, clinically refined, and crafted for everyday comfort — these frames embody subtle luxury and functional excellence. Designed for those who value minimalist aesthetics and precise detailing, each piece balances form and purpose effortlessly.",
    },
  ];

  return (
    <div className="gallery-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`gallery-item ${
            activeIndex === index ? "active" : activeIndex !== null ? "inactive" : ""
          }`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <img src={item.img} alt="gallery" className="gallery-image" />

          <div className="gallery-text">
            <h3 className="gallery-heading">{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;