describe("Updating a metric", () => {
  it("Sets the done date to today", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="water"]').click();

    cy.get('[data-testid="waterDone"]').contains("01/05");
  });
});
