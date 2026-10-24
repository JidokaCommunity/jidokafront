describe('Members Page E2E', () => {
  it('should display the members list correctly', () => {
    cy.visit('http://localhost:3000/members');

    // Check if the title is there
    cy.get('h1').contains('Members').should('be.visible');

    // The component simulates a 500ms network request, wait for "Loading..." to disappear
    cy.contains('Loading...').should('not.exist');

    // Verify some specific members are rendered on screen
    cy.contains('Juan Carlos Maldonado Beltran').should('be.visible');
    cy.contains('Luz Karine Florez daza').should('be.visible');
    cy.contains('Stiven Valencia').should('be.visible');

    // Verify role display
    cy.contains('FOUNDER').should('be.visible');

    // Verify we have the 10 members rendered (the cards)
    cy.get('[data-testid="member-profile-card"]').should('have.length', 10);
  });
});
