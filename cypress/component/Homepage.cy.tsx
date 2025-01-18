import React from 'react'
import Homepage from '@/app/components/Homepage'

describe('<Homepage />', () => {
  it('Should render the home page component', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Homepage />)

    cy.get('img').should('have.attr', 'alt');
    cy.get('img').should('have.attr', 'width');
    cy.get('img').should('have.attr', 'height');
  })
})