import React from "react";
import Slideshow from "../components/Slideshow";
import { render, screen } from "@testing-library/react";

describe("Slideshow.jsx", () => {
  beforeEach(() => {
    render(<Slideshow />);
  });

  it("is expected to display slideshow element", () => {
    expect(screen.getByTestId("slideshow")).toBeVisible();
  });

  describe("first slide", () => {
    it("is expected to display first slide image", () => {
      expect(screen.getByTestId("slide-1-image")).toBeVisible();
    });

    it("is expected to display right image", () => {
      expect(screen.getByTestId("slide-1-image")).toHaveAttribute(
        "src",
        "images/sportshoes_slide_1.jpg"
      );
    });

    it("is expected to display 'BUY NOW' button", () => {
      expect(screen.getByTestId("slide-1-button-1")).toBeVisible();
    });

    it("is expected to display 'LEARN MORE' button", () => {
      expect(screen.getByTestId("slide-1-button-2")).toBeVisible();
    });
  });

  describe("second slide", () => {
    it("is expected to display second slide image", () => {
      expect(screen.getByTestId("slide-2-image")).toBeVisible();
    });

    it("is expected to display right image", () => {
      expect(screen.getByTestId("slide-2-image")).toHaveAttribute(
        "src",
        "images/sportshoes_slide_2.jpg"
      );
    });
  });

  describe("third slide", () => {
    it("is expected to display third slide image", () => {
      expect(screen.getByTestId("slide-3-image")).toBeVisible();
    });

    it("is expected to display right image", () => {
      expect(screen.getByTestId("slide-3-image")).toHaveAttribute(
        "src",
        "images/sportshoes_slide_3.jpg"
      );
    });
  });
});
