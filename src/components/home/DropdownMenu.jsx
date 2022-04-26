import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";
import "./DropdownMenu.css";

const DropdownMenu = ({ isActive }) => {
    const user = useUser();

    return (
        <nav className={`submenu ${isActive ? "active" : "inactive"}`}>
            <ul>
                <li>
                    <Link to="/user/history" className="sublink">
                        Historique des commandes
                    </Link>
                </li>
                <li>
                    <Link to="/user/edit" className="sublink">
                        Mon compte
                    </Link>
                </li>
                <li>
                    <Link to="" onClick={user.logout} className="sublink">
                        Déconnexion
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default DropdownMenu;