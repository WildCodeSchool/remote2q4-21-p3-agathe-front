import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
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
            <Navbar />
            <div className="description-Logo">
            <img src="/assets/IMG_7178.jpeg" alt="" />
            </div>
            <section className="BrandDesc">
                <div className="description_img">
                    <h1 className="title"> Notre histoire </h1>
                    <hr />
                    <img className="brandImg" src="/assets/img/IMG_7208.jpeg" alt="Brand" />
                </div>
                {description.split("\n").map((line) => (
                    <p>{line}</p>
                ))}
                
            </section>
            <Footer />
        </div>
    );
};

export default Brand
