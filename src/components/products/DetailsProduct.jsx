import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DetailsProduct.css";

function DetailsProduct(props) {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div className="DetailsProduct">
      <div className="DetailsContainer-left">
        <img
          className="DetailsProductImage"
          src={`/assets/img/${props.ProductID}.jpeg`}
          alt={props.name}
        />
        <p className="DetailsProductDescription">
          {props.description &&
            props.description.split("\n").map((line) => <p>{line}</p>)}
        </p>
      </div>
      <div className="DetailsContainer-right">
        <p className="DetailsProductTitle"> {props.name}</p>
        <p className="DetailsProductIngredient">
          {props.ingredient &&
            props.ingredient.split("\n").map((line) => <p>{line}</p>)}
        </p>
        <p className="DetailsProductCharacteristic">
          {props.characteristic &&
            props.characteristic.split("\n").map((line) => <p>{line}</p>)}
        </p>
        <div className="DetailsProductCart">
          <div className="DetailsProductsInfos">
            <p className="DetailsProductPrice">{props.price} €</p>
            <div className="DetailsProductsQuantity">
              <p>Quantité : </p>
              <button className="minus" onClick={decrementCounter}>
                -
              </button>
              <input type="text" value={counter} />
              <button className="plus" onClick={incrementCounter}>
                +
              </button>
            </div>
          </div>
          <Link to="/cart" className="link">
          <button>Ajouter au panier</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;