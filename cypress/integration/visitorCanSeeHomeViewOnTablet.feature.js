describe("A visitor navigating to the main application url on an iPad 2", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://webshop.wm3.se/api/v1/shop/products?media_file=true",
      {
        fixture: "productsIndexResponse"
      }
    );
    cy.viewport("ipad-2");
    cy.visit("/");
  });

  it("is expected to see responsive slideshow layout", () => {
    cy.get("[data-cy=slideshow]").should("have.css", "height", "372.953125px");
  });
});
