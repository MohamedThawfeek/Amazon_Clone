import React, { useEffect, useState } from "react";
import style from "./Computer.module.css";
import logo from "../../../assets/amazon.png";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/action/user";
import { Card } from "react-bootstrap";
import { Button } from "@material-ui/core";
import axios from "../../axios/axios";

const Computer = () => {
  const [cart, setCart] = useState([]);
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

  const carts = () => {
    navigate("/checkout");
  };

  const home = () => {
    navigate("/");
  };
  const dell = () => {
    navigate("/all/dell");
  };

  const hp = () => {
    navigate("/all/hp");
  };
  const lenovo = () => {
    navigate("/all/lenovo");
  };
  const mac = () => {
    navigate("/all/mac");
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

      <div className={style.cardCollection}>
        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={dell}>Dell</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={hp}>Hp</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={lenovo}>Lenovo </Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={mac}>Mac </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Computer;
