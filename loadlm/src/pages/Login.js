import React from 'react';
import './Login.css';

const LoginForm = () => {
  return (
    <div className="loginContainer">
      <form className="login-form">
      <h2 className='loginTitle'>Login</h2>
        <div className="login-input">
          <label className="login-label" htmlFor="email">Email:</label>
          <input className="login-input-field" type="email" id="email" name="email" />
        </div>
        <div className="login-input">
          <label className="login-label" htmlFor="password">Password:</label>
          <input className="login-input-field" type="password" id="password" name="password" />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
