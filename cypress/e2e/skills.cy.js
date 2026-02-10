describe('Skills Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('a[href="#skills"]').click();
  });

  it('Skills bölümüne erişilebilir olmalı', () => {
    cy.get('#skills').should('be.visible');
  });

  it('Skills başlığı görünebilir olmalı', () => {
    cy.get('#skills').find('h2').should('be.visible');
  });

  it('En az 3 skill kartı olmalı', () => {
    cy.get('#skills').find('div').should('have.length.greaterThan', 2);
  });

  it('Her skill kartında isim ve açıklama bulunmalı', () => {
    cy.get('#skills').find('h3').should('be.visible');
    cy.get('#skills').find('p').should('have.length.greaterThan', 0);
  });

  it('Teknik beceri isimleri görünebilir olmalı', () => {
    cy.get('#skills').contains(/JavaScript|React|Node/).should('be.visible');
  });
});
