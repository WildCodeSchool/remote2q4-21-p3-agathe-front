import React from "react";
import Cart from "../components/cart/Cart";
import CartTotal from "../components/cart/CartTotal";
import "./CartPage.css";

function CartPage() {
  return (
    <div className="CartContainer">
      <div className="cart-title">
        <h1>Récapitulatif de mon panier</h1>
      </div>
      <div className="cart-content">
      <Cart />
      <CartTotal />
      </div>
    </div>
  );
}

export default CartPage;
