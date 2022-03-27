describe("A visitor can change slide of the slideshow by clicking indicator buttons", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://webshop.wm3.se/api/v1/shop/products?media_file=true",
      { body: { products: [] } }
    );
    cy.visit("/");
    cy.get("[aria-label='Slide 2']").click();
  });

  it("is expected to see second image of the slideshow", () => {
    cy.get("[data-cy=slide-2-image]").should("be.visible");
  });

  describe("can click on third indicator button", () => {
    before(() => {
      cy.get("[aria-label='Slide 3']").click();
    });

    it("is expected to see third image of the slideshow", () => {
      cy.get("[data-cy=slide-3-image]").should("be.visible");
    });
  });
});
