import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo Elfenn cosmétiques.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      <Link to="/#homepage" className="link"><img src={logo} alt="logo" /></Link>
      </div>
      <div className="navlink">
          <li className="push-right">
            <Link to="/#homepage" className="link">Accueil</Link>
          </li>
          <li>
            <Link to="/marque" className="link">La marque</Link>
          </li>
          <li>
            <Link to="/catalogue" className="link">Nos produits</Link>
          </li>
          <li className="push-right">
            <Link to="/cart" className="link">Panier</Link>
          </li>
          <li>
            <Link to="/login" className="link">Connexion</Link>
          </li>
      </div>
    </div>
  );
};

export default Navbar;
