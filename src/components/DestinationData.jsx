import { Component } from "react";
import "./Destination.css";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>

          <div className="image">
            <img
              // style={{ width: "300px" }}
              alt="img"
              src={this.props.img1}
            />
            <img
              // style={{ width: "267px" }}
              alt="img"
              src={this.props.img2}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
