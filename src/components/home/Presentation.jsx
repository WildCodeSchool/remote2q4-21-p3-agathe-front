import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Presentation.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Presentation = () => {
    const [presentation, setPresentation] = useState("");

    useEffect(() => {
        const fetchPresentation = () => {
            axios
                .get(`${BASE_URL}/api/presentation`)
                .then((response) =>
                    setPresentation(response.data.presentation)
                );
        };
        fetchPresentation();
    }, []);

    return (
        <div className="presentation">
            <div className="presentation_text">
                {presentation.split("\n").map((line, key) => (
                    <p key={key}>{line}</p>
                ))}
            </div>

            <div className="presentation_img">
                <img src="assets/img/IMG_1201.jpeg" alt="product" />
            </div>
        </div>
    );
};

export default Presentation;
