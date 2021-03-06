/* eslint-disable no-undef */
describe('Login', function() {
    it('Visits login', function() {
        cy.visit('/');
        cy.contains('LOGIN').click();
        cy.url().should('be', '/');
    });

    it('Failed login with non existing account', function() {
        cy.visit('/');
        cy.get('#uniforms-0000-0000')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
        cy.get('#uniforms-0000-0001')
            .type('123')
            .should('have.value', '123');
        cy.contains('LOGIN').click();
        cy.wait(1000);
        cy.get('.s-alert-box-inner').should('contain', 'Something went wrong. Please check your credentials.');
    });

    it('Failed login with existing account', function() {
        cy.visit('/');
        cy.get('#uniforms-0000-0000')
            .type('nathan@mrbot.ai')
            .should('have.value', 'nathan@mrbot.ai');
        cy.get('#uniforms-0000-0001')
            .type('123')
            .should('have.value', '123');
        cy.contains('LOGIN').click();
        cy.wait(1000);
        cy.get('.s-alert-box-inner').should('contain', 'Something went wrong. Please check your credentials.');
    });
});
