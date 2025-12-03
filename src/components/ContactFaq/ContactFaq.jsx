import React, { useState } from "react";
import "../ContactDetails/ContactDetails.css";

const faqItems = [
  {
    question: "Can I get my power lenses fitted in your frames?",
    answer:
      "Of course! Just share your latest eye prescription, and we’ll fit the right lenses into the frame you choose.",
  },
  {
    question: "What types of lenses do you offer?",
    answer:
      "We offer single-vision, progressive, computer lenses, anti-glare lenses, and more.",
  },
  {
    question: "Can I bring my old frame for new lenses?",
    answer:
      "Yes, absolutely! If your frame is in good condition, we can fit new lenses into it.",
  },
  {
    question: "What if my glasses don't fit properly?",
    answer:
      "We offer complimentary adjustments. Just visit us and we'll fix it for you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqx-section">
      <div className="faqx-wrapper">

        {/* Header */}
        <div className="faqx-header">
          <h4>FAQ'S</h4>
          <h1>Everything You Need to Know</h1>
          <p>From design to detail, every pair is crafted with precision.</p>
        </div>

        {/* FAQ Box */}
        <div className="faqx-container">
          {faqItems.map((item, index) => (
            <div className="faqx-item" key={index}>

              {/* Question Row */}
              <div className="faqx-question" onClick={() => toggleFaq(index)}>
                <span className="faqx-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
                <h3>{item.question}</h3>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="faqx-answer">{item.answer}</p>
              )}

              <hr className="faqx-divider" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
