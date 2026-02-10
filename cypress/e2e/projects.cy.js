describe('Projects Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('a[href="#projects"]').click();
  });

  it('Projects bölümüne erişilebilir olmalı', () => {
    cy.get('#projects').should('be.visible');
  });

  it('Projects başlığı görünebilir olmalı', () => {
    cy.contains(/Projeler|Projects/).should('be.visible');
  });

  it('En az 3 proje kartı olmalı', () => {
    cy.get('#projects').find('div').find('img').should('have.length.greaterThan', 2);
  });

  it('Proje kartlarında başlık olmalı', () => {
    cy.get('#projects').find('h3').should('have.length.greaterThan', 0);
  });

  it('Proje kartlarında tag\'lar bulunmalı', () => {
    cy.contains(/react|Redux|axios/i).should('be.visible');
  });

  it('Proje kartlarında Github ve Site linkleribulunmalı', () => {
    cy.get('#projects').contains('Github').should('have.length.greaterThan', 0);
  });

  it('Proje kartları tıklanabilir olmalı', () => {
    cy.get('#projects').find('div').find('img').first().click();
  });
});
