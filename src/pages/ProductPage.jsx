import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailsProduct from "../components/DetailsProduct";
import "./ProductPage.css";

function ProductPage() {
    const [resultLists, setResultLists] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8000/api/products`
            )
            .then((response) => { setResultLists(response.data); });
        ProductPage();
    }, []);


    return (
        <div className="ProductPage">{resultLists.map((resultList) =>
            <DetailsProduct {...resultLists} key={resultList.ProductID} />
        )}
        </div>
    )
};
export default ProductPage;
