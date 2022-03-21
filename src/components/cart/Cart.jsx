import React from "react";
import { CartDispatchContext, removeFromCart, clearCart, addToCart} from "../../contexts/CartContext";
import { CartStateContext } from "../../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const cartContext = React.useContext(CartStateContext);
  const dispatch = React.useContext(CartDispatchContext);

  const decrementQuantity = (ProductID) => {
    const item = {ProductID, quantity:-1}
    addToCart(dispatch, item);
  };

  const incrementQuantity = (ProductID) => {
    const item = {ProductID, quantity:1}
    addToCart(dispatch, item);
  };

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
                <button className="minus" onClick={(e) => decrementQuantity(item.ProductID)}> - </button>
                {item.quantity}
                <button className="plus" onClick={(e) => incrementQuantity(item.ProductID)}> + </button>
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
        <tfoot>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <button onClick={(e) => handleRemoveAllFromCart()}>supprimer</button>
    </div>
  );
}

export default Cart;
