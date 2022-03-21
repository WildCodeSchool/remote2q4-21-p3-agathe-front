import React from 'react';
import Footer from '../components/home/Footer';
import Navbar from '../components/home/Navbar';
import Cart from '../components/cart/Cart'
import CartTotal from '../components/cart/CartTotal';
import "./CartPage.css";

function CartPage() {
  return (
    <div className="CartPage">
      <Navbar />
        <div className='CartContainer'>
            <Cart />
            <CartTotal />
        </div>
        <Footer />
    </div>
  )
}

export default CartPage;
