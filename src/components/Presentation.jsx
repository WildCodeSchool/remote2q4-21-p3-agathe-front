import React, { useState, useEffect } from "react";
import axios from "axios";
import imageTest from "../assets/IMG_7178.jpeg";
import "./Presentation.css";

const Presentation = () => {
  const [presentation, setPresentation] = useState("");

  useEffect(() => {
    const fetchPresentation = () => {
    axios
      .get(
        `http://localhost:8000/api/presentation`
      ).then((response) => {setPresentation(response.data.presentation);});
  };
    fetchPresentation();
  }, []);

  return (
    <div className="presentation">
      <div>
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
