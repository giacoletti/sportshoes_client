import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slideshow = () => {
  return (
    <Carousel fade data-cy="slideshow">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sportshoes_slide_1.jpg"
          alt="first slide"
          height={"560px"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sportshoes_slide_2.jpg"
          alt="second slide"
          height={"560px"}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sportshoes_slide_3.jpg"
          alt="third slide"
          height={"560px"}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
