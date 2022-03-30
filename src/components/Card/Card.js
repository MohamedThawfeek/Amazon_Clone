import { Button } from "@material-ui/core";
import React from "react";
import style from "./Card.module.css";
import { Card as CardData } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Price from "react-currency-format";
import axios from "../axios/axios";

const Card = ({ id, name, image, price, category }) => {
  const navigate = useNavigate();

  const nav = () => {
    navigate(`/singleCard/${category}/${id}`);
  };

  const basket = async () => {
    await axios.post("/api/cart/add", {
      name,
      id,
      images: image,
      price,
      category,
    });
  };

  return (
    <div className={style.container}>
      <CardData className={style.cards}>
        <CardData.Img
          variant="top"
          src={image}
          className={style.productImage}
          onClick={nav}
        />
        <CardData.Body>
          <h5 className={style.productName}>{name}</h5>
          <strong className={style.productPrice}>
            price
            <span className={style.price}>
              <Price
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </span>
          </strong>

          <Button className={style.cartButton} onClick={basket}>
            Add to Cart
          </Button>
        </CardData.Body>
      </CardData>
    </div>
  );
};

export default Card;
