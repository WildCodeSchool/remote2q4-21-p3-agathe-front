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
        <div className="Cart">
            <h2>Votre sélection</h2>
            {cartContext.items.map((item, index) => (
                <div key={index} className="cart-items">
                    <span>{item.ProductID}</span>
                    <div className="image-product">
                        <img
                            src={`/assets/img/${item.ProductID}.jpeg`}
                            alt={item.name}
                        />
                    </div>
                    <div className="products-infos">
                        <h3 className="products-name">{item.name}</h3>
                        <div className="products-quantity">
                            <button
                                className="minus"
                                onClick={(e) =>
                                    decrementQuantity(
                                        item.ProductID,
                                        item.quantity
                                    )
                                }
                            >
                                -
                            </button>
                            <input type="text" value={item.quantity} readOnly />
                            <button
                                className="plus"
                                onClick={(e) =>
                                    incrementQuantity(item.ProductID)
                                }
                            >
                                +
                            </button>
                        </div>
                        <span className="price">{item.price}</span>
                        <button
                            className="remove-btn"
                            onClick={(e) =>
                                handleRemoveFromCart(item.ProductID)
                            }
                        >
                            supprimer
                        </button>
                    </div>
                    <div className="products-total-price">
                        <span>{(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                </div>
            ))}
            <div className="total-price">
                <p>Total : </p>
                <span>{cartTotal.toFixed(2)} €</span>
            </div>
            <button className="remove-all" onClick={handleRemoveAllFromCart}>
                Supprimer le panier
            </button>
        </div>
    );
}

export default Cart;
