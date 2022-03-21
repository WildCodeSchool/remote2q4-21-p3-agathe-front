import React from 'react'
import { Link } from 'react-router-dom';

import Footer from '../components/home/Footer';
import Navbar from '../components/home/Navbar';
import { useUser } from '../contexts/UserProvider';
import "./Checkout.css"

const Checkout = () => {
    const { user } = useUser();

    return (
        <div className='checkout'>
            <Navbar />
            <h3>Validation de votre commande</h3>
            {!user && (
                <div>
                    <Link to="/login"><div>Se connecter</div></Link>
                    <p>ou</p>
                    <Link to="/register"><div>Créer un compte</div></Link>
                </div>)}
            {user && (<div>User connected</div>)}
            <Footer />
        </div>
    )
}

export default Checkout