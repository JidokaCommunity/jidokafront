import React from 'react';
import Members from '../../app/components/Members';

describe('<Members /> Component Test', () => {
  it('renders the loading state and then displays members', () => {
    // Mount the component
    cy.mount(<Members />);
    
    // Check initial loading state
    cy.contains('Loading...').should('be.visible');
    
    // Wait for the simulated fetch to complete and check for a specific member
    cy.contains('Juan Maldonado', { timeout: 1000 }).should('be.visible');
    
    // Verify static UI elements are present
    cy.get('h1').contains('Members');
    cy.get('button').contains('Default').should('be.visible');
    cy.get('button').contains('A-Z').should('be.visible');
    cy.get('button').contains('List view').should('be.visible');
    
    // Verify list rendering (10 members)
    cy.get('div.bg-gray-100').should('have.length', 10);
    
    // Verify elements inside the first member card
    cy.get('div.bg-gray-100').first().within(() => {
      cy.get('img').should('have.attr', 'src').and('include', 'Juan+Maldonado');
      cy.get('h2').contains('Juan Maldonado');
      cy.get('p').contains('CEO, Senpai');
      cy.get('a').contains('Contacto (Email)')
        .should('have.attr', 'href', 'mailto:juan.carlos.maldonado.beltran@gmail.com');
    });
  });
});
