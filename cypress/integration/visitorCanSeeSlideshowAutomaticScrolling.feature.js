describe("A visitor can see the slideshow changing picture automatically", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://webshop.wm3.se/api/v1/shop/products?media_file=true",
      { body: { products: [] } }
    );
    cy.visit("/");
  });

  it("is expected to see second image after 5 seconds", () => {
    cy.wait(5000).then(() => {
      cy.get("[data-cy=slide-2-image]").should("be.visible");
    });
  });

  it("is expected to see third image after 5 seconds", () => {
    cy.wait(5000).then(() => {
      cy.get("[data-cy=slide-3-image]").should("be.visible");
    });
  });

  it("is expected to see first image again after 5 seconds", () => {
    cy.wait(5000).then(() => {
      cy.get("[data-cy=slide-1-image]").should("be.visible");
    });
  });
});
