import { modularLoginFunction, logout } from '../../utilities/loginFunctions.js'
import addProductToCartHomePage from '../../pageObject/addProductToCartHomePage.json'
import contactPage from '../../pageObject/contactPage.json'
import addProductToCarts from '../../fixtures/addProductToCarts.json'
import testData from '../../fixtures/testData.json'

describe('Product Page Test Cases Suites', () => {
    beforeEach(() => {
        modularLoginFunction({ userEmail: testData.validemail, userPassword: testData.validpassword, isValid: true });
        cy.log('**Test Case Started**');
    });
    it.only('Search product test case', () => {
        cy.get(addProductToCartHomePage.productNewLoc).realHover().first().click();
        cy.get(addProductToCartHomePage.Product1).click();
        //Assertion
        cy.get(addProductToCartHomePage.continueShoppingSuccessMessage)
            .should('have.text', addProductToCarts.continueShoppingSuccessMessage);
        cy.wait(3000);
        cy.get(addProductToCartHomePage.continueShoppingNew).click();

    });
    afterEach(() => {
        logout();
        cy.log('**Test Case Completed**');
        // Example to clear local storage or session storage
        cy.clearCookies();
        cy.clearLocalStorage();
    });
})