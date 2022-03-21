import React from "react";
import * as FaIcons from "react-icons/fa";
import "./CartTotal.css";

const CartTotal = () => {
// const cartContext = React.useContext(CartStateContext);
  return (
    <div className="total">
      <h2>Total de la commande</h2>
      <p>Total : </p>
      <p>Frais de port</p>
      <p>Adresse de livraison</p>
      <p>Payements acceptés</p>
      <div className="payment-container">
        <FaIcons.FaCcVisa className="payment-cards" />
        <FaIcons.FaCcMastercard className="payment-cards" />
        <FaIcons.FaCcPaypal className="payment-cards" />
      </div>
      <button>Valider</button>
    </div>
  );
};

export default CartTotal;
