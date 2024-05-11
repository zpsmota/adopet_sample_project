describe('Sign up validation (Happy Path)', () => {
  it('Should be able to sign up a new user by filling and submitting the form items on the "Sign Up" page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('John Smith');
    cy.get('[data-test="input-email"]').type('john@smith.com');
    cy.get('[data-test="input-password"]').type('Password123');
    cy.get('[data-test="input-confirm-password"]').type('Password123');
    cy.get('[data-test="submit-button"]').click();
  })
})