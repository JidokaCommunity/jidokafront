import React from 'react'
import AvatarMenu from '@/app/components/AvatarMenu'
import ProfileModal from '@/app/components/ProfileModal'
import { ProfileModalProvider } from '@/app/context/ProfileModalContext'

function Harness() {
  return (
    <ProfileModalProvider>
      <AvatarMenu />
      <ProfileModal />
    </ProfileModalProvider>
  )
}

describe('<ProfileModal />', () => {
  beforeEach(() => {
    cy.mount(<Harness />)
  })

  it('should stay closed until "Mi Perfil" is clicked from the Avatar menu', () => {
    cy.get('[data-testid="profile-modal-overlay"]').should('not.exist')
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu-my-profile"]').click()
    cy.get('[data-testid="profile-modal-overlay"]').should('be.visible')
  })

  it('should render as a blurred overlay on top of the page, without navigating away', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu-my-profile"]').click()

    cy.get('[data-testid="profile-modal-overlay"]')
      .should('have.class', 'backdrop-blur-sm')
      .and('have.class', 'fixed')

    cy.get('[data-testid="member-profile-card"]').should('be.visible')
  })

  it('should close when clicking the close button', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu-my-profile"]').click()
    cy.get('[data-testid="profile-modal-close"]').click()
    cy.get('[data-testid="profile-modal-overlay"]').should('not.exist')
  })

  it('should close when clicking the backdrop', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu-my-profile"]').click()
    cy.get('[data-testid="profile-modal-overlay"]').click('topLeft')
    cy.get('[data-testid="profile-modal-overlay"]').should('not.exist')
  })

  it('should close when pressing Escape', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu-my-profile"]').click()
    cy.get('body').type('{esc}')
    cy.get('[data-testid="profile-modal-overlay"]').should('not.exist')
  })

  it('should not close when clicking inside the card', () => {
    cy.get('[data-testid="avatar-button"]').click()
    cy.get('[data-testid="avatar-menu-my-profile"]').click()
    cy.get('[data-testid="member-profile-card"]').click()
    cy.get('[data-testid="profile-modal-overlay"]').should('be.visible')
  })
})
