import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsProduct from "../components/DetailsProduct";
import "./ProductPage.css";
import { useParams } from "react-router-dom";

function ProductPage() {
    const [productData, setproductData] = useState([]);
    const id=useParams().id

    useEffect(() => {
        const product = () => {
            axios
                .get(
                    `http://localhost:8000/api/products/${id}`
                )
                .then((response) => { setproductData(response.data); });
        };
        product();
    }, []);

    return (
        <div className="ProductPage">
            <DetailsProduct {...productData} key={productData.ProductID} />
        </div>
    )
};

export default ProductPage;