import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { carousel1, carousel2, carousel3, carousel4 } from "../assets/assets";
import Image from "next/image";
import React from "react";
import '../assets/css/style.css';

function Carousels() {
  return (
    <Carousel autoPlay infiniteLoop={true} interval={2000} showThumbs={false}>
      <div>
        <Image priority={true} src={carousel1} alt="carousel"/>
        <p className="legend">Hydrophonic Planting</p>
      </div>
      <div>
        <Image priority={true} src={carousel2} alt="carousel"/>
        <p className="legend">Lettuce Product's from Hydrophonic</p>
      </div>
      <div>
        <Image priority={true} src={carousel3} alt="carousel"/>
        <p className="legend">Pakcoy Vegetables</p>
      </div>
      <div>
        <Image priority={true} src={carousel4} alt="carousel"/>
        <p className="legend">Lettuce Vegetable</p>
      </div>
    </Carousel>
  );
}

export default Carousels;
