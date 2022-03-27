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

  describe("can see slideshow", () => {
    it("is expected to see slideshow", () => {
      cy.get("[data-cy=slideshow]").should("be.visible");
    });

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

    it("is expected to not see slideshow controls", () => {
      cy.get("[data-cy=slideshow]").within(() => {
        cy.get(".carousel-control-prev-icon").should("not.exist");
        cy.get(".carousel-control-next-icon").should("not.exist");
      });
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

  describe("can see banners display", () => {
    it("is expected to see first banner", () => {
      cy.get("[data-cy=banner-image-1]").should("be.visible");
      cy.get("[data-cy=banner-title-1]")
        .should("contain.text", "FIGHT LIKE A SPIDER")
        .and("be.visible");
      cy.get("[data-cy=banner-description-1]")
        .should(
          "contain.text",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque modi cum quisquam quaerat laboriosam reiciendis impedit placeat rem temporibus!"
        )
        .and("be.visible");
      cy.get("[data-cy=banner-link-1]")
        .should("contain.text", "READ MORE")
        .and("be.visible");
    });

    it("is expected to see second banner", () => {
      cy.get("[data-cy=banner-image-2]").should("be.visible");
      cy.get("[data-cy=banner-title-2]")
        .should("contain.text", "RUN LIKE A CHEETAH")
        .and("be.visible");
      cy.get("[data-cy=banner-description-2]")
        .should(
          "contain.text",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque modi cum quisquam quaerat laboriosam reiciendis impedit placeat rem temporibus!"
        )
        .and("be.visible");
      cy.get("[data-cy=banner-link-2]")
        .should("contain.text", "READ MORE")
        .and("be.visible");
    });
  });
});
