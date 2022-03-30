import React from "react";
import style from "./Admin.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { setUser } from "../../components/redux/action/user";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/amazon.png";

const Admin = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sign_out = () => {
    dispatch(setUser(""));
    localStorage.removeItem("Tokens");
    localStorage.removeItem("userInfo");
    navigate("/adminlogin");
  };

  const users = () => {
    navigate("/all/users");
  };

  const product = () => {
    navigate("/all/product");
  };

  const orders = () => {
    navigate("/all/orders");
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="" />
        <div className={style.info}>
          <div className={style.user_box}>
            <h3>{user ? user.name : null}</h3>
            <h4>{user ? (user.loginType === 1 ? "Admin" : "user") : null}</h4>
          </div>
          <Button onClick={sign_out}>Sign-Out</Button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.card} onClick={users}></div>
        <div className={style.card} onClick={product}></div>
        <div className={style.card} onClick={orders}></div>
      </div>
    </div>
  );
};

export default Admin;
