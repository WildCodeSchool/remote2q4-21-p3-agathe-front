import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { CartDispatchContext, addToCart } from "../../contexts/CartContext";
import "./DetailsProduct.css";

function DetailsProduct(props) {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  const dispatch = useContext(CartDispatchContext);
  
  const handleAddToCart = () => {
    const product = { ...props, quantity: counter };
    addToCart(dispatch, product);
    // setIsAdded(true);
    // setTimeout(() => {
      // setIsAdded(false);
    // }, 3500);
  };

  return (
    <div className="DetailsProduct">
      <div className="DetailsContainer-left">
        <img
          className="DetailsProductImage"
          src={`/assets/img/${props.ProductID}.jpeg`}
          alt={props.name}
        />
        <div className="DetailsProductDescription">
          {props.description &&
            props.description.split("\n").map((line ,id )=> <p key={id}>{line}</p>)}
        </div>
      </div>
      <div className="DetailsContainer-right">
        <p className="DetailsProductTitle"> {props.name}</p>
        <div className="DetailsProductIngredient">
          {props.ingredients &&
            props.ingredients.map((ingredient,id) => <p key={id}><span>{ingredient.name}</span>{" : "}{ingredient.description}</p>)}
        </div>
        <div className="DetailsProductCharacteristic">
          {props.characteristic &&
            props.characteristic.split("\n").map((line,id) => <p key={id}>{line}</p>)}
        </div>
        <div className="DetailsProductCart">
          <div className="DetailsProductsInfos">
            <p className="DetailsProductPrice">{props.price} €</p>
            <div className="DetailsProductsQuantity">
              <p>Quantité : </p>
              <button className="minus" onClick={decrementCounter}>
                -
              </button>
              <input type="text" value={counter} readOnly />
              <button className="plus" onClick={incrementCounter}>
                +
              </button>
            </div>
          </div>
          <button onClick={handleAddToCart}>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
