import React from "react";
import { Carousel, Button } from "react-bootstrap";

const Slideshow = () => {
  return (
    <Carousel fade data-cy="slideshow">
      <Carousel.Item>
        <img
          data-cy="slide-1-image"
          className="d-block w-100"
          src="images/sportshoes_slide_1.jpg"
          alt="first slide"
          height={"560px"}
        />
        <Carousel.Caption
          style={{ top: "60%", bottom: "auto", paddingLeft: "43px" }}
        >
          <div className="text-start mt-0">
            <Button
              data-cy="slide-1-button-1"
              variant="light"
              size="sm"
              className="me-4 px-4"
            >
              BUY NOW
            </Button>
            <Button
              data-cy="slide-1-button-2"
              variant="outline-light"
              size="sm"
              className="px-4"
            >
              LEARN MORE
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sportshoes_slide_2.jpg"
          alt="second slide"
          height={"560px"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sportshoes_slide_3.jpg"
          alt="third slide"
          height={"560px"}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
