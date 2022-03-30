import React from "react";
import style from "./CheckoutProduct.module.css";
import { Star } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Price from "react-currency-format";
import axios from "../axios/axios";

const CheckoutProduct = ({
  id,
  name,
  image,
  price,
  weight,
  color,
  category,
}) => {
  const del = async (id) => {
    try {
      await axios.delete(
        `/api/cart/delete/${id}`,

        {
          headers: {
            authorization: localStorage.getItem("Tokens"),
          },
        }
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.container}>
      <img className={style.image} src={image} alt="" />
      <div className={style.info}>
        <h2 className={style.title}>{name}</h2>

        <div className={style.rating}>
          <h5>Rating of the Product :</h5>
          <span>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
        </div>
        {weight ? (
          <p className={style.weight}>
            weight :<strong>{weight}</strong>
          </p>
        ) : null}

        {color ? (
          <p className={style.color}>
            color :<strong>{color}</strong>
          </p>
        ) : null}
        <p className={style.price}>
          price :
          <strong>
            <Price
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </strong>
        </p>
        <Button onClick={() => del(id)}>Remove from Basket</Button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
