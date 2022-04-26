import React from "react";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

function Cart() {
  const cart = useCart();

  const changeQuantity = (id, quantity) => {
    const item = { id, quantity: quantity };
    cart.change(item);
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.items &&
          cart.items.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-product">
                <img
                  src={`${BASE_URL}/assets/${item.picture}`}
                  alt={item.name}
                />
                <div className="cart-product-infos">
                  <h3>{item.name}</h3>
                  <span> Réf : {item.sku}</span>
                  <button onClick={() => cart.remove(item.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
              <div className="cart-product-price">
                <p>Prix unitaire : </p>
                <span>{item.price}€</span>
              </div>
              <div className="cart-product-quantity">
                <p>Qté :</p>
                <input
                  type="number"
                  onInput={(e) =>
                    changeQuantity(item.id, e.currentTarget.value)
                  }
                  value={item.quantity}
                  min="1"
                  step="1"
                />
              </div>
              <div className="cart-product-total-price">
                <p>Total : {(item.quantity * item.price).toFixed(2)}€</p>
              </div>
            </div>
          ))}
      </div>
      <div className="cart-summary">
        <button className="clear-btn" onClick={cart.clear}>
          Supprimer le panier
        </button>
        <div className="subtotal">
          <span>Sous total :</span>
          <span className="subtotal-price">{cart.total.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
