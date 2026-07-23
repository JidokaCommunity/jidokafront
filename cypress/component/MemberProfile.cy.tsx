import React from 'react'
import MemberProfile from '@/app/components/MemberProfile'

describe('<MemberProfile />', () => {
  beforeEach(() => {
    cy.mount(<MemberProfile />)
  })

  it('should render the member avatar, role badge, name and specialty', () => {
    cy.get('[data-testid="member-profile-card"]').within(() => {
      cy.get('img').should('have.attr', 'alt', 'Daniel Cardenas Parra')
      cy.contains('Senpai')
      cy.get('h1').should('contain.text', 'Daniel Cardenas Parra')
      cy.contains('Senior Software Engineer')
    })
  })

  it('should render working GitHub and LinkedIn links', () => {
    cy.contains('a', 'GitHub')
      .should('have.attr', 'href')
      .and('include', 'github.com')

    cy.contains('a', 'LinkedIn')
      .should('have.attr', 'href')
      .and('include', 'linkedin.com')
  })

  it('should open external links in a new tab safely', () => {
    cy.contains('a', 'GitHub').should('have.attr', 'target', '_blank')
    cy.contains('a', 'GitHub').should('have.attr', 'rel', 'noopener noreferrer')
  })
})
