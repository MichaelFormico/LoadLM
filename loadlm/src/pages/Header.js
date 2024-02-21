import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
  <img src="/6v4ehN-LogoMakr.png" alt="Logo" className="logo" />
</Link>

      <Link to="/quotes" className="quotes">
  Get a quote now!
</Link>
      <nav className="nav">
        <ul>
          <li>
          <Link to="/about" className="">
              About
            </Link>
          </li>
          <li>
          <Link to="/services" className="">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
