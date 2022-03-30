import React, { useEffect, useState } from "react";
import style from "./Snacks.module.css";
import logo from "../../../../assets/amazon.png";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/action/user";
import axios from "../../../axios/axios";
import Grocerry from "../../../Card/Grocerry";

const Snacks = () => {
  const [cart, setCart] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [packagedFood, setPackagedFood] = useState("");

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get("/api/cart/all");
      setCart(data.product);
    };
    return product();
  }, [cart]);

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

  const filter = (e) => {
    setPackagedFood(e.target.value);
  };

  const dataSearch = snacks.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(packagedFood.toString().toLowerCase())
    );
  });

  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get("/api/grocery/snacks/all");
      setSnacks(data.product);
    };
    return product();
  }, [snacks]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="" onClick={home} />

        <div className={style.inputArea}>
          <input
            type="text"
            placeholder={`Search ${user.name}`}
            onChange={filter}
            value={packagedFood}
          />
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
      <div className={style.shortPrice}></div>
      <div className={style.collection}>
        {dataSearch.map((snacks) => (
          <Grocerry
            key={snacks._id}
            id={snacks._id}
            name={snacks.name}
            image={snacks.images}
            price={snacks.price}
            category={snacks.category}
            weight={snacks.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default Snacks;
