import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../6v4ehN-LogoMakr.png"; // Import the image


function Header() {
  return (
    <div className="header">
      <div className="inner-header flex">
        <div className="left-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <Link to="/quotes" className="quotes">
            Get a quote now!
          </Link>
        </div>
        <nav className="nav">
      
      <div className="asc">
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
          <div className="actbtns">
        <Link to="/login" className="auth-link">
          Login
        </Link>
        <Link to="/create" className="auth-link">
          Create Account
        </Link>
        </div>
      </div>
        </nav>
      </div>
      <div>
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(178,18,4,0.7)" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000000" />
      </g>
    </svg>
  </div>
</div>

  );
}


export default Header;

