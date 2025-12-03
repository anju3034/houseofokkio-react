import React from "react"
import "./ContactDetails.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="footer-container">

      <div className="footer-box">
        <h4>ADDRESS</h4>
        <p>
          BG-10, Central Market-120, Sector-120, Noida, <br />
          Uttar Pradesh-201301
        </p>
      </div>

      <div className="footer-box">
        <h4>EMAIL</h4>
        <p>mayank@luxonyx.co.in</p>
      </div>

      <div className="footer-box">
        <h4>PHONE</h4>
        <p>9217111400</p>
      </div>

      <div className="footer-box">
        <h4>FOLLOW ME</h4>
        <div className="social-icons">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaYoutube /></span>
          <span><FaLinkedinIn /></span>
          <span><FaInstagram /></span>
        </div>
      </div>

    </div>
  );
}