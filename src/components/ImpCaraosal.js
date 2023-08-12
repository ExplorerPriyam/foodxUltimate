import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const ImpCaraosal = () => {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/1378x1080/?fruit"
        alt="First slide"
        id='image_x'
      />
      
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/1378x1080/?momo"
        alt="Second slide"
        id='image_x'
      />
      
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/1378x1080/?burger"
        alt="Third slide"
        id='image_x'
      />
      
    </Carousel.Item>
  </Carousel>
  );
}

export default ImpCaraosal;