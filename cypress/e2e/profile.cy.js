describe('Profile Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.get('a[href="#projects"]').click();
    cy.get('a[href="#skills"]').click(); // Navigate to profile area
  });

  it('Profile bölümü sayfada olmalı', () => {
    cy.contains(/Profil|Profile/).should('be.visible');
  });

  it('Profil bilgileri görünebilir olmalı', () => {
    cy.contains(/Doğum tarihi|Birth Date/).should('be.visible');
  });

  it('Profil kartında en az 4 bilgi satırı olmalı', () => {
    cy.get('section').contains('Profil', { matchCase: false }).closest('section')
      .find('div').should('have.length.greaterThan', 3);
  });

  it('Hakkımda bölümü mevcut olmalı', () => {
    cy.contains(/Hakkımda|About/i).should('be.visible');
  });
});
