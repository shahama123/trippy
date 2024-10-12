import "./Trip.css";
import TripData from "./TripData";
import React from "react";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image9.jpg";
import Image8 from "../assets/image8.jpg";
import Image9 from "../assets/image7.jpg";
import Image10 from "../assets/image10.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps </p>
      <div className="tripcard">
        <TripData
          image={Image5}
          heading="Trip in Indonesia"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dignissimos quos consequatur reprehenderit blanditiis nesciunt sequi consequuntur nisi vel? Autem inventore corporis quibusdam totam. Minima beatae nulla expedita consequuntur fugiat."
        />

        <TripData
          image={Image6}
          heading="Trip in Malasia"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dignissimos quos consequatur reprehenderit blanditiis nesciunt sequi consequuntur nisi vel? Autem inventore corporis quibusdam totam. Minima beatae nulla expedita consequuntur fugiat."
        />

        <TripData
          image={Image7}
          heading="Trip in France"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dignissimos quos consequatur reprehenderit blanditiis nesciunt sequi consequuntur nisi vel? Autem inventore corporis quibusdam totam. Minima beatae nulla expedita consequuntur fugiat."
        />
      </div>

      <div className="tripcard">
        <TripData
          image={Image8}
          heading="Trip in Myanmar"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dignissimos quos consequatur reprehenderit blanditiis nesciunt sequi consequuntur nisi vel? Autem inventore corporis quibusdam totam. Minima beatae nulla expedita consequuntur fugiat."
        />

        <TripData
          image={Image9}
          heading="Trip in Europe"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dignissimos quos consequatur reprehenderit blanditiis nesciunt sequi consequuntur nisi vel? Autem inventore corporis quibusdam totam. Minima beatae nulla expedita consequuntur fugiat."
        />

        <TripData
          image={Image10}
          heading="Trip in Singapore"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dignissimos quos consequatur reprehenderit blanditiis nesciunt sequi consequuntur nisi vel? Autem inventore corporis quibusdam totam. Minima beatae nulla expedita consequuntur fugiat."
        />
      </div>
    </div>
  );
};

export default Trip;
