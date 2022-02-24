import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsProduct from "../components/DetailsProduct";
import { useParams } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import "./ProductPage.css";
// require('dotenv').config();

const BASE_URL = process.env.REACT_APP_URL_SERVER;

function ProductPage() {
    const [productData, setproductData] = useState([]);
    const id = useParams().id

    useEffect(() => {
        const product = () => {
            axios
                .get(`${BASE_URL}/api/products/${id}`)
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