import React from 'react'
import AvatarMenu from '@/app/components/AvatarMenu'
import { ProfileModalProvider } from '@/app/context/ProfileModalContext'

describe('<AvatarMenu />', () => {
  beforeEach(() => {
    cy.mount(
      <ProfileModalProvider>
        <AvatarMenu />
      </ProfileModalProvider>
    )
  })

  it('should render the avatar button and keep the menu closed by default', () => {
    cy.get('[data-testid="avatar-button"]').should('be.visible')
    cy.get('[data-testid="avatar-menu"]').should('not.exist')
  })

  it('should open the menu with all options when the avatar is clicked', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu"]').should('be.visible')
    // "My Profile" hidden until real authentication exists
    // cy.get('[data-testid="avatar-menu"]').contains('My Profile')
    cy.get('[data-testid="avatar-menu"]').contains('Settings')
    cy.get('[data-testid="avatar-menu"]').contains('Projects')
    cy.get('[data-testid="avatar-menu"]').contains('Log Out')
  })

  it('should style the logout option in red', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.contains('[role="menuitem"]', 'Log Out').should('have.class', 'text-red-600')
  })

  it('should close the menu when clicking outside', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu"]').should('be.visible')
    cy.get('body').click(0, 0)
    cy.get('[data-testid="avatar-menu"]').should('not.exist')
  })
})
