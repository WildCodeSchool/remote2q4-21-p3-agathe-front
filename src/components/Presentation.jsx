import React, { useState, useEffect } from "react";
import axios from "axios";
import imageTest from "../assets/IMG_7178.jpeg";
import "./Presentation.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Presentation = () => {
  const [presentation, setPresentation] = useState("");

  useEffect(() => {
    const fetchPresentation = () => {
    axios
      .get(`${BASE_URL}/api/presentation`)
      .then(response => setPresentation(response.data.presentation));
  };
    fetchPresentation();
  }, []);

  return (
    <div className="presentation">
      <div className="presentation_text">
        {presentation.split("\n").map((line) => (
          <p>{line}</p>
        ))}
      </div>

      <div className="presentation_img">
        <img src={imageTest} alt="product" />
      </div>
    </div>
  );
};

export default Presentation;
