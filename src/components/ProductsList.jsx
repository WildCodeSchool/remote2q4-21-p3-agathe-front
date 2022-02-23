import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsList = () => {
      axios.get(`http://localhost:8000/api/products`).then((response) => {
        setProducts(response.data);
      });
    };
    productsList();
  }, []);

    return (
        <div className="ProductList">{products.map((product) => 
            <ProductCard {...product} key={product.ProductID} />
                )}
        </div>
    )
}

export default ProductsList

