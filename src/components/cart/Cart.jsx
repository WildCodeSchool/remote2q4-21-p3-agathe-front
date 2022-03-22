import React, { useState, useEffect } from "react";
import {
  CartDispatchContext,
  removeFromCart,
  clearCart,
  addToCart,
} from "../../contexts/CartContext";
import { CartStateContext } from "../../contexts/CartContext";
import { MdClear } from "react-icons/md";
import "./Cart.css";

function Cart() {
  const cartContext = React.useContext(CartStateContext);
  const dispatch = React.useContext(CartDispatchContext);
  const [total, setTotal] = useState(0);

  const decrementQuantity = (ProductID) => {
    const item = { ProductID, quantity: -1 };
    addToCart(dispatch, item);
  };

  // Test minimum 1 , fail
  if (cartContext.items <= 1) {
    const decrementQuantity = (ProductID) => {
      const item = { ProductID, quantity: 1 };
      // addToCart(dispatch, item);
    };
  }

  const incrementQuantity = (ProductID) => {
    const item = { ProductID, quantity: 1 };
    addToCart(dispatch, item);
  };

  const handleRemoveFromCart = (productID) => {
    removeFromCart(dispatch, productID);
  };

  const handleRemoveAllFromCart = () => {
    clearCart(dispatch);
  };

  useEffect(() => {
    let total = 0;
    cartContext.items.map(item => total += (item.quantity * item.price))
    setTotal(total)
  }, [cartContext.items])

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>Code Produit</th>
            <th></th>
            <th className="name">Désignation</th>
            <th className="quantity">Quantité</th>
            <th>Prix Unitaire</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartContext.items.map((item, index) => (
            <tr>
              <td key={index}>{item.ProductID}</td>
              <td className="image-product">
                <img
                  src={`/assets/img/${item.ProductID}.jpeg`}
                  alt={item.name}
                />
              </td>
              <td>{item.name}</td>
              <td className="quantity-product">
                <button
                  className="minus"
                  onClick={(e) => decrementQuantity(item.ProductID)}
                >-</button>
                <input type="text" value={item.quantity} readOnly />
                <button
                  className="plus"
                  onClick={(e) => incrementQuantity(item.ProductID)}
                >+</button>
              </td>
              <td className="price">{item.price}</td>
              <td className="total-price">
                {(item.quantity * item.price).toFixed(2)}
              </td>
              <td className="remove">
                <button
                  className="remove-btn"
                  onClick={(e) => handleRemoveFromCart(item.ProductID)}
                >
                  <MdClear />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total : {total}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <button className="remove-all" onClick={(e) => handleRemoveAllFromCart()}>
        Supprimer le panier
      </button>
    </div>
  );
}

export default Cart;
