import React from "react";
import Slider from "react-slick";
import './Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="img-fluid" src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" />
        </div>
        <div>
          <img className="img-fluid" src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" />
        </div>
       
      </Slider>
    </div>
  );
}

export default SimpleSlider;
