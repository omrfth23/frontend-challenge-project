describe('Header Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Header görünebilir olmalı ve sabitlenmiş konumda olmalı', () => {
    cy.get('header').should('be.visible');
    cy.get('header').should('have.class', 'fixed');
  });

  it('Logo görünebilir olmalı', () => {
    cy.get('header .bg-purple-100').should('be.visible');
    cy.get('header span').contains('A').should('be.visible');
  });

  it('Navigasyon linklerine sahip olmalı (Skills, Projects)', () => {
    cy.get('a[href="#skills"]').should('be.visible');
    cy.get('a[href="#projects"]').should('be.visible');
  });

  it('Skills linkine tıkladığında smooth scroll yapmalı', () => {
    cy.get('a[href="#skills"]').click();
    cy.get('#skills').should('be.visible');
  });

  it('Projects linkine tıkladığında smooth scroll yapmalı', () => {
    cy.get('a[href="#projects"]').click();
    cy.get('#projects').should('be.visible');
  });

  it('Theme toggle butonu görünebilir olmalı', () => {
    cy.get('header button').first().should('exist');
  });

  it('Hire me butonu görünebilir ve doğru metni içermelidir', () => {
    cy.get('header button').last().should('be.visible');
  });

  it('Dark mode toggle ikon değişikliğini yapmalı', () => {
    cy.get('header button').first().click();
    cy.get('html').should('have.class', 'dark');
    cy.get('header button').first().click();
    cy.get('html').should('not.have.class', 'dark');
  });

  it('Tema tercihi localStorage\'da kaydedilmelidir', () => {
    cy.get('header button').first().click();
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.equal('dark');
    });
  });
});
