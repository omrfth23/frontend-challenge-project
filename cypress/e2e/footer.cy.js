describe('Footer Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.scrollTo('bottom');
  });

  it('Footer görünebilir olmalı', () => {
    cy.get('footer').should('be.visible');
  });

  it('Footer başlığı görünebilir olmalı', () => {
    cy.get('footer').find('h2').should('be.visible');
  });

  it('Email linki mevcut olmalı', () => {
    cy.get('footer').contains('almilasu@gmail.com').should('be.visible');
  });

  it('Email linki doğru href\'e sahip olmalı', () => {
    cy.get('footer').find('a').should('have.attr', 'href').and('include', 'mailto:');
  });

  it('Footer linklerine sahip olmalı', () => {
    cy.get('footer').find('a').should('have.length.greaterThan', 3);
  });
});
