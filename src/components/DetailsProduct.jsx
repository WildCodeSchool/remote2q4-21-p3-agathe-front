import React from 'react'
import "./DetailsProduct.css";

function DetailsProduct(props) {

    return (
        <div className='DetailsProduct'>
            <div className='DetailsContainer-top'>
                < img className='DetailsProductImage' src={`/assets/img/${props.ProductID}.jpeg`} alt={props.name} />
                <p className="DetailsProductTitle"> {props.name}</p>
            </div>
            <div className='DetailsContainer-bottom'>
            <p className="DetailsProductPrice">{props.price} €</p>
            <p className='DetailsProductCharacteristic'>{props.characteristic}</p>
            <p className='DetailsProductIngredient'> {props.ingredient}</p>
            </div>
            <p className='DetailsProductDescription'> {props.description}</p>
        </div>
    )
}

export default DetailsProduct;