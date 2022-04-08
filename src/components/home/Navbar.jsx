import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiOutlineLogin,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { useCart } from "../../contexts/CartContext";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { useUser } from "../../contexts/UserProvider";
import DropdownMenu from "./DropdownMenu";
import logo from "../../assets/Logo Elfenn cosmétiques.png";
import "./Navbar.css";

const Navbar = () => {
  const cart = useCart();
  const dropdownRef = useRef("ddmenu");
  console.log(dropdownRef)
  const user = useUser();

  const [itemsInCart, setItemsInCart] = useState("");
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setIsActive(!isActive);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    if (cart.numberOfProducts())
      setItemsInCart(` (${cart.numberOfProducts()})`);
    else setItemsInCart("");
  }, [cart]);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/#homepage" className="link">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navlinks">
        <ul className="navlink-one">
          <li className="items-icon">
            <Link to="/cart" className="nav-link">
              {screenWidth > 500 ? (
                `Panier${itemsInCart}`
              ) : (
                <HiOutlineShoppingCart className="nav-icon" />
              )}
            </Link>
          </li>
          <li className="items-icon">
            {!user.data && (
              <Link to="/login" className="nav-link">
                {screenWidth > 500 ? (
                  "Connexion"
                ) : (
                  <HiOutlineLogin className="nav-icon" />
                )}
              </Link>
            )}
            {user.data && (
              <div className="dropdown_menu">
                <button onClick={handleClick} className="menu-trigger">
                  {screenWidth > 500 ?  <span>
                    {user.data
                      ? user.data.first_name + " " + user.data.last_name
                      : null}
                  </span> : <span>
                    {user.data
                      ? user.data.first_name.charAt(0).toUpperCase() + " . " + user.data.last_name.charAt(0).toUpperCase()
                      : null}
                  </span> }
                </button>
                <DropdownMenu ref={dropdownRef} isActive={isActive} />
              </div>
            )}
          </li>
        </ul>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="navlink-two">
            <li>
              <Link to="/#homepage" className="nav-link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/brand" className="nav-link">
                La marque
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="nav-link">
                Nos produits
              </Link>
            </li>
          </ul>
        )}
        <button onClick={toggleNav} className="btn">
          {toggleMenu ? <HiX className="close"/> : <HiMenu  className="open"/>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
