import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header id="header">
      <div className="content-box nav-wrapper">
        <div id="logo">
          <Link to="/">PIXELLIBERTY</Link>
        </div>

        <div className="nav-wrapper">
          <div
            id="hamburger"
            className={open ? "nyitva" : ""}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav id="main-menu" className={open ? "nyitva" : ""}>
            <ul>
              <li>
                <Link to="/">Főoldal</Link>
              </li>
              <li>
                <a href="#services">Szolgáltatások</a>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Kapcsolat</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
