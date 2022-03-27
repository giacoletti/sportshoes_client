describe("A visitor can search for products by typing a keyword in the search field and press enter", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://webshop.wm3.se/api/v1/shop/products?media_file=true",
      { body: { products: [] } }
    );
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

  it("is expected to see second product result", () => {
    cy.get("[data-cy=product-card-2]")
      .should("contain.text", "Jordan Ultra Fly")
      .and("be.visible");
  });

  describe("can see an empty products list when there are no search results", () => {
    before(() => {
      cy.intercept(
        "GET",
        "https://webshop.wm3.se/api/v1/shop/products/search?q=oiuajdoisaj&media_file=true",
        {
          body: {
            products: []
          }
        }
      );
      cy.get("[data-cy=product-search-field]")
        .clear()
        .type("oiuajdoisaj{enter}");
    });

    it("is expected to see an empty list", () => {
      cy.get("[data-cy=product-card-1]").should("not.exist");
    });
  });

  describe("can see all products when the search field has been cleared and 'Enter' is pressed", () => {
    before(() => {
      cy.intercept(
        "GET",
        "https://webshop.wm3.se/api/v1/shop/products/search?q=&media_file=true",
        {
          fixture: "productsSearchWithEmptyQueryResponse"
        }
      );
      cy.get("[data-cy=product-search-field]").clear().type("{enter}");
    });

    it("is expected to see first product card", () => {
      cy.get("[data-cy=product-card-1]")
        .should("contain.text", "Dame 3")
        .and("be.visible");
    });

    it("is expected to see second product card", () => {
      cy.get("[data-cy=product-card-2]")
        .should("contain.text", "Flyknit Racer")
        .and("be.visible");
    });
  });
});
