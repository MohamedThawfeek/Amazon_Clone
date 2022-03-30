import { Button } from "@material-ui/core";
import React from "react";
import style from "./Card1.module.css";
import { Card as CardData } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Price from "react-currency-format";
import axios from "../axios/axios";

const Card1 = ({ id, name, image, price, category, weight }) => {
  const navigate = useNavigate();

  const nav = () => {
    if (category === "dell") {
      navigate(`/singleCard1/computers/${category}/${id}`);
    } else if (category === "hp") {
      navigate(`/singleCard1/computers/${category}/${id}`);
    } else if (category === "lenovo") {
      navigate(`/singleCard1/computers/${category}/${id}`);
    } else if (category === "mac") {
      navigate(`/singleCard1/computers/${category}/${id}`);
    } else if (category === "ac") {
      navigate(`/singleCard1/homeAppliance/${category}/${id}`);
    } else if (category === "fan") {
      navigate(`/singleCard1/homeAppliance/${category}/${id}`);
    } else if (category === "fridge") {
      navigate(`/singleCard1/homeAppliance/${category}/${id}`);
    } else if (category === "oven") {
      navigate(`/singleCard1/homeAppliance/${category}/${id}`);
    } else if (category === "tv") {
      navigate(`/singleCard1/homeAppliance/${category}/${id}`);
    } else if (category === "washing_Machine") {
      navigate(`/singleCard1/homeAppliance/${category}/${id}`);
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
          {weight ? (
            <Button className={style.weight}>
              <span>Weight</span>
              {weight}
            </Button>
          ) : null}

          <Button className={style.cartButton} onClick={basket}>
            Add to Cart
          </Button>
        </CardData.Body>
      </CardData>
    </div>
  );
};

export default Card1;
