import React from "react";
import BannersDisplay from "../components/BannersDisplay";
import { render, screen } from "@testing-library/react";

describe("BannersDisplay.jsx", () => {
  beforeEach(() => {
    render(<BannersDisplay />);
  });

  describe("first banner", () => {
    it("is expected to display banner image", () => {
      expect(screen.getByTestId("banner-image-1")).toBeVisible();
    });

    it("is expected to display correct image", () => {
      expect(screen.getByTestId("banner-image-1")).toHaveAttribute(
        "src",
        "images/sportshoes_banner_1.jpg"
      );
    });

    it("is expected to display banner title", () => {
      expect(screen.getByTestId("banner-title-1")).toBeVisible();
    });

    it("is expected to display banner description", () => {
      expect(screen.getByTestId("banner-description-1")).toBeVisible();
    });

    it("is expected to display banner link", () => {
      expect(screen.getByTestId("banner-link-1")).toBeVisible();
    });
  });

  describe("second banner", () => {
    it("is expected to display banner image", () => {
      expect(screen.getByTestId("banner-image-2")).toBeVisible();
    });

    it("is expected to display correct image", () => {
      expect(screen.getByTestId("banner-image-2")).toHaveAttribute(
        "src",
        "images/sportshoes_banner_2.jpg"
      );
    });

    it("is expected to display banner title", () => {
      expect(screen.getByTestId("banner-title-2")).toBeVisible();
    });

    it("is expected to display banner description", () => {
      expect(screen.getByTestId("banner-description-2")).toBeVisible();
    });

    it("is expected to display banner link", () => {
      expect(screen.getByTestId("banner-link-2")).toBeVisible();
    });
  });
});
