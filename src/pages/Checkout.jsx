import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserProvider";

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

    return <div>Commande n° {order}</div>;
};

const Checkout = () => {
    const user = useUser();

    return (
        <>
            <h3>Validation de votre commande</h3>
            {!user.data && (
                <div>
                    <Link to="/login">
                        <div>Se connecter</div>
                    </Link>
                    <p>ou</p>
                    <Link to="/register">
                        <div>Créer un compte</div>
                    </Link>
                </div>
            )}
            {user.data && (
                <>
                    <div>User connected</div>
                    <Order />
                </>
            )}
        </>
    );
};

export default Checkout;
