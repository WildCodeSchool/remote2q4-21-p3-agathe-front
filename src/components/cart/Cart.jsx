import React, { useState } from "react";
import {
  CartDispatchContext,
  removeFromCart,
  clearCart,
} from "../../contexts/CartContext";
import { CartStateContext } from "../../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const cartContext = React.useContext(CartStateContext);
  const dispatch = React.useContext(CartDispatchContext);
  const [counter, setCounter] = useState(cartContext.items.quantity);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  const handleRemoveFromCart = (productID) => {
    removeFromCart(dispatch, productID);
  };

  const handleRemoveAllFromCart = () => {
    clearCart(dispatch);
  };

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>Code Produit</th>
            <th></th>
            <th className="name">Désignation</th>
            <th>Quantité</th>
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
              <td className="quantity">
                <button className="minus" onClick={decrementCounter}>
                  -
                </button>
                <input type="text" value={counter} readOnly />
                <button className="plus" onClick={incrementCounter}>
                  +
                </button>
                
              </td>
              <td className="price">{item.price}</td>
              <td className="total-price">
                {(item.quantity * item.price).toFixed(2)}
              </td>
              <td className="remove">
                <button onClick={(e) => handleRemoveFromCart(item.ProductID)}>
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={(e) => handleRemoveAllFromCart()}>supprimer</button>
    </div>
  );
}

export default Cart;
