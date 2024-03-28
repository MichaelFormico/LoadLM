import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/reset-password`,
        userData
      );

      alert("Email has been sent");
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
          <h1 className="createHeader">Reset Password</h1>
          <h3>
            Please enter your email address below to receive password reset
            link.
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
            <input type="submit" className="create-submit-btn" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
