import React from "react";
import style from "./Grocerry.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { setUser } from "../../../../components/redux/action/user";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/amazon.png";

const Grocerry = () => {
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

  const babycare = () => {
    navigate("/babycare");
  };
  const household = () => {
    navigate("/household");
  };
  const packagedfood = () => {
    navigate("/packagedfood");
  };
  const snacks = () => {
    navigate("/snacks");
  };

  const staples = () => {
    navigate("/staples");
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
        <div className={style.card} onClick={babycare}></div>
        <div className={style.card} onClick={household}></div>
        <div className={style.card} onClick={packagedfood}></div>
        <div className={style.card} onClick={snacks}></div>
        <div className={style.card} onClick={staples}></div>
      </div>
    </div>
  );
};

export default Grocerry;
