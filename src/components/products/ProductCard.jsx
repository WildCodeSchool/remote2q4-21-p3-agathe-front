import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartDispatchContext, addToCart } from "../../contexts/CartContext";
import Modal from "../modal/modal"
import useModal from "../modal/useModal";
import ModalCart from "../cart/ModalCart";
import "./ProductCard.css";

function ProductCard(props) {
  const dispatch = useContext(CartDispatchContext);
  const { isShowing: isModalCartShowed, toggle: toggleModalCart } = useModal();
  const handleAddToCart = () => {
    const product = { ...props, quantity: 1 };
    addToCart(dispatch, product);
    toggleModalCart();
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
          <button>Détail</button>
        </Link>
        <Link to="#" className="link--hover">
          <button onClick={handleAddToCart}>Panier</button>
        </Link>
      </div>
      <Modal isShowing={isModalCartShowed} hide={toggleModalCart} title="Que souhaitez vous faire ?">
        <ModalCart toggle={toggleModalCart}/>
      </Modal>
    </div>
  );
}

export default ProductCard;
