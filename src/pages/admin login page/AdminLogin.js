import React, { useState } from "react";
import style from "./AdminLogin.module.css";
import { useDispatch } from "react-redux";
import { handelUser } from "../../components/redux/action/user";
import axios from "../../components/axios/axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [eye, setEye] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const on = () => {
    setEye(true);
    setVisible(true);
  };
  const off = () => {
    setEye(false);
    setVisible(false);
  };

  const Admin = async () => {
    if ((!email.trim(), !password.trim())) {
      alert("Please fill the details");
      return;
    }
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      if (data.token) {
        localStorage.setItem("Tokens", data.token);
        dispatch(handelUser(data.token));
        navigate("/adminpage");
      } else {
        alert(data.msg);
        navigate("/adminlogin");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Admin Login</h1>

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your E-mail"
        />
        <div className={style.input}>
          <input
            type={visible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
          {!eye ? (
            <span onClick={on} className={style.eye}>
              <Visibility />
            </span>
          ) : (
            <span onClick={off} className={style.eye}>
              <VisibilityOff />
            </span>
          )}
        </div>

        <div className={style.button}>
          <Button onClick={Admin}>Sign-In</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
