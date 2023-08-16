import React from "react";
import { ReactDOM } from "react";
import layer4 from "../images/Layer 4.png";
import layer6 from "../images/Layer 6.png";
import layer8 from "../images/Layer 8.png";
const ServiceContent = () => {
  return (
    <>
      <div className="col-md-4 mb-2">
        <img src={layer4} alt="" className="w-100" />
        <div className="shade">
          <h3>Express Exterior </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.{" "}
          </p>
          <button type="" className="btn btn-dark">
            See More
          </button>
        </div>
      </div>
      <div className="col-md-4 mb-2">
        <img src={layer6} alt="" className="w-100" />
        <div className="shade">
          <h3>Auto Detailing</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.{" "}
          </p>
          <button type="" className="btn btn-dark">
            See More
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <img src={layer8} alt="" className="w-100" />
        <div className="shade">
          <h3>Full Service Car Wash</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button type="" className="btn btn-dark">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
