import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailsProduct from "../components/products/DetailsProduct";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

function ProductPage() {
    const [productData, setproductData] = useState({});
    const id = useParams().id

    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/products/${id}`)
            .then(response => setproductData(response.data));
    }, []);

    return (
        <DetailsProduct {...productData} key={productData.ProductID} />
    )
};

export default ProductPage;