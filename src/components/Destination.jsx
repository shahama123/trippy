import React from "react";
import "./Destination.css";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import DestinationData from "./DestinationData";

const Destinaton = () => {
  return (
    <div>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the oppurtunity to see a lot,within a time frame.</p>
      </div>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque, sed aut, maxime perferendis pariatur culpa quisquam magnam iure, eaque provident? Adipisci asperiores, ad quidem illo beatae assumenda sunt voluptates.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque, sed aut, maxime perferendis pariatur culpa quisquam magnam iure, eaque provident? Adipisci asperiores, ad quidem illo beatae assumenda sunt voluptates."
        img1={Image1}
        img2={Image2}
        img3={Image3}
        img4={Image4}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque, sed aut, maxime perferendis pariatur culpa quisquam magnam iure, eaque provident? Adipisci asperiores, ad quidem illo beatae assumenda sunt voluptates.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus itaque, sed aut, maxime perferendis pariatur culpa quisquam magnam iure, eaque provident? Adipisci asperiores, ad quidem illo beatae assumenda sunt voluptates."
        img1={Image1}
        img2={Image2}
        img3={Image3}
        img4={Image4}
      />
    </div>
  );
};

export default Destinaton;
