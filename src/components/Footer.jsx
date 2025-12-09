import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

  
      <div className="footer-logo-section">
        <img src="/House-Of-Okkio-Logo-Final-06.png" alt="logo" className="footer-logo" />
        <h2></h2>

        <div className="footer-social-icons">
          <span><i className="fab fa-facebook-f"></i></span>
          <span><i className="fab fa-twitter"></i></span>
          <span><i className="fab fa-youtube"></i></span>
          <span><i className="fab fa-linkedin-in"></i></span>
          <span><i className="fab fa-instagram"></i></span>
        </div>
      </div>

   
      <div className="footer-links">
        
        <div>
          <h3>Careers</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Collection</p>
          <p>Blog</p>
        </div>

        <div>
          <h3>Press & Collaborations</h3>
          <p>Event Photoshoot</p>
          <p>Landscape</p>
          <p>Building Photoshoot</p>
          <p>Photoshoot</p>
        </div>

        <div>
          <h3>Address</h3>
          <p>BG-10, Central Market-120</p>
          <p>Sector-120, Noida</p>
          <p>Uttar Pradesh-201301</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i> 9217111400</p>
          <p><i className="fas fa-envelope"></i> mayank@luxonyx.co.in</p>
        </div>
      </div>

 
      <div className="footer-bottom">
        <p>A Unit of Luxonyx Technologies Private Limited</p>
        <div className="footer-bottom-links">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
