describe("Goals Page E2E", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/goals"); // Asegúrate de que esta ruta es accesible en tu app
    });

    it("should load the goals page", () => {
      cy.url().should("include", "/goals");
    });

    it("should display the Goals heading", () => {
      cy.get("h1").should("be.visible").and("have.text", "Goals");
    });

    it("should have the correct styles", () => {
      cy.get("h1").should("have.class", "text-6xl");
    });
  });