import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/home/Footer";
import "./Brand.css"

function Brand() {
    const [description, setDescription] = useState("");
    const BASE_URL = process.env.REACT_APP_URL_SERVER;

    useEffect(() => {
        const Brand = () => {
            axios
                .get(`${BASE_URL}/api/presentation`)
                .then((response) => { setDescription(response.data.presentation); });
        };
        Brand();
    }, []);

    return (
        <div className="Description">
            <div className="description-Logo">
            </div>
            <div className="BrandDesc">
                <div className="description_img">
                    <h1 className="title"> Notre histoire </h1>
                    <hr />
                    <img className="brandImg" src="/assets/img/IMG_7208.jpeg" alt="Brand" />
                </div>

                {description.split("\n").map((line,id) => (
                    <p key={id}>{line}</p>
                ))}
            </div>
            <div className="bottomImg">
            <img src="../../assets/img/MIB.png" alt="" />
            </div>
        </div>
    );
};

export default Brand


