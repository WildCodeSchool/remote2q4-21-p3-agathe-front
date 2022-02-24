import React from "react";
import Introduction from "../components/home/Introduction";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Presentation from "../components/Presentation";
import ProductsList from "../components/ProductsList";
import "./Home.css";

const Home = () => {
  return (
    
    <div className="home">
      <div id="homepage" className="page home_page">
        <Introduction/>
        <Navbar />
        <Presentation />
        <div className="carousel">
          <ProductsList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
