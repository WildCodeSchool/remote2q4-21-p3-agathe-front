import React from 'react';
import { CartStateContext } from "../contexts/CartContext";
import "./Cart.css";

function Cart() {
    const cartContext = React.useContext(CartStateContext);

    return (
        <div className='Cart'>
            <table>
                <thead>
                    <tr>
                        <th>Code Produit</th>
                        <th className='name'>Désignation</th>
                        <th>Quantité</th>
                        <th>Prix Unitaire</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartContext.items.map(item => 
                    <tr>
                        <td>{item.ProductID}</td>
                        <td>{item.name}</td>
                        <td className='qty'>{item.quantity}</td>
                        <td className='price'>{item.price}</td>
                        <td className='total'>{item.quantity * item.price}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Cart 