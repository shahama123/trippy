import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/service.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      {/* <div className="flex justify-center items-center pb-10">
        <button
          className="bg-black border rounded-md text-white font-bold px-8 text-lg py-2"
          onClick={() => navigate("/")}
        >
          View More
        </button>
      </div> */}

      <Footer />
    </div>
  );
};

export default Service;
