import React, { useEffect, useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo Elfenn cosmétiques.png";
import { useUser } from "../../contexts/UserProvider";
import { CartStateContext } from "../../contexts/CartContext";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import DropdownMenu from "./DropdownMenu";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useUser();
  const { items } = useContext(CartStateContext);
  const [itemsInCart, setItemsInCart] = useState("");
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClick = () => setIsActive(!isActive);

  useEffect(() => {
    if (items.length) {
      setItemsInCart(` (${items.length})`);
    }
  }, [items]);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/#homepage" className="link">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navlink">
        <li className="push-right">
          <Link to="/#homepage" className="link">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/brand" className="link">
            La marque
          </Link>
        </li>
        <li>
          <Link to="/catalogue" className="link">
            Nos produits
          </Link>
        </li>
        <li className="push-right">
          <Link to="/cart" className="link">
            Panier{itemsInCart}
          </Link>
        </li>
        <li>
          {!user && (
            <Link to="/login" className="link">
              Connexion
            </Link>
          )}
          {user && (
            <div className="dropdown_menu">
              <button onClick={handleClick} className="menu-trigger">
                <span>User</span>
              </button>
              <DropdownMenu ref={dropdownRef} isActive={isActive} />
            </div>
          )}
        </li>
      </div>
    </div>
  );
};

export default Navbar;
