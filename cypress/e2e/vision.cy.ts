describe("Vision Page E2E", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/vision"); // Asegúrate de que esta ruta es accesible en tu app
    });
  
    it("should load the vision page", () => {
      cy.url().should("include", "/vision");
    });
  
    it("should display the Vision heading", () => {
      cy.get("h1").should("be.visible").and("have.text", "Visión");
    });
  
    it("should have the correct styles", () => {
      cy.get("h1").should("have.class", "text-6xl");
    });
  });