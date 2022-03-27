import React from "react";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header.jsx", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('is expected to display "sportshoes.com" logo', () => {
    expect(screen.getByTestId("header-logo")).toBeVisible();
  });

  it("is expected to display 'MEN' nav link", () => {
    expect(screen.getByTestId("header-men-btn")).toBeVisible();
  });

  it("is expected to display 'WOMEN' nav link", () => {
    expect(screen.getByTestId("header-women-btn")).toBeVisible();
  });
});
