import React from 'react'
import "./DetailsProduct.css";

function DetailsProduct(props) {
    return (
        <div className='DetailsProduct'>
            <div className='DetailsContainer-left'>
                <img className='DetailsProductImage' src={`/assets/img/${props.ProductID}.jpeg`} alt={props.name} />
                <p className='DetailsProductDescription'>
                    {props.description && props.description.split("\n").map(line => <p>{line}</p>)}
                </p>
                <p className='DetailsProductCharacteristic'>
                    {props.characteristic && props.characteristic.split("\n").map(line => <p>{line}</p>)}
                </p>
            </div>
            <div className='DetailsContainer-right'>
                <p className="DetailsProductTitle"> {props.name}</p>
                <p className='DetailsProductIngredient'>
                    {props.ingredient && props.ingredient.split("\n").map(line => <p>{line}</p>)}
                </p>
                <p className="DetailsProductPrice">{props.price} €</p>
            </div>
        </div>
    )
}

export default DetailsProduct;