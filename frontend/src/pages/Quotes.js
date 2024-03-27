import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Quotes.css";

const Quotes = () => {
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
      const response = await axios.get(
        "http://localhost:8000/get-user-data",
        {
          headers: {
            Authentication: "Bearer " + localStorage.getItem("token"),
          },
        },
      );

      const userData = response.data;
      console.log("User Data:", userData);

      setFormData({
        ...formData,
        company: userData.company || "", // Populate the company field if it exists, otherwise leave it blank
        firstName: userData.firstName || "", // Populate the firstName field if it exists, otherwise leave it blank
        lastName: userData.lastName || "", // Populate the lastName field if it exists, otherwise leave it blank
        email: userData.email || "", // Populate the email field if it exists, otherwise leave it blank
        phone: userData.phone || "", // Populate the phone field if it exists, otherwise leave it blank
        address: userData.address || "", // Populate the address field if it exists, otherwise leave it blank
        address2: userData.address2 || "", // Populate the addressLine2 field if it exists, otherwise leave it blank
        city: userData.city || "", // Populate the city field if it exists, otherwise leave it blank
        state: userData.state || "", // Populate the state field if it exists, otherwise leave it blank
        zipCode: userData.zipCode || "", // Populate the zipCode field if it exists, otherwise leave it blank
        freightOriginAddress: userData.freightOriginAddress || "", // Populate the freightOriginAddress field if it exists, otherwise leave it blank
        freightOriginAddressLine2: userData.freightOriginAddressLine2 || "", // Populate the freightOriginAddressLine2 field if it exists, otherwise leave it blank
        freightOriginCity: userData.freightOriginCity || "", // Populate the freightOriginCity field if it exists, otherwise leave it blank
        freightOriginState: userData.freightOriginState || "", // Populate the freightOriginState field if it exists, otherwise leave it blank
        freightOriginZipCode: userData.freightOriginZipCode || "", // Populate the freightOriginZipCode field if it exists, otherwise leave it blank
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
    // Submit the form data to your backend API
    // Example:
    // await axios.post("http://localhost:8000/submit-quote", formData);
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
          <h3>Please enter your information below to receive a quote.</h3>
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
              name="addressLine2"
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
          <div className="quote-areas btn-space">Product</div>
          <div className="quote-group">
            <label className="quote-label">Product</label>
            <input
              className="quote-input"
              type="text"
              name="product"
              placeholder="Product"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Product Value</label>
            <input
              className="quote-input"
              type="text"
              name="productValue"
              placeholder="Product Value"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-areas btn-space">Destination Address</div>
          <div className="quote-group">
            <label className="quote-label">Freight Destination Address</label>
            <input
              className="quote-input"
              type="text"
              name="freightDestinationAddress"
              placeholder="Freight Destination Address"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Freight Destination Address 2</label>
            <input
              className="quote-input"
              type="text"
              name="freightDestinationAddress2"
              placeholder="Freight Destination Address 2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Freight Destination City</label>
            <input
              className="quote-input"
              type="text"
              name="freightDestinationCity"
              placeholder="Freight Destination City"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Freight Destination State</label>
            <input
              className="quote-input"
              type="text"
              name="freightDestinationState"
              placeholder="Freight Destination State"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Freight Destination Zip Code</label>
            <input
              className="quote-input"
              type="text"
              name="freightDestinationZipCode"
              placeholder="Freight Destination Zip Code"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-areas btn-space">Additional Information</div>
          <div className="quote-group">
            <label className="quote-label">Pickup Date</label>
            <input
              className="quote-input"
              type="text"
              name="pickupDate"
              placeholder="Pick Up Date"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Delivery Date</label>
            <input
              className="quote-input"
              type="text"
              name="deliveryDate"
              placeholder="Delivery Date"
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-group">
            <label className="quote-label">Additional Information</label>
            <input
              className="quote-input"
              type="text"
              name="additionalInformation"
              placeholder="Additional Information"
              onChange={handleChange}
              required
            />
          </div>
          <div className="btn-space">
            <button type="submit" className="quote-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quotes;
