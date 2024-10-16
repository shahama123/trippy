import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/contactnew.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
