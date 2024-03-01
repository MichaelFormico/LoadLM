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
      <div className="form-container">
        <form
          action="https://formspree.io/f/mgegyrgn"
          method="POST"
          className="quote-form"
        >
          <h1 className="fontcolor geta">Get a Quote!</h1>
          <h3 className="fontcolor">
            Please enter your information below to receive a quote.
          </h3>
          <input
            type="hidden"
            name="_subject"
            value="New Quote Form Submission"
          />
          <input type="hidden" name="_cc" value="montazuma4me@gmail.com" />
          <div className="form-group">
            <label className="fontcolor">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="areas">Name</div>
          <div className="form-group">
            <label className="fontcolor">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">E-Mail</label>
            <input
              type="text"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="areas">Address</div>
          <div className="form-group">
            <label className="fontcolor">Street Address</label>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Street Address 2</label>
            <input
              type="text"
              name="addressLine2"
              placeholder="Street Address 2"
              value={formData.streetAddress2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">State / Province</label>
            <input
              type="text"
              name="state"
              placeholder="State_Province"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Postal / Zip Code</label>
            <input
              type="text"
              name="zipCode"
              placeholder="Postal_Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="areas">Freight Information</div>
          <div className="form-group">
            <label className="fontcolor">Product</label>
            <input
              type="text"
              name="product"
              placeholder="Product"
              value={formData.product}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Product Value</label>
            <input
              type="text"
              name="productValue"
              placeholder="Product Value"
              value={formData.productValue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="areas">Freight Origin</div>
          <div className="form-group">
            <label className="fontcolor">Street Address</label>
            <input
              type="text"
              name="freightOriginAddress"
              placeholder="Street Address"
              value={formData.streetAddressOrigin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Street Address 2</label>
            <input
              type="text"
              name="freightOriginAddressLine2"
              placeholder="Street Address 2"
              value={formData.streetAddress2Origin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">City</label>
            <input
              type="text"
              name="freightOriginCity"
              placeholder="City"
              value={formData.cityOrigin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">State / Province</label>
            <input
              type="text"
              name="freightOriginState"
              placeholder="State / Province"
              value={formData.stateOrigin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Postal / Zip Code</label>
            <input
              type="text"
              name="freightOriginZipCode"
              placeholder="Postal / Zip Code"
              value={formData.zipCodeOrigin}
              onChange={handleChange}
              required
            />
          </div>
          <div className="areas">Freight Destination</div>
          <div className="form-group">
            <label className="fontcolor">Street Address</label>
            <input
              type="text"
              name="freightDestinationAddress"
              placeholder="Street Address"
              value={formData.streetAddressDest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Street Address 2</label>
            <input
              type="text"
              name="freightDestinationAddressLine2"
              placeholder="Street Address 2"
              value={formData.streetAddress2Dest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">City</label>
            <input
              type="text"
              name="freightDestinationCity"
              placeholder="City"
              value={formData.cityDest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">State / Province</label>
            <input
              type="text"
              name="freightDestinationState"
              placeholder="State / Province"
              value={formData.stateDest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Postal / Zip Code</label>
            <input
              type="text"
              name="freightDestinationZipCode"
              placeholder="Postal / Zip Code"
              value={formData.zipCodeDest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="areas">Delivery</div>
          <div className="form-group">
            <label className="fontcolor">Pickup Date</label>
            <input
              type="text"
              name="pickupDate"
              placeholder="Pickup Date"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Delivery Date</label>
            <input
              type="text"
              name="deliveryDate"
              placeholder="Delivery Date"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="fontcolor">Additonal Information</label>
            <input
              type="text"
              name="additionalInformation"
              placeholder="Additional Information"
              value={formData.addInfo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quotes;
