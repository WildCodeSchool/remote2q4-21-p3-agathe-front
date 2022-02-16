import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Presentation.css";

const Presentation = () => {
  const [presentation, setPresentation] = useState([]);

  useEffect(() => {
    const fetchDataResult = () => {
      axios
      .get(
        ``
      )
        .then((response) => response.json())
        .then((data) => {
          setResultList(data);
        });
    };
    fetchDataResult();
  }, [params.city]);

  return <div>Presentation</div>;
};

export default Presentation;
