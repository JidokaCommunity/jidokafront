import React from 'react'
import Vision from '@/app/components/Vision'

describe('<Vision />', () => {
  beforeEach(() => {
    cy.mount(<Vision />)
  })

  it('should render the Vision title', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Vision')
  })

  it('should have proper component structure', () => {
    cy.get('main')
      .should('exist')
      .and('have.class', 'min-h-screen')
      .and('have.class', 'bg-white')
      .and('have.class', 'flex')
      .and('have.class', 'justify-center')
  })

  it('should have correct heading styles', () => {
    cy.get('h1')
      .should('have.class', 'font-extrabold')
      .and('have.class', 'text-gray-900')
      .and('have.class', 'font-jidoka-newsreader')
  })
})