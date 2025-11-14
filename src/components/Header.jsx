import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <i className="ri-hospital-line"></i>
        <h2>
          SmartQueue <span>Hospital</span>
        </h2>
      </div>

      <nav className="nav">
        <Link to="/">
          <i className="ri-home-4-line"></i> Home
        </Link>
        <Link to="/doctors">
          <i className="ri-user-heart-line"></i> Doctors
        </Link>
        <Link to="/appointments">
          <i className="ri-calendar-check-line"></i> Appointments
        </Link>
        <Link to="/gallery">
          <i className="ri-image-line"></i> Gallery
        </Link>
        <Link to="/about">
          <i className="ri-information-line"></i> About
        </Link>
        <Link to="/contact">
          <i className="ri-phone-line"></i> Contact
        </Link>
        <Link to="/viewtokens" className="book-btn">
          <i className="ri-clipboard-line"></i> View Tokens
        </Link>
      </nav>
    </header>
  );
}

export default Header;