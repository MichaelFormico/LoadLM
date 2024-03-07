import React, { useState } from "react";
import "./Quotes.css";

const Quotes = () => {
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
    freightDestinationAddress: "",
    freightDestinationAddressLine2: "",
    freightDestinationCity: "",
    freightDestinationState: "",
    freightDestinationZipCode: "",
    pickupDate: "",
    deliveryDate: "",
    additionalInformation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="quotes-container">
      <div className="quoteform-container">
        <form
          action="https://formspree.io/f/mgegyrgn"
          method="POST"
          className="quote-form"
        >
          <h1 className="quoteHeader">Get a Quote!</h1>
          <h3>
            Please enter your information below to receive a quote.
          </h3>
          <input
            type="hidden"
            name="_subject"
            value="New Quote Form Submission"
          />
          <input type="hidden" name="_cc" value="montazuma4me@gmail.com" />
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
          <div className="quote-areas">Name</div>
          <div className="quote-group">
            <label className="quote-label">First Name</label>
            <input
              className="quote-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstname}
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
          <div className="quote-areas">Address</div>
          <div className="quote-group">
            <label className="quote-label">Street Address</label>
            <input
              className="quote-input"
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Street Address 2</label>
            <input
              className="quote-input"
              type="text"
              name="addressLine2"
              placeholder="Street Address 2"
              value={formData.streetAddress2}
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
          <button type="submit" className="quote-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quotes;