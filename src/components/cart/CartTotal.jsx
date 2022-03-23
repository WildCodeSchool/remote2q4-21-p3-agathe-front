import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartStateContext } from "../../contexts/CartContext";
import "./CartTotal.css";

const CartTotal = () => {
  const { cartTotal } = React.useContext(CartStateContext);
  return (
    <div className="total">
      <h2>Total de la commande</h2>
      <p>Frais de port</p>
      <p>Adresse de livraison</p>
      <p className="cmd-total"><b>Total :</b> {cartTotal.toFixed(2)} €</p>
      <div className="payment-container">
        <p>Paiements acceptés :</p>
        <div className="cards-icons">
        <FaIcons.FaCcVisa className="payment-cards" />
        <FaIcons.FaCcMastercard className="payment-cards" />
        <FaIcons.FaCcPaypal className="payment-cards" />
        </div>
      </div>
      <Link to="/checkout" className="btn">
        <button>Valider</button>
      </Link>
    </div>
  );
};

export default CartTotal;
