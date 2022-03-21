import React from 'react'
import { Link } from 'react-router-dom'

const ModalCart = () => {
    return (
        <div>
            <button>Continuer mes achats</button>
            <Link to="/cart"><button>Finaliser ma commande</button></Link>
        </div>
    )
}

export default ModalCart