import React from 'react'
import { Link } from 'react-router-dom'
import "./ModalCart.css"

const ModalCart = ({toggle}) => {
    return (
        <div className='ModalCart'>
            <button onClick={toggle}>Continuer mes achats</button>
            <Link to="/cart"><button className='btn-link'>Finaliser ma commande</button></Link>
        </div>
    )
}

export default ModalCart