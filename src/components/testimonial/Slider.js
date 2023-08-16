import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import Slide from "../images/slide.png";
const Slider = () => {
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 slider-shadow">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Slide} alt="Los Angeles" className="d-block" />
                  <div className="carousel-caption text-dark">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10 p-0">
                          <p>
                            it is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters.
                          </p>
                          <h3>New York</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Slide} alt="Chicago" className="d-block" />
                  <div className="carousel-caption text-dark">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10 p-0">
                          <p>
                            it is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters.
                          </p>
                          <h3>Los Angeles</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Slide} alt="New York" className="d-block" />
                  <div className="carousel-caption text-dark">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10 p-0">
                          <p>
                            it is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters.
                          </p>
                          <h3>Las Vegas</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon-custom">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon-custom">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
