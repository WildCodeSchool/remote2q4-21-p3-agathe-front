import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductsList.css"

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsList = () => {
            axios
                .get(
                    `http://localhost:8000/api/products`
                ).then((response) => { setProducts(response.data); });
        };
        productsList();
    }, []);

    return (
        <div>{products.map((product) => (
            <div key={product.ProductID}>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.price}</div>
            </div>
        ))}
        </div>
    )
 }

    export default ProductsList


