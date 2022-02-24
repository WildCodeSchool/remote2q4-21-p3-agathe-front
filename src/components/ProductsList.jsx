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

    return (
        <div className="ProductList">{products.map((product) => 
          <Link to={`/page_produit/${product.ProductID}`}>
            <ProductCard {...product} key={product.ProductID} />
            </Link>
                )}
        </div>
    )
}

export default ProductsList