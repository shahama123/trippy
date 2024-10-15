import React from "react";
import "../routes/SignUp.css";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const SignUpData = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Navbar />
      <div className="signup">
        <h1 className="text-xl">Start your free 14-day trial of Trippy! </h1>
        <div className="form">
          <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="text-xl pb-5 font-bold">Sign Up</h2>
            <div className="">
              <label className="" htmlFor="">
                Email
              </label>
              <input
                placeholder="Email address"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="">Password</label>
              <input
                placeholder="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
            </div>
            <div className="flex justify-center pt-4">
              <button
                className="border border-black bg-black text-white px-4 py-2 font-semibold"
                onClick={() => navigate("/")}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpData;
