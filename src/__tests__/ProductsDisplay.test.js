import React from "react";
import ProductsDisplay from "../components/ProductsDisplay";
import { render, screen } from "@testing-library/react";

describe("ProductsDisplay.jsx", () => {
  beforeEach(() => {
    render(<ProductsDisplay />);
  });

  xdescribe("search input field", () => {
    it("is expected to display search input field", () => {
      expect(screen.getByTestId("product-search-field")).toBeVisible();
    });

    it("is expected to have placeholder text 'Search product...'", () => {
      expect(screen.getByTestId("product-search-field")).toHaveAttribute(
        "placeholder",
        "Search product..."
      );
    });
  });
});
