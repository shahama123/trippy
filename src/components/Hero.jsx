import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img alt="heroimg" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="button-container">
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
