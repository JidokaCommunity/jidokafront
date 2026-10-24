import React from 'react';
import Members from '../../app/components/Members';

describe('<Members /> Component Test', () => {
  it('renders the loading state and then displays members', () => {
    cy.mount(<Members />);

    // Check initial loading state
    cy.contains('Loading...').should('be.visible');

    // Wait for the simulated fetch to complete and check for a specific member
    cy.contains('Juan Carlos Maldonado Beltran', { timeout: 1000 }).should('be.visible');

    // Verify static UI elements are present
    cy.get('h1').contains('Members');

    // Verify list rendering (10 members)
    cy.get('[data-testid="member-profile-card"]').should('have.length', 10);

    // Verify elements inside the first member card (FOUNDER role sorts first)
    cy.get('[data-testid="member-profile-card"]').first().within(() => {
      cy.get('img').should('have.attr', 'src').and('include', 'Juan+Carlos+Maldonado+Beltran');
      cy.contains('FOUNDER');
      cy.contains('Juan Carlos Maldonado Beltran');
      cy.contains('a', 'LinkedIn')
        .should('have.attr', 'href')
        .and('include', 'linkedin.com/in/juan-carlos-maldonado-beltran');
    });
  });
});
