import React, { useState } from "react";
import "./Create.css";

const Create = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    product: "",
    productValue: "",
    freightOriginAddress: "",
    freightOriginAddressLine2: "",
    freightOriginCity: "",
    freightOriginState: "",
    freightOriginZipCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="create-container">
      <div className="createform-container">
        <form
          action="https://formspree.io/f/mgegyrgn"
          method="POST"
          className="create-form"
        >
          <h1 className="createHeader">Create an Account!</h1>
          <h3>
            Please enter your information below to receive a create an account. This information will be saved for future quotes.
          </h3>
          <input
            type="hidden"
            name="_subject"
            value="New Quote Form Submission"
          />
          <input type="hidden" name="_cc" value="montazuma4me@gmail.com" />
          <div className="create-group">
            <label className="quote-label">Company</label>
            <input
              className="create-input"
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-areas">Name</div>
          <div className="create-group">
            <label className="create-label">First Name</label>
            <input
              className="create-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-group">
            <label className="create-label">Last Name</label>
            <input
              className="create-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-group">
            <label className="create-label">E-Mail</label>
            <input
              className="create-input"
              type="text"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-group">
            <label className="create-label">Phone Number</label>
            <input
              className="create-input"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-areas">Address</div>
          <div className="create-group">
            <label className="create-label">Street Address</label>
            <input
              className="create-input"
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-group">
            <label className="create-label">Street Address 2</label>
            <input
              className="create-input"
              type="text"
              name="addressLine2"
              placeholder="Street Address 2"
              value={formData.streetAddress2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-group">
            <label className="create-label">City</label>
            <input
              className="create-input"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-group">
            <label className="create-label">State / Province</label>
            <input
              className="create-input"
              type="text"
              name="state"
              placeholder="State_Province"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-group">
            <label className="create-label">Postal / Zip Code</label>
            <input
              className="create-input"
              type="text"
              name="zipCode"
              placeholder="Postal_Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="create-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
