import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    company: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    freightOriginAddress: "",
    freightOriginAddress2: "",
    freightOriginCity: "",
    freightOriginState: "",
    freightOriginZipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/signup", userData);
      if (res.data === "exist") {
        alert("User already exists");
      } else if (res.data === "notexist") {
        navigate("/login", { state: { id: userData.email } });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while signing up");
    }
  };
  return (
    <div className="create-container">
      <div className="createform-container">
        <h1 className="createHeader">Create an Account!</h1>
        <h3>
          Please enter your information below to receive a create an account.
          This information will be saved for future quotes.
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="create-input create-group"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="create-input create-group"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <input
            type="text"
            className="create-input create-group"
            name="company"
            value={userData.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <input
            type="text"
            className="create-input create-group"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            className="create-input create-group"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="tel"
            className="create-input create-group"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input
            type="text"
            className="create-input create-group"
            name="address"
            value={userData.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <input
            type="text"
            className="create-input create-group"
            name="address2"
            value={userData.address2}
            onChange={handleChange}
            placeholder="Address Line 2"
          />
          <input
            type="text"
            className="create-input create-group"
            name="city"
            value={userData.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            type="text"
            className="create-input create-group"
            name="state"
            value={userData.state}
            onChange={handleChange}
            placeholder="State"
          />
          <input
            type="text"
            className="create-input create-group"
            name="zipCode"
            value={userData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
          />
          <input
            type="text"
            className="create-input create-group"
            name="freightOriginAddress"
            value={userData.freightOriginAddress}
            onChange={handleChange}
            placeholder="Freight Origin Address"
          />
          <input
            type="text"
            className="create-input create-group"
            name="freightOriginAddress2"
            value={userData.freightOriginAddress2}
            onChange={handleChange}
            placeholder="Freight Origin Address Line 2"
          />
          <input
            type="text"
            className="create-input create-group"
            name="freightOriginCity"
            value={userData.freightOriginCity}
            onChange={handleChange}
            placeholder="Freight Origin City"
          />
          <input
            type="text"
            className="create-input create-group"
            name="freightOriginState"
            value={userData.freightOriginState}
            onChange={handleChange}
            placeholder="Freight Origin State"
          />
          <input
            type="text"
            className="create-input create-group"
            name="freightOriginZipCode"
            value={userData.freightOriginZipCode}
            onChange={handleChange}
            placeholder="Freight Origin Zip Code"
          />
          <input type="submit" className="create-submit-btn" value="Signup" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
