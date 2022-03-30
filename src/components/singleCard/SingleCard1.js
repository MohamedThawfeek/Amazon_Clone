import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import style from "./SingleCard.module.css";
import logo from "../../assets/amazon.png";
import { Search, ShoppingBasket, Star } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/action/user";
import Price from "react-countup";
import { Button } from "@material-ui/core";

const SingleCard1 = () => {
  const [product, setProduct] = useState([]);
  const { id, category, item } = useParams();
  const [cart, setCart] = useState([]);

  const basket = async () => {
    await axios.post("/api/cart/add", {
      name: product.name,
      id: product._id,
      images: product.images,
      price: product.price,
      category: product.category,
      weight: product.weight,
      color: product.color,
    });
  };

  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get("/api/cart/all");
      setCart(data.product);
    };
    return product();
  }, [cart]);

  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get(`/api/${category}/${item}/${id}`);
      setProduct(data.product[0]);
    };
    return product();
  }, [id, category, item]);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sign_out = () => {
    dispatch(setUser(""));
    localStorage.removeItem("Tokens");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const home = () => {
    navigate("/");
  };
  const carts = () => {
    navigate("/checkout");
  };

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
          <div className={style.basket} onClick={carts}>
            <ShoppingBasket />
            <p>{cart.length}</p>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.productImage}>
          <img src={product.images} alt="" />
        </div>

        <div className={style.productInfo}>
          <h1>{product.name}</h1>

          <div className={style.rating}>
            <h4>Rating of the Product :</h4>
            <span>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
          </div>

          <h5>
            <span>price :</span>
            <Price
              start={0}
              end={product.price}
              duration={5}
              separator=","
              prefix="₹ "
              className={style.h5}
            />
          </h5>

          <Button className={style.cartButton} onClick={basket}>
            Add to cart
          </Button>

          <div className={style.someContent}>
            <b>View 3 more offers</b>

            <p>Coupons for you</p>
            <p>
              Special PriceGet extra 20% off upto ₹100 on 1 item(s)T&C Available
              offers
            </p>
            <p>
              Special PriceGet extra 18% off (price inclusive of discount)T&C
            </p>
            <p>
              Combo OfferBuy 3 items save 5%;Buy 4 save 7%;Buy 5+ save 10%See
              all productsT&C
            </p>
            <p>
              Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
              CardT&C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard1;
