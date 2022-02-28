import React from 'react'
import "./DetailsProduct.css";

function DetailsProduct(props) {
    return (
        <div className="DetailsContent">
            <h2 className="DetailsTitle"> {props.name}</h2>
        <div className='DetailsProduct'>
            <div className='DetailsImageContainer'>
                <img className='DetailsImage' src={`/assets/img/${props.ProductID}.jpeg`} alt={props.name} />
            </div>
            <div className='DetailsText'>
            <p className='DetailsDescription'>
                    {props.description && props.description.split("\n").map(line => <p>{line}</p>)}
                </p>
                <ul className='DetailsCharacteristic'>
                    {props.characteristic && props.characteristic.split("\n").map(line => <li>{line}</li>)}
                </ul>
                <p className="DetailsPrice">{props.price} €</p>
                <ul className='DetailsIngredient'>
                    {props.ingredient && props.ingredient.split("\n").map(line => <li>{line}</li>)}
                </ul>
            </div>
        </div></div>
    )
}

export default DetailsProduct;