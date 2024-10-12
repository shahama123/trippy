import React from "react";
import "../routes/SignUp.css";
import { useState } from "react";

const SignUpData = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signup">
      <h1>Start your free 14-day trial of Trippy! </h1>
      <div className="form">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            placeholder="Email address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            placeholder="re-enter password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpData;
