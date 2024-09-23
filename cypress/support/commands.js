// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.contains('Log in').click()
    if (email)
        cy.get('#mail').type(email);
    if (password)    
        cy.get('#pass').type(password);
    cy.contains('Submit').click();
})

Cypress.Commands.add('checkLogoHeader', () => { 
    cy.get('.d-inline-block').should('be.visible');
    cy.get('.text-light > .ml-2').should('contain.text', 'Books list').and('be.visible');
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })