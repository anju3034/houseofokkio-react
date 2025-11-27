import React from "react"
import "./Hero.css";

export default function HeroSection() {
    return(
        <div className="about-page">

      {/* Top Banner Section */}
      <section className="top-banner">
        <h1>About Us</h1>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-left">
          <h4>OUR Story</h4>
          <h2>Where Creativity Shapes Vision.</h2>
        </div>

        <div className="story-right">
          <p>
            House of Okkio was born from a passion for design that challenges convention. What started as a pursuit to create eyewear with purpose soon evolved into a movement that celebrates individuality, craftsmanship, and creative freedom.
          </p>
        </div>
      </section>

    </div>
  );
}