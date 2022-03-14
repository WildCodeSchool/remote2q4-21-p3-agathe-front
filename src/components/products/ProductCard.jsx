import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartDispatchContext, addToCart } from "../../contexts/CartContext";
import "./ProductCard.css";

function ProductCard(props) {
  const dispatch = useContext(CartDispatchContext);
  const handleAddToCart = () => {
    const product = { ...props, quantity: 1 };
    addToCart(dispatch, product);
    // setIsAdded(true);
    // setTimeout(() => {
    // setIsAdded(false);
    // }, 3500);
  };
  return (
    <div className={`ProductCardBase ${props.className}`}>
      <img
        className="ProductCardImage"
        src={`/assets/img/${props.ProductID}.jpeg`}
        alt={props.name}
      />
      <h4 className="ProductCardTitle">{props.name}</h4>
      <p className="ProductCardPrice">{props.price} €</p>
      <div className="ProductCardBase_buttons">
        <Link to={`/page_produit/${props.ProductID}`} className="link--hover">
          {" "}
          <button>Détail</button>{" "}
        </Link>
        <Link to="/catalogue" className="link--hover">
          {" "}
          <button onClick={handleAddToCart}>Panier</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
