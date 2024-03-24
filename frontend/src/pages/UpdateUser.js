import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UpdateUser.css";

const UpdateUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
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

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/get-user-data", {
        headers: {
          Authentication: "Bearer " + localStorage.getItem("token"),
        },
      });

      const userData = response.data;
      console.log("User Data:", userData);

      setUserData({
        ...userData,
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
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/user/update",
        userData,
      );
      alert("Details has been updated successfully");
    } catch (err) {
      if (err.response == undefined && err.response.status == undefined) {
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
    <>
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
            <input type="submit" className="create-submit-btn" value="Update" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
