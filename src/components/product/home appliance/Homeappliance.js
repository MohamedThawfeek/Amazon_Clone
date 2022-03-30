import React, { useEffect, useState } from "react";
import style from "./Homeappliance.module.css";
import logo from "../../../assets/amazon.png";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/action/user";
import { Card } from "react-bootstrap";
import axios from "../../axios/axios";
import { Button } from "@material-ui/core";

const Homeappliance = () => {
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

  const home = () => {
    navigate("/");
  };
  const ac = () => {
    navigate("/all/ac");
  };

  const fan = () => {
    navigate("/all/fan");
  };
  const fridge = () => {
    navigate("/all/fridge");
  };
  const oven = () => {
    navigate("/all/oven");
  };
  const tv = () => {
    navigate("/all/tv");
  };
  const washingMachine = () => {
    navigate("/all/washingMachine");
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
          <div className={style.basket}>
            <ShoppingBasket />
            <p>{cart.length}</p>
          </div>
        </div>
      </div>

      <div className={style.cardCollection}>
        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={ac}>ac</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={fan}>fan</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={fridge}>fridge</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={oven}>oven</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={tv}>tv</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Button onClick={washingMachine}>washingMachine</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Homeappliance;
