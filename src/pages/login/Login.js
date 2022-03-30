import React, { useState } from "react";
import style from "./Login.module.css";
import logo from "../../assets/Amazon_logo.svg.webp";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { handelUser } from "../../components/redux/action/user";
import axios from "../../components/axios/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = () => {
    navigate("/signup");
  };

  const on = () => {
    setEye(true);
    setVisible(true);
  };
  const off = () => {
    setEye(false);
    setVisible(false);
  };

  const login = async () => {
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
        navigate("/");
      } else {
        alert(data.msg);
        navigate("/login");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.container}>
      <img src={logo} alt="" />

      <div className={style.content}>
        <h1>Sign in</h1>
        <h5>E-mail</h5>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          name="email"
        />
        <h5>Password</h5>
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
        <Button className={style.login} onClick={login}>
          Sign in
        </Button>
        <p>
          By singing-in you agree to Amazon's condition of use & sale. please
          see our privacy notice, our cookies notice and our internet based ads
          notice
        </p>
        <Button className={style.signup} onClick={signup}>
          create your amazon account
        </Button>
      </div>
    </div>
  );
};

export default Login;
