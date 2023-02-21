// https://docs.cypress.io/api/introduction/api.html

describe("Home page", () => {
  it("visits the app root url", () => {
    cy.visit("/hello");
    cy.get("h1").contains("Hello world");
  });
});
