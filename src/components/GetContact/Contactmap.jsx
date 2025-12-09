import React, { useState } from "react";
import "../GetContact/GetContact.css";

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const maxChars = 180;

  return (
    <div className="contact-container">

      <div className="contact-form">
        
        <input type="text" placeholder="Name" className="input-box" />
        <input type="email" placeholder="Email Address" className="input-box" />
        <input type="text" placeholder="Phone Number" className="input-box" />

        <div className="textarea-wrapper">
          <textarea
            placeholder="Message"
            maxLength={maxChars}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea"
          ></textarea>
          <span className="char-count">{message.length} / {maxChars}</span>
        </div>

        <button className="submit-btn">Submit</button>
      </div>

      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7019.726804643546!2d77.3600168!3d28.5910116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff32b2cfff7%3A0xcbe4ceacf00cc614!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709876543210"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>

    </div>
  );
}
