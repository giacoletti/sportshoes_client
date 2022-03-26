import React from "react";
import { Carousel, Button } from "react-bootstrap";

const Slideshow = () => {
  return (
    <Carousel
      data-cy="slideshow"
      fade
      indicators={window.screen.width < 500 ? false : true}
      nextIcon={
        <span
          aria-hidden="true"
          hidden
          className="carousel-control-next-icon"
        />
      }
      prevIcon={
        <span
          aria-hidden="true"
          hidden
          className="carousel-control-next-icon"
        />
      }
      style={{ marginTop: "-56px", position: "relative", zIndex: 0 }}
    >
      <Carousel.Item>
        <img
          data-cy="slide-1-image"
          className="d-block w-100"
          src="images/sportshoes_slide_1.jpg"
          alt="first slide"
        />
        <Carousel.Caption
          style={{ top: "62%", bottom: "auto", paddingLeft: "4vw" }}
        >
          <div className="text-start">
            <Button
              data-cy="slide-1-button-1"
              variant="light"
              className="me-4 px-4"
            >
              BUY NOW
            </Button>
            <Button
              data-cy="slide-1-button-2"
              variant="outline-light"
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
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sportshoes_slide_3.jpg"
          alt="third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
