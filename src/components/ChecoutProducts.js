import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./ChecotProducts.css";
import { useAuth } from "../context/GlobalState";
const ChecoutProducts = ({ id, title, price, rating, image }) => {
  const {dispatch} = useAuth();

  const removeFromBasket =() => {
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <div className="checoutProducts">
      <img className="imag-chouctout" src={image} alt="img-chek" />
      <div className="chekIfnorm">
        <p className="checkPragarg">{title}</p>
        <p className="chek-price">
          <small>$</small>
        </p>
        <strong>{price}</strong>
        <div className="chek=rating">
          <Rating
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <button className="check-remove" onClick={removeFromBasket} >Remove From Basket</button>
      </div>
    </div>
  );
};

export default ChecoutProducts;
