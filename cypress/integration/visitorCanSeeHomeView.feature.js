describe("A visitor navigating to the main application url", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see slideshow", () => {
    cy.get("[data-cy=slideshow]").should("be.visible");
  });
});
