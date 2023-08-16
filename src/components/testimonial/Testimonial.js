import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import border1 from "../images/border1.png";
import Slider from "./Slider";
const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center">
              <h1>
                <span className="text-dark">Testimonial</span>
              </h1>
              <img src={border1} alt="" />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <Slider />
      </div>
    </>
  );
};

export default Testimonial;
