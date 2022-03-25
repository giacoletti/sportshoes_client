describe("A visitor navigating to the main application url", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see slideshow", () => {
    cy.get("[data-cy=slideshow]").should("be.visible");
  });

  describe("can see first slide", () => {
    it("is expected to see first image", () => {
      cy.get("[data-cy=slide-1-image]").should("be.visible");
    });

    it("is expected to see 'Buy Now' button", () => {
      cy.get("[data-cy=slide-1-button-1]")
        .should("contain.text", "BUY NOW")
        .and("be.visible");
    });

    it("is expected to see 'Learn More' button", () => {
      cy.get("[data-cy=slide-1-button-2]")
        .should("contain.text", "LEARN MORE")
        .and("be.visible");
    });
  });
});
