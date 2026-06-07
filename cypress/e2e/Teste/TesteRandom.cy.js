describe('Exemple de test', () => {

    // it('Verificare url', () => {
    //     cy.visit('https://www.digi24.ro/finante/zece-mari-banci-au-fost-amendate-cu-710-milioane-de-euro-pentru-manipularea-robor-anunta-consiliul-concurentei-3804595');
    //     cy.get('#onetrust-accept-btn-handler').click();
    //     cy.url().should('include', '/finante/');
    
    // })


    it('Test sopping cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '1');
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '2');
        cy.get('[data-test="shopping-cart-link"]').click();
       // cy.get('[data-test="checkout"]').click();
       cy.get('[data-test="continue-shopping"]').click();
       cy.get('[data-test="product-sort-container"]').select('Price (low to high)').should('have.value', 'lohi');
    })


    //   it('Teastare parola gresita', () => {
    //     cy.visit('https://www.saucedemo.com/');
    //     cy.wait(1000);
    //     cy.get('[data-test="username"]').type('standard_user');
    //     cy.get('[data-test="password"]').type('secret_saucesauce');
    //     cy.get('[data-test="login-button"]').click();
    //     cy.get('[data-test="error"]').should('be.visible');

    //   })


    // it('Testere id vizibil', () => {
    //     cy.visit('https://www.google.com/');
    //      cy.wait(1000);
    //      cy.get('#L2AGLb > .QS5gu').click();
    //      cy.get('#logo').should('be.visible');
    

    // })


});