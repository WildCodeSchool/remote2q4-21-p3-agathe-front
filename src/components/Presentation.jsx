import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Presentation.css";

const Presentation = () => {
  const [presentation, setPresentation] = useState('');

  useEffect(() => {
    const fetchPresentation = () => {
      axios
      .get(
        `http://localhost:8000/api/presentation`
      ).then((response)  => {setPresentation(response.data.presentation);});
    };
    fetchPresentation();
  }, []);

  return <div className="presentation">{presentation}</div>;
};

export default Presentation;
