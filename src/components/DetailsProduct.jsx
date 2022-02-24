import React from 'react'
import "./DetailsProduct.css";

function DetailsProduct(props) {

    return (
            <div className='DetailsProduct'>
                <img className='DetailsProductImage' src={`/assets/img/${props.ProductID}.jpeg`} alt={props.name} />
                <h4 className="DetailsProductTitle">{props.name}</h4>
                <p className="DetailsProductPrice">{props.price} €</p>
                <p className='DetailsProductCharacteristic'>{props.characteristic}</p>
                <p className='DetailsProductDescription'> {props.description}</p>
                <p className='DetailsProductIngredient'> {props.ingredient}</p>
            </div>
    )
}

export default DetailsProduct