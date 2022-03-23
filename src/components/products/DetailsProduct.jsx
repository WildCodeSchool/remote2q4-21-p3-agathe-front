import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { CartStateContext } from "../../contexts/CartContext";
import Modal from "../modal/modal"
import useModal from "../modal/useModal";
import ModalCart from "../cart/ModalCart";
import "./DetailsProduct.css";

function DetailsProduct(props) {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  const { isShowing: isModalCartShowed, toggle: toggleModalCart } = useModal();

  const {addToCart} = useContext(CartStateContext);
  
  const handleAddToCart = () => {
    const product = { ...props, quantity: counter };
    addToCart(product);
    toggleModalCart();
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
        <div>
          <span  className="TitleIngredientsDetails">ALLERGENES : </span> <p className="IngredientsDetails"> {props.ingredients_details} </p>
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
      <Modal isShowing={isModalCartShowed} hide={toggleModalCart} title="Que souhaitez vous faire ?">
        <ModalCart toggle={toggleModalCart}/>
      </Modal>
    </div>
  );
}

export default DetailsProduct;
