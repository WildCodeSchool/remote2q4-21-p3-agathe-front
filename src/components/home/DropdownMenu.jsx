import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import "./DropdownMenu.css";

const DropdownMenu = ({isActive}) => {
//   const dropdownRef = useRef(null);
//   const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  return (
    <nav
    //   ref={dropdownRef}
      className={`menu ${isActive ? "active" : "inactive"}`}
    >
      <ul>
        <li>
          <Link to="/user/history" className="sublink">Historique des commandes</Link>
        </li>
        <li>
          <Link to="#" className="sublink">Paramètres</Link>
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
