import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/6v4ehN-LogoMakr.png";
import "./Header.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking local storage or session) on component mount and when localStorage changes
    const userLoggedIn = localStorage.getItem("token") !== null; // Assuming the token is stored in local storage
    setIsLoggedIn(userLoggedIn);

    // Listen for changes in local storage (e.g., logout)
    const handleStorageChange = () => {
      const userLoggedIn = localStorage.getItem("token") !== null;
      setIsLoggedIn(userLoggedIn);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Cleanup: Remove event listener
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Run only once on component mount

  // Function to handle logout
  const handleLogout = async () => {
    // Perform logout logic here (e.g., clear session, update state)
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout`, {}, {
      headers: {
        'Authentication': "Bearer " + localStorage.getItem('token')
      },
    });

    localStorage.removeItem("token"); // Remove the token from local storage
    setIsLoggedIn(false); // Update isLoggedIn state to false
    // Redirect to login page or any other page after logout if needed
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <div className="header">
      <div className="inner-header flex">
        <div className="left-container">
          <Link to="/" className="logoText">
            L&M Logistics
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
  {isLoggedIn ? ( // If user is logged in, display Logout and Account buttons
    <>
      <button onClick={() => navigate("/account")} className="auth-link">
        Account
      </button>
      <button onClick={handleLogout} className="auth-link">
        Logout
      </button>
    </>
  ) : ( // If user is logged out, display Login and Create Account buttons
    <>
      <Link to="/login" className="auth-link">
        Login
      </Link>
      <Link to="/signup" className="auth-link">
        Create Account
      </Link>
    </>
  )}
</div>

          </div>
        </nav>
      </div>
      <div>
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
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(249,68,73,0.7)" />
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
