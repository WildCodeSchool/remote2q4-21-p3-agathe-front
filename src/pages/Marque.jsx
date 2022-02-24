import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
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
            <section className="Marquedesc">
                <h1>Notre histoire </h1>
                <div className="description_texte">
                    {description.split("\n").map((line) => (
                        <p>{line}</p>
                    ))}
                </div>
                <div className="descrition_img">
                    <img className="img" src="/assets/img/IMG_7208.jpeg" alt="marque" />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Marque


