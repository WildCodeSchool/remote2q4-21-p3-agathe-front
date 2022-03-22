import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartTotal.css";

const CartTotal = () => {
  return (
    <div className="total">
      <h2>Total de la commande</h2>
      <p>Total :</p>
      <p>Frais de port</p>
      <p>Adresse de livraison</p>
      <p>Payements acceptés :</p>
      <div className="payment-container">
        <FaIcons.FaCcVisa className="payment-cards" />
        <FaIcons.FaCcMastercard className="payment-cards" />
        <FaIcons.FaCcPaypal className="payment-cards" />
      </div>
      <Link to="/checkout" className="btn">
        <button>Valider</button>
      </Link>
    </div>
  );
};

export default CartTotal;
