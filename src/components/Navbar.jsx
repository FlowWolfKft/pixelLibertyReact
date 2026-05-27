import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header id="header">
      <div className="content-box nav-wrapper">
        <div id="logo">
          <Link to="/">PIXELLIBERTY</Link>
        </div>

        <div className="nav-wrapper">
          <div
            id="hamburger"
            className={isOpen ? "nyitva" : ""}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav id="main-menu" className={isOpen ? "nyitva" : ""}>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Főoldal
                </Link>
              </li>

              <li>
                <Link to="/#services" onClick={() => setIsOpen(false)}>
                  Szolgáltatások
                </Link>
              </li>

              <li>
                <Link to="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Kapcsolat
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
