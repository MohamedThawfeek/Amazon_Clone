import { useEffect, useState } from "react";
import style from "./Home.module.css";
import logo from "../../assets/amazon.png";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Carousel from "../../components/Carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../components/redux/action/user";
import { Card } from "react-bootstrap";
import axios from "../../components/axios/axios";

const Home = () => {
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
    dispatch(setUser(null));
    localStorage.removeItem("Tokens");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  const carts = () => {
    navigate("/checkout");
  };
  const books = () => {
    navigate("all/books");
  };
  const games = () => {
    navigate("all/games");
  };

  const computer = () => {
    navigate("all/computer");
  };
  const grocerry = () => {
    navigate("all/grocerry");
  };
  const homeappliance = () => {
    navigate("all/homeappliance");
  };
  const mobiles = () => {
    navigate("all/mobiles");
  };
  const softwares = () => {
    navigate("all/softwares");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="" />

        <div className={style.inputArea}>
          <input type="text" placeholder={`Search ${user.name}`} />
          <button className={style.search}>
            <Search />
          </button>
        </div>
        <div className={style.headerOption}>
          <div className={style.info}>
            <p>Hello {user.name}</p>
            <button onClick={sign_out} className={style.signout}>
              Sign Out
            </button>
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

      <div>
        <Carousel />
      </div>

      <div className={style.cardCollection}>
        <Card className={style.cards}>
          <Card.Body>
            <Button onClick={books}>Books</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Body>
            <Button onClick={games}>Games</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Body>
            <Button onClick={computer}>Computers</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Body>
            <Button onClick={grocerry}>Grocerry </Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Body>
            <Button onClick={homeappliance}>Homeappliance</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Body>
            <Button onClick={mobiles}>Mobiles</Button>
          </Card.Body>
        </Card>

        <Card className={style.cards}>
          <Card.Body>
            <Button onClick={softwares}>Software Cd's</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
