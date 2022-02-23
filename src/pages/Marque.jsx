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
            <div>
                <h1>Notre histoire</h1>
                <p className="presentation"> Elfenn a été imaginée en Bretagne sud, à la croisée des elements naturesls.<br />
                    Elle est née de l'intérêt de Pierre pour les huiles végétales et de la volonté de sa fille , <br />
                    Agathe, de vous faire d'écouvrir la caméline et ses innombrables vertus au travers de soins adaptés pour tous.
                    <br /><br />
                    Nos huiles y sont fabriquées artisanalement pour sublimer tous leurs bienfaits Leurs compositions est à
                    100%  d'origine naturelle, les ingrédients à 98% d' origine bretonne et flacons sont en verre, zero-dechet.
                </p>
            </div>
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


