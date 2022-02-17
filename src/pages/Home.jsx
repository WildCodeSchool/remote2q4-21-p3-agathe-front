import React from "react";
import "./Home.css";
import Presentation from "../components/Presentation";

const Home = () => {
  return (
    <div className="home">
      <div className="navbar">Navbar</div>
      <div className="picture">Picture</div>
      <Presentation />
      <div className="carousel">Carousel products</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default Home;
