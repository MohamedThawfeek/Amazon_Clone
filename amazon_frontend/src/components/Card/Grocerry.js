import { Button } from "@material-ui/core";
import React from "react";
import style from "./Grocerry.module.css";
import { Card as CardData } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Price from "react-currency-format";
import axios from "../axios/axios";

const Grocerry = ({ id, name, image, price, category, weight, color }) => {
  const navigate = useNavigate();

  const nav = () => {
    if (category === "babycare") {
      navigate(`/singleCard1/grocery/${category}/${id}`);
    } else if (category === "household") {
      navigate(`/singleCard1/grocery/${category}/${id}`);
    } else if (category === "packagedfood") {
      navigate(`/singleCard1/grocery/${category}/${id}`);
    } else if (category === "snacks") {
      navigate(`/singleCard1/grocery/${category}/${id}`);
    } else if (category === "staples") {
      navigate(`/singleCard1/grocery/${category}/${id}`);
    } else if (category === "iphone") {
      navigate(`/singleCard1/mobiles/${category}/${id}`);
    } else if (category === "mi") {
      navigate(`/singleCard1/mobiles/${category}/${id}`);
    } else if (category === "oneplus") {
      navigate(`/singleCard1/mobiles/${category}/${id}`);
    } else if (category === "poco") {
      navigate(`/singleCard1/mobiles/${category}/${id}`);
    } else if (category === "realme") {
      navigate(`/singleCard1/mobiles/${category}/${id}`);
    } else if (category === "samsung") {
      navigate(`/singleCard1/mobiles/${category}/${id}`);
    }
  };

  const basket = async () => {
    await axios.post("/api/cart/add", {
      id,
      name,
      images: image,
      price,
      category,
      weight,
      color,
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
          <div>
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
          </div>

          {weight ? (
            <div className={style.buttons}>
              <button className={style.weight}>
                <span>Weight: </span>
                {weight}
              </button>
              <Button className={style.cartButton} onClick={basket}>
                Add to Cart
              </Button>
            </div>
          ) : null}

          {color ? (
            <div className={style.buttons}>
              <button className={style.color}>
                <span>Color: </span>
                {color}
              </button>
              <Button className={style.cartButton} onClick={basket}>
                Add to Cart
              </Button>
            </div>
          ) : null}
        </CardData.Body>
      </CardData>
    </div>
  );
};

export default Grocerry;
