import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../LMlogo.png"; // Import the image

function Header() {
  return (
    <header className="header">
      <div className="waves-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#fa9961" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#001f3d" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#fa6e1e" />
            <use xlinkHref="#gentle-wave" x="1" y="9" transform="scale(0.6) fill="#000000" />
          </g>
        </svg>
      </div>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
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



import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../6v4ehN-LogoMakr.png"; // Import the image

function Header() {
  return (
    <header className="header">
      
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" /> {/* Use the imported image */}
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

