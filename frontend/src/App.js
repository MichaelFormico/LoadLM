import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Quotes from "./pages/Quotes.js";
import Services from "./pages/Services.js";
import Footer from "./pages/Footer.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Account from "./pages/Account.js";
import ResetPassword from "./pages/ResetPassword.js";
import UpdateUser from "./pages/UpdateUser.js";
import ChangePassword from "./pages/ChangePassword.js";

import "./App.css";

const App = () => {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset/:token" element={<ChangePassword />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
