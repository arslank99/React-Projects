import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Header from "./components/header/Header";
import Service from "./components/services/Service";
import Provide from "./components/provide/Provide";
import Choose from "./components/choose-us/Choose";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Provide />
      <Choose />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
