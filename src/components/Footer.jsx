import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

function Footer() {
  return (
    
    <footer className="footer">
      <div className="column-4">
        <div className="footer-links">
          <Link to="/impressum" target="_blank" rel="noopener noreferrer">
            Impresszum
          </Link>
        </div>

        <div className="footer-links">
          <Link to="/privacy" target="_blank" rel="noopener noreferrer">
            Adatkezelési Tájékoztató
          </Link>
        </div>
    <div>
          <p>© 2026 PixelLiberty</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/monikafarkasgyovai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571804105911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com/pixel.liberty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://behance.net/pixelliberty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
