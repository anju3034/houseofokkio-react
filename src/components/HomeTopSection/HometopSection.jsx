import React from "react";
import "./HometopSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Where Vision <br /> Meets Expression</h1>

        <p className="hero-description">
          At House of Okkio, every frame is a chapter in the story of individuality.
          Born from a passion for refined craftsmanship and modern expression,
          our curation brings together the world’s most distinguished eyewear
          where luxury, precision, and personality coexist in perfect balance.
        </p>
      </div>

      
      <div className="okkio-logo"></div>
    </section>
  );
}
