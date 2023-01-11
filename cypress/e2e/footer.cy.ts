describe("Footer links", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("links are working", () => {
      // check that each link leads to the correct page
      cy.get("main")
        .contains("Docs")
        .should("have.attr", "href", "/dashboard/docs");

      cy.get("main")
        .contains("API")
        .should("have.attr", "href", "/dashboard/api");

      cy.get("main")
        .contains("Help")
        .should("have.attr", "href", "/dashboard/help");

      cy.get("main")
        .contains("Community")
        .should("have.attr", "href", "/dashboard/community");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("mobile links", () => {
      // check that all links are rendered
      cy.get('[data-cy="footer"]').find("a").should("have.length", 4);
    });
  });
});
