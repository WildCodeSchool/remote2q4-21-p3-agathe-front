import React from 'react'
import { Link } from 'react-router-dom';

import { useUser } from '../contexts/UserProvider';

const Checkout = () => {
    const { user } = useUser();

    return (
        <>
            <h3>Validation de votre commande</h3>
            {!user && (
                <div>
                    <Link to="/login"><div>Se connecter</div></Link>
                    <p>ou</p>
                    <Link to="/register"><div>Créer un compte</div></Link>
                </div>)}
            {user && (<div>User connected</div>)}
        </>
    )
}

export default Checkout