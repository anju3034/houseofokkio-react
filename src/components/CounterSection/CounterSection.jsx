import React, { useEffect, useRef, useState } from "react";
import "./CounterSection.css";

export default function CounterSection() {
  const counters = [
    { number: 20, label: "Core Essentials Collection" },
    { number: 38, label: "Signature Frame Styles" },
    { number: 18, label: "Color & Finish Variations" },
    { number: 8, label: "Materials We Craft With" },
  ];

  return (
    <div className="counter-wrapper">
      {counters.map((item, i) => (
        <AnimatedCounter key={i} end={item.number} label={item.label} />
      ))}
    </div>
  );
}

function AnimatedCounter({ end, label }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef();

  // Detect when the counter comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // 40% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Start counting when visible
  useEffect(() => {
    if (!isVisible) return;

    let start = 1;
    const duration = 1600; // total animation time
    const stepTime = Math.abs(Math.floor(duration / end));

    const counter = setInterval(() => {
      start += 1;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(counter);
  }, [isVisible, end]);

  return (
    <div className="counter-box" ref={ref}>
      <div className="counter-number">
        {count}
        <span className="plus">+</span>
      </div>
      <p className="counter-label">{label}</p>
    </div>
  );
}
