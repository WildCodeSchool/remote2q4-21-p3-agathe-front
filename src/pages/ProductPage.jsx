import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsProduct from "../components/DetailsProduct";
import "./ProductPage.css";
import { useParams } from "react-router-dom";

function ProductPage() {
    const [resultLists, setResultLists] = useState([]);
    const id=useParams().id

    useEffect(() => {
        const product = () => {
            axios
                .get(
                    `http://localhost:8000/api/products/${id}`
                )
                .then((response) => { setResultLists(response.data); });
        };
        product();
    }, []);


    return (
        <div className="ProductPage"><h3>Bienvenue</h3>{resultLists.map((resultList) =>
            <DetailsProduct {...resultLists} key={resultList.ProductID} />
        )}
        </div>
    )
};
export default ProductPage;
