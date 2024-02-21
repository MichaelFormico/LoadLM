import React from 'react';
import './Services.css'; // Import your CSS file
import videoSource from '../Aerial Semi Truck Footage.mp4'; // Import your video file

const Services = () => {
  return (
    <div className="services-container">
      <div className="text-container">
        <h1 className="title">Services</h1>
        <p className="description">
          As the sun rose over the horizon, casting a warm glow on the landscape, a majestic elephant emerged from the dense jungle, its massive trunk reaching for a ripe banana hanging from a nearby tree. Meanwhile, a curious child sat cross-legged on the ground, typing away on a sleek laptop, immersed in the wonders of technology. The air was filled with the scent of freshly bloomed flowers, and the sound of chirping birds echoed through the serene forest. In the distance, a shimmering ocean stretched as far as the eye could see, its azure waters sparkling in the sunlight.
        </p>
      </div>
      <div className="video-container">
        <video autoPlay loop muted className="video-overlay">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Services;
