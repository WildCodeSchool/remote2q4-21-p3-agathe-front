import React from "react";
import Introduction from "../components/home/Introduction";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Presentation from "../components/home/Presentation";
import ProductsList from "../components/ProductsList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Introduction/>
      <div id="homepage" className="page home_page">
        <Navbar />
        <Presentation />
        <div className="home_products">
          <h2>Nos produits</h2>
          <ProductsList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
