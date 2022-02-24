import React from "react";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Logo Elfenn cosmétiques.png";
import "./Introduction.css";

const Introduction = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";
  return (
    <div className="page access">
      <div>
        <div className="brand">
          <img src={logo} alt="logo" />
          <p>Elfenn cosmétiques</p>
        </div>
        <div className="shop_btn">
          <h1>Inspiré par les éléments</h1>
          <button>Boutique</button>
        </div>
        <div className="homepage_btn">
          <p>Accueil</p>
          <HashLink className="arrow" to="#homepage">
            Coucou
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
