import React, { useState } from "react";
import "../CollectionGallery/CollectionGallery.css";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      img: "/galleryimage1.jpeg",
      heading: "The Luxury Edit – A World of Prestige",
      text: "Each frame is precision-crafted with refined detail, modern innovation, and timeless character. Designed for those who view eyewear as art — a reflection of presence, personality, and quiet confidence.",
    },
    {
      img: "/galleryimage3.jpeg",
      heading: "The Precision Collection – Lightness Refined",
      text: "Feather-light, clinically refined, and crafted for everyday comfort — these frames embody subtle luxury and functional excellence. Designed for those who value minimalist aesthetics and precise detailing, each piece balances form and purpose effortlessly.",
    },
    {
        img: "galleryimage2.jpeg",
        heading: "The Expression Line – Culture, Creativity & Cool",
        text: "Bold silhouettes, striking shapes, and refined detailing come together to turn eyewear into a personal statement. Crafted with high–quality, sustainable materials, each piece blends style-forward design with everyday wearability.",
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