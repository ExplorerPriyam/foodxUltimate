import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const ImpCaraosal = () => {
  return (
    <Carousel data-bs-theme="dark" >
    <Carousel.Item id='ImgC'>
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/300×300/?fruit"
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item id='ImgC'>
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/300×300/?momo"
        alt="Second slide"
      />
      
    </Carousel.Item>
    <Carousel.Item id='ImgC'>
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/300×300/?burger"
        alt="Third slide"
      />
      
    </Carousel.Item>
  </Carousel>
  );
}

export default ImpCaraosal;