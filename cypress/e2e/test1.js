beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
///<reference types = "Cypress"/> 
describe('log in', () => {
    // // it('log in standard user', () => {
    // //    cy.visit("https://www.saucedemo.com/")
    // //    cy.get('[data-test="username"]').type("standard_user")
    // //    cy.get('[data-test="password"]').type("secret_sauce")
    // //    cy.get('[data-test="login-button"]').click()
    // });

    it('add all item to card', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        let expecteditems = 6;
        for (let i = 0; i < expecteditems; i++) {
            if (i % 2 == 0) {
                let itemArray = cy.get('div#inventory_container').find('.btn').eq(i).click()

            }
        }



    })
});