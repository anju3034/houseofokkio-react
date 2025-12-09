import React from "react"
import "../CollectionGallery/CollectionGallery.css";

export default function HeroSection() {
    return(
        <div className="about-page">

      {/* Top Banner Section */}
      <section className="top-banner">
        <h1>Collections</h1>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-right">
          <div className="story-left">
          <h4>OUR Collections</h4>
          </div>
          <p>
            Explore a world where every frame is a statement. From artisanal designs to leading-edge fashion, our curated collections bring together global brands and exclusive pieces crafted for style, comfort, and individuality.
          </p>
        
          
        </div>
<div className="story-left">
        
          <h2>Discover Our Curated Eyewear Collections</h2>
        
          
        </div>
      </section>

    </div>
  );
}