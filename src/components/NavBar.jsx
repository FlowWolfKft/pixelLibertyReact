import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="column-2">
        <li>
          <Link to="/">Főoldal</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Kapcsolat</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
