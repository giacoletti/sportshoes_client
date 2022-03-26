describe("A visitor navigating to the main application url", () => {
  before(() => {
    cy.intercept(
      "GET",
      "https://webshop.wm3.se/api/v1/shop/products?media_file=true",
      {
        fixture: "productsIndexResponse"
      }
    );
    cy.visit("/");
  });

  it("is expected to see slideshow", () => {
    cy.get("[data-cy=slideshow]").should("be.visible");
  });

  describe("can see header", () => {
    it("is expected to see logo", () => {
      cy.get("[data-cy=header-logo]").should("be.visible");
    });

    it("is expected to see 'MEN' button link", () => {
      cy.get("[data-cy=header-men-btn]")
        .should("contain.text", "MEN")
        .and("be.visible");
    });

    it("is expected to see 'WOMEN' button link", () => {
      cy.get("[data-cy=header-women-btn]")
        .should("contain.text", "WOMEN")
        .and("be.visible");
    });
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

  describe("can see products display", () => {
    it("is expected to see product search field", () => {
      cy.get("[data-cy=product-search-field]")
        .should("have.attr", "placeholder", "Search product...")
        .and("be.visible");
    });

    it("is expected to see first product card", () => {
      cy.get("[data-cy=product-card-1]")
        .should("contain.text", "Nike Zoom LeBron Soldier 10")
        .and("be.visible");
    });

    it("is expected to see second product card", () => {
      cy.get("[data-cy=product-card-2]")
        .should("contain.text", "Jordan Ultra Fly")
        .and("be.visible");
    });
  });
});
