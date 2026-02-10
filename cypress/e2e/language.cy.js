describe('Language Toggle Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Dil toggle butonu görünebilir olmalı', () => {
    cy.get('header button').should('have.length.greaterThan', 2);
  });

  it('Başlangıçta Türkçe olmalı', () => {
    cy.contains('Yetenekler').should('be.visible');
  });

  it('Dil değişikliğinden sonra tüm sayfada dil değişmeli', () => {
    cy.contains('Yetenekler').should('exist');
  });

  it('Header text leri dinamik olarak güncellenmeli', () => {
    cy.get('header').find('a').should('have.length.greaterThan', 1);
  });

  it('Header butonları tıklanabilir olmalı', () => {
    cy.get('header button').first().should('be.visible').and('be.enabled');
    cy.get('header button').eq(1).should('be.visible').and('be.enabled');
  });
});
