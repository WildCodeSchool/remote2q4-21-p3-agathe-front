import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
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
        <Link to="/page_produit/:id" className="link--hover">
          {" "}
          <button>Détail</button>{" "}
        </Link>
        <Link to="/catalogue" className="link--hover">
          {" "}
          <button>Panier</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
