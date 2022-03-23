import React from "react";
import {
    CartDispatchContext,
    CartStateContext,
    removeFromCart,
    clearCart,
    addToCart,
} from "../../contexts/CartContext";
// import { MdClear } from "react-icons/md";
import "./Cart.css";

function Cart() {
    const { cartContext, cartTotal } = React.useContext(CartStateContext);
    const dispatch = React.useContext(CartDispatchContext);

    const decrementQuantity = (ProductID, quantity) => {
        if (quantity > 1) {
            const item = { ProductID, quantity: -1 };
            addToCart(dispatch, item);
        }
    };

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

    return (
        // <div className="Cart">
        //   <h1>Votre panier</h1>
        //   <span className="line"></span>
        //   {cartContext.items.map((item, index) => (
        //     <div key={index} className="cart-items">
        //       <span className="item-index">{item.ProductID}</span>
        //       <div className="image-product">
        //         <img src={`/assets/img/${item.ProductID}.jpeg`} alt={item.name} />
        //       </div>
        //       <div className="products-infos">
        //         <h3 className="products-name">{item.name}</h3>
        //         <div className="products-quantity">
        //           <button
        //             className="minus"
        //             onClick={(e) =>
        //               decrementQuantity(item.ProductID, item.quantity)
        //             }
        //           >
        //             -
        //           </button>
        //           <input type="text" value={item.quantity} readOnly />
        //           <button
        //             className="plus"
        //             onClick={(e) => incrementQuantity(item.ProductID)}
        //           >
        //             +
        //           </button>
        //         </div>
        //         <span className="price">{item.price}€</span>
        //         <button className="remove-btn" onClick={(e) => handleRemoveFromCart(item.ProductID)}>supprimer</button>
        //       </div>
        //       <div className="products-total price">
        //         <span>{(item.quantity * item.price).toFixed(2)}€</span>
        //       </div>
        //     </div>
        //   ))}
        //   <div className="total-price">
        //     <p>Total : {total}€ </p>

        //   </div>
        //   <button className="remove-all" onClick={handleRemoveAllFromCart}>
        //     Supprimer le panier
        //   </button>
        // </div>
        <div className="cart-container">
            <div className="titles">
                <h3 className="product-title">Produit</h3>
                <h3 className="price">Prix</h3>
                <h3 className="quantity">Quantité</h3>
                <h3 className="total-title">Total</h3>
            </div>
            <div className="cart-items">
                {cartContext.items &&
                    cartContext.items.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <div className="cart-product">
                                <img
                                    src={`/assets/img/${item.ProductID}.jpeg`}
                                    alt={item.name}
                                />
                                <div>
                                    <h3>{item.name}</h3>
                                    <button
                                        onClick={() =>
                                            handleRemoveFromCart(item.ProductID)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="cart-product-price">
                                {item.price}€
                            </div>
                            <div className="cart-product-quantity">
                                <button
                                    onClick={(e) =>
                                        decrementQuantity(
                                            item.ProductID,
                                            item.quantity
                                        )
                                    }
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={item.quantity}
                                    readOnly
                                />
                                {/* <div className="count">{item.quantity}</div> */}
                                <button
                                    onClick={(e) =>
                                        incrementQuantity(item.ProductID)
                                    }
                                >
                                    +
                                </button>
                            </div>
                            <div className="cart-product-total-price">
                                {(item.quantity * item.price).toFixed(2)}€
                            </div>
                        </div>
                    ))}
            </div>
            <div className="cart-summary">
                <button className="clear-btn" onClick={handleRemoveAllFromCart}>
                    Supprimer le panier
                </button>
                <div className="subtotal">
                    <span>Sous total</span>
                    <span className="amount">{cartTotal.toFixed(2)} €</span>
                </div>
            </div>
        </div>
    );
}

export default Cart;
