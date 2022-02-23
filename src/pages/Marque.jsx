import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Marque.css"

function Marque() {
    const [description, setDescription] = useState("");

    useEffect(() => {
        const Marque = () => {
            axios
                .get(
                    `http://localhost:8000/api/presentation`
                ).then((response) => { setDescription(response.data.presentation); });
        };
        Marque();
    }, []);

    return (

        <div className="Description">
            <Navbar />
            <div className="descrition_img">
                <img className="img" src="/assets/img/logo.png" alt="logo" />
            </div>
            <div className="description_texte">
                {description.split("\n").map((line) => (
                    <p>{line}</p>
                ))}
            </div>
            <div className="descrition_img">
                <img className="img" src="/assets/img/IMG_7208.jpeg" alt="marque" />
            </div>
            <Footer />
        </div>
    );
};

export default Marque


