import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductPage.css";

function ProductPage() {
    const [resultList, setResultList] = useState([]);
    /* const [showProduct, setshowProduct] = useState([]);*/
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const ProductPage = () => {
            axios
                .get(
                    `http://localhost:8000/api/products`
                )
                .then((response) => { setResultList(response.data); });
            setResultList();
        }});
};

export default ProductPage;
