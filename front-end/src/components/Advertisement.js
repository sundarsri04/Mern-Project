import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Advertisement() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 ads-img"
          src="/images/ads4.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 ads-img"
          src="/images/ads2.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 ads-img"
          src="/images/ads1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Advertisement;
