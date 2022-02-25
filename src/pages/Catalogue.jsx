import React from "react";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import ProductsList from "../components/ProductsList";
import "./Catalogue.css";

function Catalogue() {
  return (
    <div className="Catalogue">
      <Navbar />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default Catalogue;
