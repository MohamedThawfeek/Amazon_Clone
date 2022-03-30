import React, { useEffect, useState } from "react";
import style from "./Oneplus.module.css";
import logo from "../../../../assets/amazon.png";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/action/user";
import axios from "../../../axios/axios";
import Grocerry from "../../../Card/Grocerry";

const Oneplus = () => {
  const [cart, setCart] = useState([]);
  const [onePlus, setOnePlus] = useState([]);
  const [filters, setFilters] = useState("");

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
    setFilters(e.target.value);
  };

  const dataSearch = onePlus.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filters.toString().toLowerCase())
    );
  });

  useEffect(() => {
    const product = async () => {
      const { data } = await axios.get("/api/mobiles/oneplus/all");
      setOnePlus(data.product);
    };
    return product();
  }, [onePlus]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="" onClick={home} />

        <div className={style.inputArea}>
          <input
            type="text"
            placeholder={`Search ${user.name}`}
            onChange={filter}
            value={filters}
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
        {dataSearch.map((oneplus) => (
          <Grocerry
            key={oneplus._id}
            id={oneplus._id}
            name={oneplus.name}
            image={oneplus.images}
            price={oneplus.price}
            color={oneplus.color}
            category={oneplus.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Oneplus;
