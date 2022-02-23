import React from "react";
import "./Home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import ProductsList from "../components/ProductsList";
import logo from "../assets/Logo Elfenn cosmétiques.png";

const Home = () => {
  return (
    <div className="home">
      <div className="page access">
        <div className="brand">
          <img src={logo} alt="logo" />
          <p>Elfenn cosmétiques</p>
        </div>
        <div className="shop_btn">
          <h1>Inspiré par les éléments</h1>
          <button>Boutique</button>
        </div>
        <div className="homepage_btn">
          <p>Accueil</p>
          <a className="arrow" href="#homepage"></a>
        </div>
      </div>
      <div id="homepage" className="page home_page">
          <Navbar />
        {/* <div className="picture">Picture</div> */}
        <Presentation />
        <div className="carousel">
          {" "}
          <ProductsList />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
