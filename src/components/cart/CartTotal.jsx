import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./CartTotal.css";

const CartTotal = () => {
  const cart = useCart();
  return (
    <div className="total">
      <h2>Total de la commande</h2>
      <p>Frais de port</p>
      <p className="cmd-total"><b>Total :</b> {cart.total.toFixed(2)} €</p>
      <Link to="/checkout" className="btn">
        <button>Passer la commande</button>
      </Link>
    </div>
  );
};

export default CartTotal;
