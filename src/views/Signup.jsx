import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for free</h1>
          <input type="text" placeholder="Full Name...." />
          <input type="email" placeholder="Email...." />
          <input type="password" placeholder="Password...." />
          <input type="password" placeholder="Password Confirmation...." />
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Already Registered? <Link to="/react-education/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
