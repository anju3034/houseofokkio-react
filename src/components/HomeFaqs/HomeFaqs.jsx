import React, { useState } from "react";
import "./HomeFaqs.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Q1: What is House of Okkio?",
      answer:
        "House of Okkio is a curated eyewear brand that offers stylish, comfortable, and everyday wearable frames with good quality and design.",
    },
    {
      question: "Q2: Do you provide prescription lenses?",
      answer:
        "Yes, we offer high-quality prescription lenses tailored to your vision needs.",
    },
    {
      question: "Q3: How do I know which frame will suit my face?",
      answer:
        "Our face-shape guide and styling recommendations help you find the perfect frame.",
    },
    {
      question: "Q4: Do you offer blue light or anti-glare lenses?",
      answer:
        "Yes, we provide blue-light protection and anti-glare options for digital screen users.",
    },
    {
      question: "Q5: Do you have both eyeglasses and sunglasses?",
      answer:
        "Absolutely! We offer a complete range of eyeglasses and sunglasses.",
    },
  ];

  return (
    <div className="faq-wrapper">
      <h4 className="faq-subtitle">FAQ'S</h4>
      <h2 className="faq-title">Everything You Need to Know</h2>
      <p className="faq-desc">
        From design to detail, every pair is meticulously crafted.
      </p>

      <div className="faq-box">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>

              <span className={`faq-arrow ${activeIndex === index ? "rotate" : ""}`}>
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e8c46d"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
</span>

            </div>

            <div
              className={`faq-answer ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
