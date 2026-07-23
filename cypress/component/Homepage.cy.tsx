import React from 'react'
import Homepage from '@/app/components/Homepage'

describe('<Homepage />', () => {
  beforeEach(() => {
    cy.mount(<Homepage />)
  })

  it('should render the main heading', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Training new developers with cutting-edge technology')
  })

  it('should render the community description', () => {
    cy.contains('Non-profit community since 2017')
      .should('be.visible')
  })

  it('should render the join community button', () => {
    cy.get('a')
      .contains('Join the Community')
      .should('be.visible')
      .and('have.attr', 'href', '/members')
  })

  it('should render all images, be visible, and load correctly', () => {
  cy.get('img')
    .should('have.length', 2)
    .each(($img) => {
      cy.wrap($img)
        .should('be.visible')
        .and('have.attr', 'alt')
        .and('not.be.empty');
      cy.wrap($img).and(($imgElement) => {
        const rect = $imgElement[0].getBoundingClientRect()
        expect(rect.width).to.be.greaterThan(0);
      });
      cy.wrap($img)
        .should('have.attr', 'src')
        .and('include', '_next/image');
    });
});

  it('should render the mission section', () => {
    cy.get('h4')
      .contains('OUR MISSION')
      .should('be.visible')
    
    cy.contains('We are a non-profit community founded in 2017')
      .should('be.visible')
  })

  it('should render the chain of favors section', () => {
    cy.get('h2')
      .contains('A Chain of Favors')
      .should('be.visible')
    
    cy.get('h3')
      .contains('Learn and Collaborate')
      .should('be.visible')
    
    cy.get('h3')
      .contains('Train New Jidokas')
      .should('be.visible')
  })

  it('should have proper component structure', () => {
    cy.get('main').should('exist')
    cy.get('section').should('have.length', 3)
  })
})