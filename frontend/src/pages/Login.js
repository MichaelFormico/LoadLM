import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate(); // Use navigate instead of history
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (response.data.token) {
        // Store the JWT token in local storage
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true); // Update isLoggedIn state to true
        // Redirect the user to the homepage or any other desired route
        navigate("/", { state: { id: email } });
        window.location.reload();
      } else {
        alert("There was a problem logging in.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem logging in.");
    }
  }

  return (
    <div className="loginContainer">
      <form className="login-form" onSubmit={submit}>
        <h2 className="loginTitle">Login</h2>
        <input
          type="email"
          className="login-input login-group login-label"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="login-input login-group login-label"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <a className="resetpass" href="/reset-password">
          Reset Password
        </a>
      </form>
    </div>
  );
}

export default Login;
