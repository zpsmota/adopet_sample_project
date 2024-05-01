describe('Sign up validation (Happy Path)', () => {
  it('Should be able to sign up as new user', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[id="name"]').type('John Smith');
    cy.get('input[id="email"]').type('john@smith.com');
    cy.get('input[id="pass-create"]').type('Password123');
    cy.get('input[id="pass-confirm"]').type('Password123');
    cy.contains('button', 'Cadastrar').click();
  })
})