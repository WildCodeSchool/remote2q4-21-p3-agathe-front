import React from "react";
import Cart from "../components/cart/Cart";
import CartTotal from "../components/cart/CartTotal";
import "./CartPage.css";

function CartPage() {
    return (
        <div className="CartContainer">
            <Cart />
            <CartTotal />
        </div>
    );
}

export default CartPage;
