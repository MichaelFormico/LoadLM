import React from 'react';
import videoSource from '../Digital World Map.mp4';
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="video-background">
      <h1 className="lm">L & M Logistics</h1>
      <video autoPlay loop muted playsInline className="video">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h2>Secure Sustainable Logistics</h2>
        <p>Moving forward today to secure tomorrow</p>
      </div>
    </div>
  );
};

export default Home;

