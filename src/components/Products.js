import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import products from "./products.css";
import { useAuth } from "../context/GlobalState";
import img from "../imgaes/moon.jpg";

const Products = ({ title, price, rating, image, id }) => {
  const { dispatch  } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
 
  return (
    <div className="product">
      <div className="items">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product-rating">
          <Rating
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <img className="imgaes" src={image} alt="img" />
        <button className="boten" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Products;
