import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./Carousel.module.css";
import image1 from "../../assets/carousel img.jpg";
import image2 from "../../assets/carousel img1.jpg";
import image3 from "../../assets/carousel img2.jpg";

const Carousels = () => {
  return (
    <div className={style.container}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={image1} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image2} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image3} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
