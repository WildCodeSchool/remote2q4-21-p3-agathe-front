import React from 'react'
import "./ProductCard.css";

function ProductCard(props) {

    return (
            <div className={`ProductCardBase ${props.className}`}>
                <img className='ProductCardImage' src={`/assets/img/${props.ProductID}.jpeg`} alt={props.name} />
                <h4 className="ProductCardTitle">{props.name}</h4>
                <p className="ProductCardPrice">{props.price} €</p>
            </div>
    )
}

export default ProductCard