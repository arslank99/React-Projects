import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import Logo from "../components/images/logo.png";
import "../index.css";
const Navbar = () => {
  const NavbarRef = useRef();
  const menuRef = useRef();

  const NavbarHandler = () => {
    NavbarRef.current.classList.toggle("active");
    menuRef.current.classList.remove("active");
  };
  const menuHandler = () => {
    NavbarRef.current.classList.remove("active");
    menuRef.current.classList.toggle("active");
  };

  return (
    <>
      <div className="App">
        <section id="section" className="bg-custom">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <nav className="custom-navbar" ref={menuRef}>
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Quality</a>
            <a href="">Choose</a>
            <a href="">testimonial</a>
            <a href="">contact us</a>
          </nav>
          {/* Icons divs */}
          <div className="icons text-light">
            <div className="fa fa-search" onClick={NavbarHandler}></div>
            <div
              className="fa fa-bars"
              id="menu-btn"
              onClick={menuHandler}
            ></div>
          </div>
          {/* header input */}
          <div className="search-bar" ref={NavbarRef}>
            <input type="search" placeholder="Search Here" id="search-box" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
