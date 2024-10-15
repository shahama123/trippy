import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinaton from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Fvourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destinaton />

      <Trip />
      <div className="flex justify-center items-center pb-10">
        <button
          className="bg-black border rounded-md text-white font-bold px-8 text-lg py-2"
          onClick={() => navigate("/service")}
        >
          View More
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Home;
