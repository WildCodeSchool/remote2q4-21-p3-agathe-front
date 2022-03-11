import React from 'react';
import Footer from '../components/home/Footer';
import Navbar from '../components/home/Navbar';
import Cart from '../components/Cart'
import "./CartPage.css";

function CartPage() {
  return (
    <div className="CartPage">
      <Navbar />
        <div className='CartContainer'>
            <Cart />
        </div>
        <Footer />
    </div>
  )
}

export default CartPage