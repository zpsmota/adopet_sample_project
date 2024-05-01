describe('Main page is accessible', () => {
  it('Should load the main page for AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
})
describe('Main page has the sign up link', () => {
  it('Should find a sign up link on the main page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar');
    cy.get('a[data-test="register-button"]').should('be.visible').and('not.be.disabled');
  })
})
describe('Main page has the log in link', () => {
  it('Should find a log in link on the main page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'login');
    cy.get('a[data-test="login-button"]').should('be.visible').and('not.be.disabled');
  })
})