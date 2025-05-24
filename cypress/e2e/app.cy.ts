describe('Homepage', ()=>{
    it('Should load the home page', () => {
        //Start the 'index' page
        cy.visit('http://localhost:3000/');

        //The home page should contain a h1 with 'JidJIDOKA Community'
        cy.get('h1').contains("We're dev's, persons and teachers of dreams of Technology");

        cy.get('img').should('have.length.gt', 0);

        cy.get('img').should('be.visible');
    })
    it('Should load the Who we are page', () => {
         //Start the 'index' page
         cy.visit('http://localhost:3000/who-we-are');

         //The home page should contain a h1 with 'JIDOKA Community'
         cy.get('h1').contains("Who we are");
    })
})