import React, { useEffect, useState } from "react";
import style from "./Subtotal.module.css";
import * as CurrencyFormate from "react-currency-format";
import axios from "../axios/axios";
import { Button } from "@material-ui/core";

const Subtotal = () => {
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    const total = async () => {
      const Amount = cart.reduce((amount, item) => item.price + amount, 0);
      setSubTotal(Amount);
    };
    return total();
  }, [cart]);

  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get("/api/cart/all");
      setCart(data.product);
    };
    return product();
  }, [cart]);

  const handelPayment = async () => {
    try {
      const { data } = await axios.post("/api/payment/orders", {
        amount: subTotal,
      });

      return initPayment(data.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const initPayment = (data) => {
    const options = {
      key: process.env.REACT_APP_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "amazonPay",
      image:
        "https://pngshare.com/wp-content/uploads/2021/06/Amazon-Logo-Icon-7.png",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post("/api/payment/verify", response);
          alert(data.msg);
        } catch (error) {
          alert(error.messages);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className={style.subtotal}>
      <CurrencyFormate
        renderText={(value) => {
          return (
            <>
              <p className={style.total}>
                subtotal {cart.length} item : <strong>{value}</strong>
              </p>
              <small className={style.gift}>
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={subTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <Button onClick={handelPayment}>proceed to checkout</Button>
    </div>
  );
};

export default Subtotal;
