import React, { useState } from "react";
import style from "./Signup.module.css";
import logo from "../../assets/Amazon_logo.svg.webp";
import { Button } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "../../components/axios/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();

  const on = () => {
    setEye(true);
    setVisible(true);
  };
  const off = () => {
    setEye(false);
    setVisible(false);
  };

  const sign_Up = async () => {
    if (!name || !email || !password) {
      alert("Enter all the details");
      return;
    }

    try {
      const { data } = await axios.post("/api/users/signup", {
        name,
        email,
        password,
      });

      alert(data.msg);
    } catch (error) {
      alert(error.message);
    }
    setEmail("");
    setName("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className={style.container}>
      <img src={logo} alt="" />

      <div className={style.content}>
        <h1>Sign up</h1>
        <h5>Name</h5>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          name="name"
        />
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
            name="password"
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

        <Button className={style.signup} onClick={sign_Up}>
          create your amazon account
        </Button>

        <p>
          By singing-in you agree to Amazon's condition of use & sale. please
          see our privacy notice, our cookies notice and our internet based ads
          notice
        </p>
      </div>
    </div>
  );
};

export default Signup;
