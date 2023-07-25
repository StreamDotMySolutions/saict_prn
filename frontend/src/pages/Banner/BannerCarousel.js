import Carousel from 'react-bootstrap/Carousel';

const BannerCarousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/WEB BANNER PRU15-01.png"
            alt="PRU DUN KE-15"
          />
        </Carousel.Item>
      </Carousel>
    );
  };
  
export default BannerCarousel