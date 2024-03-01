import React from 'react';
import './Services.css'; // Import your CSS file
import videoSource from '../Aerial Semi Truck Footage.mp4'; // Import your video file

const Services = () => {
  return (
    <div className="services-container">
      <div className="text-container">
        <h1 className="title">Services</h1>
        <p className="description">
        At L & M Logistics, we specialize in efficiently managing the journey of your products from their origin to their destination. Our dedicated team handles transportation logistics, warehouse operations, and customs clearance, ensuring swift and seamless delivery. With cutting-edge technology, we provide real-time visibility into your supply chain and offer personalized support to meet your unique needs. Trust us to deliver your products safely, on time, and with utmost care.
        </p>
      </div>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-overlay">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Services;

