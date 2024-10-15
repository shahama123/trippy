import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="form-container">
        <h1 className="text-2xl text-center">Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="3"></textarea>
          <div className="flex justify-center items-center">
            {" "}
            <button className="border border-white bg-black text-white px-4 py-2 font-semibold  ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
