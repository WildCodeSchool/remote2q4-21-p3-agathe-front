import React, { useState, useEffect } from "react";
import axios from "axios";
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
            <div className="description_texte">

                {description.split("\n").map((line) => (
                    <p>{line}</p>
                ))}
            </div>

            <div className="descrition_img">
                <img className="img" src="/assets/img/IMG_7208.jpeg" alt="marque" />
            </div>

           
           
        </div>
    );
};

export default Marque


