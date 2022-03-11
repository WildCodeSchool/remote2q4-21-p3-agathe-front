import React from 'react';
import { CartStateContext } from "../contexts/CartContext";

function Cart() {
    const cartContext = React.useContext(CartStateContext);

    return (
        <div className='Cart'>
            <table>
                <thead>
                    <tr>
                        <th>Code Produit</th>
                        <th>Designation</th>
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
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Cart 
