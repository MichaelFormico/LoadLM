import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/L&Mlogo.png" alt="Logo" className="logo" />
      {/* Use Link component to navigate to the Quotes page */}
      <a className="quotes" to="/quotes">
        Get a quote now!
      </a>
      <nav className="nav">
        <ul>
          <li>
            <a className="nav-link" to="/about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" to="/services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" to="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
