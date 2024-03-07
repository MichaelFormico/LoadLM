import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Quotes from './pages/Quotes.js';
import Services from './pages/Services.js';
import Footer from './pages/Footer.js';
import LoginForm from './pages/Login.js';
import Create from './pages/Create.js';
import './App.css'; // Import your CSS file with the scrollable-container class

const App = () => {
  return (
    <Router basename="/LoadLM"> {/* Set the basename to /LoadLM */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
