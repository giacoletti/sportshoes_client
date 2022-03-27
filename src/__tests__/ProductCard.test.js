import React from "react";
import ProductCard from "../components/ProductCard";
import { render, screen } from "@testing-library/react";

const product = {
  index: 1,
  id: 28943,
  name: "Nike Zoom LeBron Soldier 10",
  sku: "12001",
  reference: "12001 - Nike Zoom LeBron Soldier 10",
  url: "nike-zoom-lebron-soldier-10",
  variant_id: 76586,
  product_image: {
    id: 84763,
    fileable_type: "product",
    product_id: 28943,
    variant_id: null,
    presentation: { sv: "" },
    position: 1,
    media_file_id: 124926,
    options: null,
    url: "https://s3-eu-west-1.amazonaws.com/static.wm3.se/sites/384/media/124926_original_nike-lebron-soldier-10-think-pink-101.png?1486647060"
  }
};

describe("ProductCard.jsx", () => {
  beforeEach(() => {
    render(<ProductCard product={product} />);
  });

  it("is expected to display card element", () => {
    expect(screen.getByTestId("product-card-1")).toBeVisible();
  });

  it("is expected to have style height 100%", () => {
    expect(screen.getByTestId("product-card-1")).toHaveStyle({
      height: "100%"
    });
  });

  describe("card image", () => {
    it("is expected to be displayed", () => {
      expect(screen.getByTestId("card-image-1")).toBeVisible();
    });

    it("is expected to have right url", () => {
      expect(screen.getByTestId("card-image-1")).toHaveAttribute(
        "src",
        "https://s3-eu-west-1.amazonaws.com/static.wm3.se/sites/384/media/124926_original_nike-lebron-soldier-10-think-pink-101.png?1486647060"
      );
    });
  });

  describe("card title", () => {
    it("is expected to be displayed", () => {
      expect(screen.getByTestId("card-title-1")).toBeVisible();
    });

    it("is expected to be uppercase", () => {
      expect(screen.getByTestId("card-title-1")).toHaveStyle({
        textTransform: "uppercase"
      });
    });
  });
});
