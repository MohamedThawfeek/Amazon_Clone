import React, { useEffect, useState } from "react";
import style from "./Checkout.module.css";
import axios from "../../components/axios/axios";
import logo from "../../assets/amazon.png";
import checkout from "../../assets/checkout.jpg";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../components/redux/action/user";
import io from "socket.io-client";
import CheckoutProduct from "../../components/checkoutproduct/CheckoutProduct";
import Subtotal from "../../components/subtotal/Subtotal";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socket = io("https://my-first-mern-app-a-c.herokuapp.com");

  const sign_out = () => {
    dispatch(setUser(""));
    localStorage.removeItem("Tokens");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const home = () => {
    navigate("/");
  };

  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get("/api/cart/all");

      setCart(data.product);
    };
    return product();
  }, [cart]);

  useEffect(() => {
    socket.connect();
    socket.on("new checkouts", (checkoutDetails) => {
      setCart((pre) => [...pre, checkoutDetails]);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="" onClick={home} />

        <div className={style.inputArea}>
          <input type="text" placeholder={`Search ${user.name}`} />
          <button>
            <Search />
          </button>
        </div>
        <div className={style.headerOption}>
          <div className={style.info}>
            <p>Hello {user.name}</p>
            <button onClick={sign_out}>Sign Out</button>
          </div>
          <div className={style.pages}>
            <p>Return</p>
            <b>& Orders</b>
          </div>
          <div className={style.pages}>
            <p>Your</p>
            <b>Prime</b>
          </div>
          <div className={style.basket}>
            <ShoppingBasket />
            <p>{cart.length}</p>
          </div>
        </div>
      </div>

      <div className={style.top}>
        <div className={style.checkout_left}>
          <img src={checkout} alt="" className={style.checkout_ad} />
        </div>

        {cart.length > 0 && (
          <div className={style.checkOutbox}>
            <Subtotal />
          </div>
        )}
      </div>

      {cart.length === 0 ? (
        <div className={style.zero}>
          <h2>Your shopping basket is empty</h2>
          <p>
            you have no items in yous basket. To buy more items, Click{" "}
            <span>" add to basket "</span> next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className={style.title}>your shopping basket</h2>
          {cart.map((item) => (
            <CheckoutProduct
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.images}
              price={item.price}
              color={item.color}
              weight={item.weight}
              category={item.category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
