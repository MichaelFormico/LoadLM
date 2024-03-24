import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Account.css";

const Account = () => {
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    freightOriginAddress: "",
    freightOriginAddressLine2: "",
    freightOriginCity: "",
    freightOriginState: "",
    freightOriginZipCode: "",
    pickupDate: "",
    deliveryDate: "",
    additionalInformation: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get-user-data", {
        headers: {
          authentication: "Bearer " + localStorage.getItem("token"),
        },
      });

      const userData = response.data;
      setFormData({
        ...formData,
        company: userData.company || "",
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
        address2: userData.address2 || "",
        city: userData.city || "",
        state: userData.state || "",
        zipCode: userData.zipCode || "",
        freightOriginAddress: userData.freightOriginAddress || "",
        freightOriginAddressLine2: userData.freightOriginAddressLine2 || "",
        freightOriginCity: userData.freightOriginCity || "",
        freightOriginState: userData.freightOriginState || "",
        freightOriginZipCode: userData.freightOriginZipCode || "",
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/user/update",
        formData,
        {
          headers: {
            authentication: "Bearer " + localStorage.getItem("token"),
          },
        },
      );
      alert("Details has been updated successfully");
    } catch (err) {
      console.log(err);
      if (err.response == undefined) {
        alert("An error occurred");
        return;
      }

      if (err.response.status >= 500) {
        alert("An internal server error occurred");
        return;
      }

      if (
        err.response.data != undefined &&
        err.response.data.error != undefined
      ) {
        alert(err.response.data.error);
        return;
      }

      alert("An error occurred");
    }
  };

  return (
    <div className="account-container">
      <div className="quoteform-container">
        <form className="quote-form" onSubmit={handleSubmit}>
          <h1 className="quoteHeader">Edit Profile</h1>
          <h3>Please update any changes to your saved information here</h3>
          <div className="quote-group">
            <label className="quote-label">Company</label>
            <input
              className="quote-input"
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-areas btn-space">Name</div>
          <div className="quote-group">
            <label className="quote-label">First Name</label>
            <input
              className="quote-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Last Name</label>
            <input
              className="quote-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">E-Mail</label>
            <input
              className="quote-input"
              type="text"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Phone Number</label>
            <input
              className="quote-input"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-areas btn-space">Address</div>
          <div className="quote-group">
            <label className="quote-label">Street Address</label>
            <input
              className="quote-input"
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Street Address 2</label>
            <input
              className="quote-input"
              type="text"
              name="address2"
              placeholder="Street Address 2"
              value={formData.address2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">City</label>
            <input
              className="quote-input"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">State / Province</label>
            <input
              className="quote-input"
              type="text"
              name="state"
              placeholder="State_Province"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Postal / Zip Code</label>
            <input
              className="quote-input"
              type="text"
              name="zipCode"
              placeholder="Postal_Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="btn-space">
            <button type="submit" className="quote-submit-btn">
              Submit Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
