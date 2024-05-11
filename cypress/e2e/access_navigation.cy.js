describe('Validate pages being accessible', () => {
  it('Should load the main page for AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  it('Should load the Home / Pet List page for AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })
  it('Should load the Login page for AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })
  it('Should load the Sign Up page for AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro');
  })
})
describe('Validate Main Page\'s UI Elements', () => {
  it('Should find a sign up link on the main page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar');
    cy.get('a[data-test="register-button"]').should('be.visible').and('not.be.disabled');
  })
  it('Should find a log in link on the main page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'login');
    cy.get('a[data-test="login-button"]').should('be.visible').and('not.be.disabled');
  })
  it('Should find an available pets list link on the main page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção');
    cy.contains('a.button', 'Ver pets disponíveis para adoção').should('be.visible').and('not.be.disabled');
  })
})

describe('Validate Main Page\'s Navegability', () => {
  it('Should Navigate to the Main Page when the Home Icon is clicked and the user is not Logged In', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a.header__home').click();
    cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/');
  })
  it('Should Navigate to the Login page when the Message icon is clicked and the user is not Logged In', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a.header__message').click();
    cy.url().should('include', '/login');
  })
  // it('Should Navigate to the Main Page when the Home Icon is clicked and the user is Logged In', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/');
  //   cy.get('a.header__home').click();
  //   cy.url().should('include', '/home');
  // })
  // it('Should Navigate to the Login page when the Message icon is clicked and the user is Logged In', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/');
  //   cy.get('a.header__message').click();
  //   cy.url().should('include', '/mensagem');
  // })
  it('Should reach the Sign Up page by clicking the Sign Up link on the Main Page.', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[data-test="register-button"]').click();
    cy.url().should('include', '/cadastro');
  })
  it('Should reach the Login page by clicking the Login link on the Main Page.', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[data-test="login-button"]').click();
    cy.url().should('include', '/login');
  })
  it('Should reach the Pet List page by clicking the Pet List link on the Main Page.', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
    cy.url().should('include', '/home');
  })
})

describe('Validate Home / Pet List Page\'s Navegability', () => {
  it('Should Navigate to the Main Page when the Home Icon is clicked and the user is not Logged In', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.contains('a.card__contact[href="/mensagem"]', 'Falar com responsável').click();
    cy.url().should('include', '/login');
  })
  // it('Should Navigate to the Main Page when the Home Icon is clicked and the user is Logged In', () => {
  //   cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  //   cy.contains('a.card__contact[href="/mensagem"]', 'Falar com responsável').click();
  //   cy.url().should('include', '/mensagem');
  // })
})
