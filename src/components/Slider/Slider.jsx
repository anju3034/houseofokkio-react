import React from "react";
import "./Slider.css";

const images = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
  "/img6.jpeg"
];

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        {/* Duplicate images 2 times for seamless scroll */}
        {images.concat(images).map((src, i) => (
          <div className="slide" key={i}>
            <img src={src} alt="product" />
          </div>
        ))}
      </div>
    </div>
  );
}
