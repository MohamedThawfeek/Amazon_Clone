import React from "react";
import style from "./Mobiles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { setUser } from "../../../../components/redux/action/user";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/amazon.png";

const Mobiles = () => {
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

  const iphone = () => {
    navigate("/iphone");
  };
  const mi = () => {
    navigate("/mi");
  };
  const oneplus = () => {
    navigate("/oneplus");
  };
  const samsung = () => {
    navigate("/samsung");
  };

  const realme = () => {
    navigate("/realme");
  };
  const poco = () => {
    navigate("/poco");
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
        <div className={style.card} onClick={iphone}></div>
        <div className={style.card} onClick={mi}></div>
        <div className={style.card} onClick={oneplus}></div>
        <div className={style.card} onClick={poco}></div>
        <div className={style.card} onClick={realme}></div>
        <div className={style.card} onClick={samsung}></div>
      </div>
    </div>
  );
};

export default Mobiles;
