describe("A visitor navigating to the main application url", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see welcome message header", () => {
    cy.get("[data-cy=welcome-header]")
      .should("contain.text", "Welcome to the app")
      .and("be.visible");
  });
});
