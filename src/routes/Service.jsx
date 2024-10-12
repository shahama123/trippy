import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/service.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
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
      <div className="flex justify-center items-center pb-10">
        <button className="bg-black border rounded-md text-white font-bold hover:text-black px-8 text-lg py-2 hover:bg-white hover:border-black">
          View More
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
