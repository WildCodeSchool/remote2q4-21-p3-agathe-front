import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo Elfenn cosmétiques.png";
import { useUser } from "../../contexts/UserProvider";
import { CartStateContext } from "../../contexts/CartContext";
import "./Navbar.css";

const Navbar = () => {
    const { user } = useUser();
    const { items } = useContext(CartStateContext);
    const [itemsInCart, setItemsInCart] = useState("");

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
                        <Link to="/logout" className="link">
                            Déconnexion
                        </Link>
                    )}
                </li>
            </div>
        </div>
    );
};

export default Navbar;
