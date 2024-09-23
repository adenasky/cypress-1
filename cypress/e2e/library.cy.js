describe('Main page tests', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Page display test', () => {
    cy.checkLogoHeader();
  })

    it('Login test', () => {
    cy.login("bropet@mail.ru","123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible", true);
  })

  it('Empty password test', () => {
    cy.login("bropet@mail.ru", null);
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
    })
  })

  it('Empty email test', () => {
    cy.login(null,"123");
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
    })
  })
})

describe('Books tests',() => {
  beforeEach(()=>{
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
  })

  it("Add new book",()=>{
      cy.contains('Add new').click();
      cy.get('#title').type("Винни Пух");
      cy.contains("Submit").click();
      cy.contains('Винни Пух').should('be.visible');
  });

  it("Add favorite book",()=>{
      cy.contains("Add to favorite").click();
      cy.contains("Favorites").click();
      cy.get(".card-body").then((elements) => {
          expect(elements).to.have.length.at.least(1);
      });
  });

  it("Delete favorite book",()=>{
      cy.contains("Favorite").click();
      cy.contains("Delete from favorite").click();
      cy.contains("Please add some book").should("be.visible");
  });
});