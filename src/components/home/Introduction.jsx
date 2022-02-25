import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
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
          {/* <HashLink className="arrow" to="#homepage">
            Coucou
          </HashLink> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
