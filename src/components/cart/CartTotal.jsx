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
      {/* <div className="payment-container">
        <p>Paiements acceptés :</p>
        <div className="cards-icons">
        <FaIcons.FaCcVisa className="payment-cards" />
        <FaIcons.FaCcMastercard className="payment-cards" />
        <FaIcons.FaCcPaypal className="payment-cards" />
        </div>
      </div> */}
      <Link to="/checkout" className="btn">
        <button>Passer la commande</button>
      </Link>
    </div>
  );
};

export default CartTotal;
