import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsProduct from "../components/DetailsProduct";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ProductPage.css";

function ProductPage() {
    const [productData, setproductData] = useState([]);
    const id = useParams().id

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
            <Navbar />
            <DetailsProduct {...productData} key={productData.ProductID} />
            <Footer />
        </div>
    )
};

export default ProductPage;