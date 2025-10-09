describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should display the main heading with correct text', () => {
        cy.get('h1')
            .should('be.visible')
            .and('contain.text', 'Training new developers with cutting-edge technology');
    });

    it('should display the community description', () => {
        cy.get('p')
            .contains('Non-profit community since 2017')
            .should('be.visible');
    });

    it('should have a functional join community button', () => {
        cy.get('a')
            .contains('Join the Community')
            .should('be.visible')
            .and('have.attr', 'href', '/members');
    });

    it('should display all required images', () => {
        cy.get('img')
            .should('have.length', 2)
            .each(($img) => {
                cy.wrap($img).should('be.visible');
            });
    });

    it('should display the mission section', () => {
        cy.get('h4')
            .contains('OUR MISSION')
            .should('be.visible');

        cy.contains('We are a non-profit community founded in 2017')
            .should('be.visible');
    });

    it('should have proper page structure', () => {
        cy.get('main').should('exist');
        cy.get('section').should('have.length.at.least', 3);
    });
});