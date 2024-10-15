import "./Trip.css";

import React from "react";

const TripData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.image} />
      </div>
      <h4 className="text-center">{props.heading}</h4>
      <p>{props.text} </p>
    </div>
  );
};

export default TripData;
