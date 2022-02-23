import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import "./Catalogue.css";

function Catalogue() {
  return (
    <div>
        <Navbar />
        <ProductsList />
        <Footer />
    </div>
  )
}

export default Catalogue