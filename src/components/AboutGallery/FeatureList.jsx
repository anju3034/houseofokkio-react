import React from "react";
import "../AboutGallery/AboutGallery.css";

export default function FeatureList() {

  const items = [
    {
      title: "Precision Frame Craftsmanship",
      subtitle: "Design Philosophy",
    },
    {
      title: "Vision & Identity Styling",
      subtitle: "Personal Expression",
    },
    {
      title: "Innovative Material Choice",
      subtitle: "Smart + Sustainable",
    },
    {
      title: "Contemporary Streetwear Influence",
      subtitle: "Modern Culture & Style",
    },
  ];

  return (
    <div className="feature-wrapper">
      {items.map((item, i) => (
        <div key={i} className="feature-row">
          
          <h3 className="feature-title">{item.title}</h3>

          <p className="feature-subtitle">{item.subtitle}</p>

          <button className="arrow-btn">
            →
          </button>
        </div>
      ))}
    </div>
  );
}