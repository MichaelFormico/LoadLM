import React from 'react';
import './About.css'; // Importing the CSS file
import imageSrc from '../shakinghands.jpeg'; // Import your image file

const About = () => {
  return (
    <div className="about-container">
      <div className="max-w-md">
        <h1 className="about-title">Our Mission</h1>
        <p className="about-description">
          With 40 years in the logistics industry, we strive to be the most efficient company in the industry. We offer a seamless, smooth experience from reputable experts. With a hands-on, personal approach, we are the ones to trust with all of your logistical needs.
        </p>
        <img src={imageSrc} alt="Shaking Hands" className="about-image" />
      </div>
    </div>
  );
};

export default About;

