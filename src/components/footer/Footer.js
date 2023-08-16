import React from "react";
import { ReactDOM } from "react";
import "../../index.css";
const Footer = () => {
  return (
    <>
      <div id="Footer" className="bg-dark text-white mt-5">
        <div className="container">
          <div className="row">
            {/* First Column */}
            <div className="col-md-3">
              <h4>Contact Us</h4>
              <a>
                <i class="fa fa-map-marker me-2" aria-hidden="true"></i>
                <span>Location</span>
              </a>
              <br />
              <a>
                <i class="fa fa-phone me-2" aria-hidden="true"></i>
                <span>Call : +01 1234567</span>
              </a>
              <br />
              <a>
                <i class="fa fa-envelope-o me-2" aria-hidden="true"></i>
                <span>Demo@gmail.com</span>
              </a>
            </div>
            {/* 2nd Column */}
            <div class="col-md-3">
              <h4>Useful Links</h4>
              <a href="">Home</a>
              <br />
              <a href="">Services</a>
              <br />
              <a href="">Quality</a>
              <br />
              <a href="">Choose</a>
              <br />
              <a href="">Testimonial</a>
              <br />
              <a href="">Contact Us</a>
              <br />
            </div>
            {/* 3rd Column */}
            <div class="col-md-3">
              <h4>Opening Time</h4>
              <p>Mon : 7:00am to Sat : 9:00pm</p>
              <p>Mon : 7:00am to Sat : 9:00pm</p>
              <p>Mon : 7:00am to Sat : 9:00pm</p>
            </div>
            {/* 4th Column */}
            <div class="col-md-3">
              <h4>Newsletter</h4>
              <form action="" method="">
                <input type="Seach" class="form-control" placeholder="Email" />
                <input
                  type="submit"
                  class="btn btn-primary px-5 mt-2"
                  value="subscribe"
                />
              </form>
            </div>
          </div>
          {/* Second Row Start Here */}
          <div className="row my-5  text-center" id="icons">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-md-4"></div>
          </div>
          {/* Third Row Start Here */}
          <div class="row text-center">
            <div class="col-md-12">
              <h6>© 2020 All Rights Reserved. Design by Free Html Templates</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
