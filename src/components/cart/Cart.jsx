import React from "react";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const cart = useCart();

  const changeQuantity = (ProductID, quantity) => {
    const item = { ProductID, quantity: quantity };
    cart.change(item);
  }

  return (
    <div className="cart-container">
      <div className="titles">
        <h3 className="product-title">Produit</h3>
        <h3 className="price">Prix</h3>
        <h3 className="quantity">Quantité</h3>
        <h3 className="total-title">Total</h3>
      </div>
      <div className="cart-items">
        {cart.items &&
          cart.items.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-product">
                <img
                  src={`/assets/img/${item.ProductID}.jpeg`}
                  alt={item.name}
                />
                <div className="cart-product-infos">
                  <h3>{item.name}</h3>
                  <span> Réf : {item.SKU}</span>
                  <button onClick={() => cart.remove(item.ProductID)}>
                    Supprimer
                  </button>
                </div>
              </div>
              <div className="cart-product-price">{item.price}€</div>
              <div className="cart-product-quantity">
                {/* <button
                  onClick={(e) =>
                    decrementQuantity(item.ProductID, item.quantity)
                  }
                >
                  -
                </button> */}
                <input type="number" onInput={(e) => changeQuantity(item.ProductID, e.currentTarget.value)} value={item.quantity} min="1" step="1" />
                {/* <button onClick={(e) => incrementQuantity(item.ProductID)}>
                  +
                </button> */}
              </div>
              <div className="cart-product-total-price">
                {(item.quantity * item.price).toFixed(2)}€
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
