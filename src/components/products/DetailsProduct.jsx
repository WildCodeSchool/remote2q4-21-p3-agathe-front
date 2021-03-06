import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import Modal from "../modal/modal"
import useModal from "../modal/useModal";
import ModalCart from "../cart/ModalCart";
import "./DetailsProduct.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

function DetailsProduct(props) {
  const cart = useCart();
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  const { isShowing: isModalCartShowed, toggle: toggleModalCart } = useModal();

  const handleAddToCart = () => {
    const product = { ...props, quantity: counter };
    cart.add(product);
    toggleModalCart();
  };

  return (
    <div className="DetailsProduct">
      <div className="DetailsContainer-left">
        <img
          className="DetailsProductImage"
          src={`${BASE_URL}/assets/${props.picture}`}
          alt={props.name}
        />
        <div className="DetailsProductDescription">
          {props.description &&
            props.description.split("\n").map((line, id) => <p key={id}>{line}</p>)}
        </div>
      </div>
      <div className="DetailsContainer-right">
        <p className="DetailsProductTitle"> {props.name}</p>
        <div className="DetailsProductIngredient">
          {props.ingredients &&
            props.ingredients.map((ingredient, id) => <p key={id}><span>{ingredient.name}</span>{" : "}{ingredient.description}</p>)}
        </div>
        <div className="IngredientsDetails">
          <span className="TitleIngredientsDetails"> COMPOSITION : </span> 
          <p> {props.ingredients_details} </p> 
          {props.ingredients_details && props.ingredients_details.includes('*') ? <p className="AllergensIngredients">*Allèrgenes</p> : null}
        </div>
        <div className="DetailsProductCharacteristic">
          {props.characteristic &&
            props.characteristic.split("\n").map((line, id) => <p key={id}>{line}</p>)}
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
      <Modal isShowing={isModalCartShowed} hide={toggleModalCart} title="Que souhaitez vous faire ?">
        <ModalCart toggle={toggleModalCart} />
      </Modal>
    </div>
  );
}

export default DetailsProduct;
