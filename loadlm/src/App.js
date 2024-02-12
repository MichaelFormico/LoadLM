import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Quotes from './pages/Quotes.js';
import Services from './pages/Services.js';
import Footer from './pages/Footer.js';
import './App.css'; // Import your CSS file with the scrollable-container class

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router basename="/">
        <Header handlePageChange={handlePageChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer/>
    </Router>
  );
};

export default App;