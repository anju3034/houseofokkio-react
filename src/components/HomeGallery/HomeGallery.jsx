import React from "react";
import "./HomeGallery.css";

export default function HeroSection() {
  return (
    <div className="Home-page">
      <section className="Home-section">
        <div className="Homestory-left">
          <h4>OUR CREATIONS</h4>
          <h2>Crafting Vision Through Timeless Design</h2>
        </div>

        <div className="Homestory-right">
          <p>
            Every frame tells a story of precision, luxury, and individuality. 
            Our curated collection captures the artistry behind the world’s 
            most iconic eyewear, where craftsmanship meets modern sophistication.
          </p>

          <button className="story-btn">
            See More <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
