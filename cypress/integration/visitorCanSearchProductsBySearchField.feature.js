describe("A visitor can search for products by typing a keyword in the search field and press enter", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://webshop.wm3.se/api/v1/shop/products/search?q=jordan&media_file=true",
      {
        fixture: "productsSearchResponse"
      }
    );
    cy.visit("/");
    cy.get("[data-cy=product-search-field]").type("jordan{enter}");
  });

  it("is expected to see first product result", () => {
    cy.get("[data-cy=product-card-1]")
      .should("contain.text", "Jordan Ultra Fly")
      .and("be.visible");
  });
});
