import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        
        <a href="/" className="logo-section">
          <img
            src="/House-Of-Okkio-Logo-Final-06.png"
            alt="House of Okkio"
            className="logo-img"
          />
        </a>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/collection">Collections</a>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
