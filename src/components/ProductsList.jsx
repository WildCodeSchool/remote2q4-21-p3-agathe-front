import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "./ProductsList.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsList = () => {
      axios
        .get(`${BASE_URL}/api/products`)
        .then(response => setProducts(response.data));
    };
    productsList();
  }, []);

  const randomProducts = [];
    function getRandomProducts() {
        if (products.length) {
            for (let i = 0; randomProducts.length < 3; i++) {
                const j = Math.floor(Math.random() * products.length);
                if (!randomProducts.includes(products[j]) && products[j].id !== 4) {
                    randomProducts.push(products[j])
                };
            }
        }
    }

    getRandomProducts();

    return (
        <div className="ProductList">{randomProducts.map((product) => 
          <Link className="ProductList-Link" to={`/page_produit/${product.ProductID}`}>
            <ProductCard {...product} key={product.ProductID} />
            </Link>
                )}
        </div>
    )
}

export default ProductsList