import React, { useEffect, useState } from "react";
import style from "./PrivateRoute.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handelUser } from "../redux/action/user";
import { Outlet, Navigate } from "react-router-dom";
import spinner from "../../assets/spinner.gif";

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const [isToken, setIsToken] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    if (!user) {
      let token = localStorage.getItem("Tokens");

      if (token) {
        dispatch(handelUser(token));
      }
    }
    setTimeout(() => {
      setIsToken(true);
    }, 1000);
    return () => {
      isMounted = false;
    };
  }, [dispatch, user]);

  if (isToken) {
    return user ? <Outlet /> : <Navigate to="/login" />;
  }
  return (
    <div className={style.container}>
      <img src={spinner} alt="" />
    </div>
  );
};

export default PrivateRoute;
