import React from "react";
import { CartStateContext } from "../../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const { items, addToCart, cartTotal, clearCart, removeFromCart } =
    React.useContext(CartStateContext);

  const decrementQuantity = (ProductID, quantity) => {
    if (quantity > 1) {
      const item = { ProductID, quantity: -1 };
      addToCart(item);
    }
  };

  const incrementQuantity = (ProductID) => {
    const item = { ProductID, quantity: 1 };
    addToCart(item);
  };

  return (
    <div className="cart-container">
      <div className="titles">
        <h3 className="product-title">Produit</h3>
        <h3 className="price">Prix</h3>
        <h3 className="quantity">Quantité</h3>
        <h3 className="total-title">Total</h3>
      </div>
      <div className="cart-items">
        {items &&
          items.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-product">
                <img
                  src={`/assets/img/${item.ProductID}.jpeg`}
                  alt={item.name}
                />
                <div className="cart-product-infos">
                  <h3>{item.name}</h3>
                  <span> Réf : {item.SKU}</span>
                  <button onClick={() => removeFromCart(item.ProductID)}>
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
                <input type="number" onChange={item.quantity} />
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
        <button className="clear-btn" onClick={clearCart}>
          Supprimer le panier
        </button>
        <div className="subtotal">
          <span>Sous total :</span>
          <span className="subtotal-price">{cartTotal.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
