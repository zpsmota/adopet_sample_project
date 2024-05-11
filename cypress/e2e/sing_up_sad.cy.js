describe('Sign up validation (Sad Path)', () => {
  it('Should incorrectly fill the Sign Up form and receive instructions after attempting to submit', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    cy.get('p.error').contains('É necessário informar um endereço de email').should('be.visible');
    cy.get('p.error').contains('Crie uma senha').should('be.visible');
    cy.get('p.error').contains('Repita a senha criada acima').should('be.visible');
  })
})