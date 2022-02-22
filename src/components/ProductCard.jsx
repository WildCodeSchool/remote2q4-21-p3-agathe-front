import React from 'react'
import "./ProductCard.css";

function ProductCard(props) {

  return (
    <div className='ProductCard'>
        <img className='ProductCardImage' src={props.image} alt={props.name} />
        <h4 className="ProductCardTitle">{props.name}</h4>
        <p className="ProductCardPrice">{props.price}</p>
    </div>
  )
}

export default ProductCard