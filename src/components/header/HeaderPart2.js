import React from "react";
import { ReactDOM } from "react";
import "../../index.css";
import layer1 from "../images/layer1.jpg";
import layer2 from "../images/layer2.jpg";
import layer3 from "../images/layer3.jpg";
import layer4 from "../images/layer4.jpg";
const HeaderPart2 = () => {
  return (
    <>
      <div className="col-md-6">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={layer1} className="w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={layer2} className="w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={layer3} className="w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={layer4} className="w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderPart2;
