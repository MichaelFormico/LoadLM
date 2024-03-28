import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    token: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const { token } = useParams();

  useEffect(() => {
    // Show loading spinner and disable form
    verifyToken()
      .then((res) => {
        console.log("Token verified");
        // Hide loading spinner and enable form
      })
      .catch((err) => {
        // Hide loading spinner and show error message
        console.log(err);
      });
  }, []);

  const verifyToken = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/change-password/` + token
        );

        resolve(true);
      } catch (err) {
        reject(err);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/change-password/` + token,
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
              type="password"
              className="create-input create-group"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="************"
              required
            />
            <input
              type="password"
              className="create-input create-group"
              name="confirm_password"
              value={userData.confirm_password}
              onChange={handleChange}
              placeholder="************"
              required
            />
            <input type="submit" className="create-submit-btn" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
