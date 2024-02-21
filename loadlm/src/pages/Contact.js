import React from 'react';
import gmailIcon from '../icons8-gmail-48.png';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="contact-text">
        Are you having issues? Questions?
      </p>
      <p className="contact-text">
        Please contact us!
      </p>

      <div className="contact-box">
        <p className="contact-title">Contact us by phone!</p>
        <a className="phonecolor" href="tel:+14083163446">408-316-3446</a>
        <p className="contact-title">Contact us by e-mail!</p>
        <div className="contact-icons">
          <a href="mailto:JR@loadlm.com" target="_blank" rel="noopener noreferrer">
            <img
              className="contact-icon"
              src={gmailIcon}
              alt="Gmail logo"
            />
            <span>JR</span>
          </a>
          <a href="mailto:gv@loadlm.com" target="_blank" rel="noopener noreferrer">
            <img
              className="contact-icon"
              src={gmailIcon}
              alt="Gmail logo"
            />
            <span>GV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
