import React from "react";
import { CartDispatchContext, removeFromCart  } from "../../contexts/CartContext";
import { CartStateContext } from "../../contexts/CartContext";
import "./Cart.css";

function Cart(props) {
  const cartContext = React.useContext(CartStateContext);

  const dispatch = React.useContext(CartDispatchContext);
  
  const handleRemoveFromCart = () => {
    const product = { ...props, quantity: 1 };
    removeFromCart(dispatch, product);
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
              <td className="quantity">{item.quantity}</td>
              <td className="price">{item.price}</td>
              <td className="total-price">{(item.quantity * item.price).toFixed(2)}</td>
              <td className="remove"><button onClick={handleRemoveFromCart}>supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
