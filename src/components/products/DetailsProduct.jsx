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
    console.log(product);
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
        <p className="DetailsProductDescription">
          {props.description &&
            props.description.split("\n").map((line) => <p>{line}</p>)}
        </p>
      </div>
      <div className="DetailsContainer-right">
        <p className="DetailsProductTitle"> {props.name}</p>
        <p className="DetailsProductIngredient">
          {props.ingredients &&
            props.ingredients.map(ingredient => <p><span>{ingredient.name}</span>{" : "}{ingredient.description}</p>)}
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
          {/* <Link to="/cart" className="link"> */}
          <button onClick={handleAddToCart}>Ajouter au panier</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
