import React from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.css";

const DropdownMenu = ({isActive}) => {
  return (
    <nav
      className={`submenu ${isActive ? "active" : "inactive"}`}
    >
      <ul>
        <li>
          <Link to="/user/history" className="sublink">Historique des commandes</Link>
        </li>
        <li>
          <Link to="/user/edit" className="sublink">Mon compte</Link>
        </li>
        <li>
          <Link to="/logout" className="sublink">
            Déconnexion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DropdownMenu;
