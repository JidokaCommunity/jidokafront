describe('Vision Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/vision')
  })

  it('should load the vision page successfully', () => {
    cy.url().should('include', '/vision')
  })

  it('should display the Vision heading', () => {
    cy.get('h1')
      .should('be.visible')
      .and('contain.text', 'Vision')
  })

  it('should have proper page structure', () => {
    cy.get('main').should('exist')
    cy.get('h1').should('have.length', 1)
  })

  it('should have responsive design classes', () => {
    cy.get('h1')
      .should('have.class', 'font-extrabold')
      .and('have.class', 'text-gray-900')
  })
})