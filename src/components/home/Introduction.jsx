import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo Elfenn cosmétiques.png";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="page access">
      <div className="access_container">
        <div className="brand">
          <img src={logo} alt="logo" />
          <p>Elfenn cosmétiques</p>
        </div>
        <div className="shop_btn">
          <h1>Inspiré par les éléments</h1>
          <Link to="/catalogue" className="link">
            {" "}
            <button>Boutique</button>{" "}
          </Link>
        </div>
        <div className="homepage_btn">
          <p>Accueil</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
