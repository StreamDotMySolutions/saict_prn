import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const BannerCarousel = () => {

  const imageSource = "img/WEB BANNER PRU15-01.png";
  const totalImages = 1;

    return (
      <Carousel controls={totalImages > 1} indicators={totalImages > 1}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageSource}
          alt="PRU DUN KE-15"
        />
      </Carousel.Item>
    </Carousel>
    );
  };
  
export default BannerCarousel