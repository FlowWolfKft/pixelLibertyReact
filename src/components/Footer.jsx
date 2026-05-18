import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="column-3">
        <div>
          <p>© 2026 PixelLiberty</p>
        </div>

        <div className="footer-links">
          <Link to="/privacy" target="_blank" rel="noopener noreferrer">
            Adatkezelési Tájékoztató
          </Link>
        </div>

        <div className="footer-links">
          <Link to="/impressum" target="_blank" rel="noopener noreferrer">
            Impresszum
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
