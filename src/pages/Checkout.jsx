import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserProvider";
import "./Checkout.css"

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Order = () => {
    const cart = useCart();
    const [order, setOrder] = React.useState(null);

    React.useEffect(() => {
        const data = cart.items.map((item) => {
            return { id: item.id, quantity: item.quantity, price: item.price };
        });
        axios
            .post(`${BASE_URL}/api/orders`, data, {
                withCredentials: true,
                mode: "cors",
            })
            .then(response => {
                setOrder(response.data.id);
                cart.clear()
            });
    }, []);

    return <div className="newOrder">Commande n° {order}</div>;
};

const Checkout = () => {
    const user = useUser();

    return (
        <div className="checkoutPage">
            <h2>Validation de votre commande</h2>
            {!user.data && (
                <div>
                    <Link to="/login">
                        <div className="loginBtn2">Se connecter</div>
                    </Link>
                    <h3>ou</h3>
                    <Link to="/register">
                        <div className="registerBtn2">Créer un compte</div>
                    </Link>
                </div>
            )}
            {user.data && (
                <>
                    <div className="userConnected">Utilisateur connecté</div>
                    <Order />
                    <Link to="/user/history">
                        <div className="orderButton">Voir vos commandes</div>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Checkout;
