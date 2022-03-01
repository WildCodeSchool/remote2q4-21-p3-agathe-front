import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

function ProductsList({ randomize }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsList = () => {
      axios
        .get(`${BASE_URL}/api/products`)
        .then((response) => setProducts(response.data));
    };
    productsList();
  }, []);

  let randomProducts = [];
  function getRandomProducts() {
    if (products.length) {
      for (let i = 0; randomProducts.length < 3; i++) {
        const j = Math.floor(Math.random() * products.length);
        if (!randomProducts.includes(products[j])) {
          randomProducts.push(products[j]);
        }
      }
    }
  }

  if (randomize) getRandomProducts();
  else randomProducts = [...products];

  return (
    <div className={randomize === true ? "ProductList" : "CatalogueList"}>
      {randomProducts.map((product) => (
        <ProductCard
          className={randomize === true ? "ProductCard" : "CatalogueCard"}
          {...product}
          key={product.ProductID}
        />
      ))}
    </div>
  );
}

export default ProductsList;
