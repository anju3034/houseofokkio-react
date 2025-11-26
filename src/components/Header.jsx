import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="logo-section">
          <img
            src="/House-Of-Okkio-Logo-Final-06.png"  /* replace with your logo path */
            alt="House of Okkio"
            className="logo-img"
          />
          <h2 className="logo-text"></h2>
        </div>

        {/* NAVIGATION MENU */}
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/collections">Collections</a>
          <a href="/about">About Us</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
