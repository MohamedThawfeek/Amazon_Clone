import React from "react";
import style from "./GlobalProduct.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { setUser } from "../../../components/redux/action/user";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/amazon.png";

const GlobalProduct = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sign_out = () => {
    dispatch(setUser(""));
    localStorage.removeItem("Tokens");
    localStorage.removeItem("userInfo");
    navigate("/adminlogin");
  };

  const home = () => {
    navigate("/adminpage");
  };

  const books = () => {
    navigate("/books");
  };
  const computer = () => {
    navigate("/computer");
  };
  const game = () => {
    navigate("/game");
  };
  const mobile = () => {
    navigate("/mobile");
  };
  const software = () => {
    navigate("/software");
  };
  const homeappliance = () => {
    navigate("/homeappliance");
  };
  const grocerry = () => {
    navigate("/grocerry");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="" onClick={home} />

        <div className={style.info}>
          <div className={style.user_box}>
            <h3>{user ? user.name : null}</h3>
            <h4>{user ? (user.loginType === 1 ? "Admin" : "user") : null}</h4>
          </div>
          <Button onClick={sign_out}>Sign-Out</Button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.card} onClick={books}></div>
        <div className={style.card} onClick={computer}></div>
        <div className={style.card} onClick={game}></div>
        <div className={style.card} onClick={grocerry}></div>
        <div className={style.card} onClick={homeappliance}></div>
        <div className={style.card} onClick={mobile}></div>
        <div className={style.card} onClick={software}></div>
      </div>
    </div>
  );
};

export default GlobalProduct;
