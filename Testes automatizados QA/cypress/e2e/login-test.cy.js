describe('Login no Sistema', () => {
  it('Login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain', "Products")
  });

  it('Adicionar um produto ao carrinho e finalizar a compra', () => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html')
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').should('contain', "1")
    cy.get('.fa-layers-counter').click()
    cy.get('.subheader').should('contain', "Your Cart")
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('standard')
    cy.get('[data-test="lastName"]').type('da Silva')
    cy.get('[data-test="postalCode"]').type('01020304')
    cy.get('.btn_primary').click()
    cy.get('.subheader').should('contain', "Checkout")
    cy.get('.btn_action').click()
    cy.get('.subheader').should('contain', "Finish")
  });
  

    

})