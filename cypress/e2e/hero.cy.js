describe('Hero Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Hero bölümü görünebilir olmalı', () => {
    cy.get('section').first().should('be.visible');
  });

  it('Başlık metni görünebilir olmalı', () => {
    cy.contains(/Yaratıcı düşünür|Creative thinker/).should('be.visible');
  });

  it('Açıklama metni mevcut olmalı', () => {
    cy.get('section').first().find('p').should('have.length.greaterThan', 0);
  });

  it('Hire Me butonu tıklanabilir olmalı', () => {
    cy.get('section').first().contains(/Beni İşe Al|Hire me/).should('be.visible');
  });

  it('GitHub linki mevcut ve doğru olmalı', () => {
    cy.get('a[href="https://github.com/omrfth23"]').should('be.visible');
  });

  it('Hero bölümünde resim olmalı', () => {
    cy.get('section').first().find('img').should('exist');
  });

  it('Hire me butonuna tıklandığında toast mesajı gösterilmeli', () => {
    cy.get('section').first().find('button').first().click();
    cy.get('.Toastify__toast').should('exist');
  });
});
