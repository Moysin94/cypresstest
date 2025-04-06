import { modularLoginFunction, logout } from '../../commonFunction/loginFunctions.js'
import addProductToCartHomePage from '../../pageObject/addProductToCartHomePage.json'
import addProductToCarts from '../../fixtures/addProductToCarts.json'
import testData from '../../fixtures/testData.json'

describe('Product Page Test Cases Suites', () => {
    before(() => {
        cy.log('**Test Suite Execution Started**');
    });
    beforeEach(() => {
        modularLoginFunction({ userEmail: testData.validemail, userPassword: testData.validpassword, isValid: true  });
        cy.log('**Test Case Started**');
    });
    it('Search product test case', () => {
        cy.get(addProductToCartHomePage.Product1).click();
        cy.get("[class='productinfo text-center']>[data-product-id='1']").trigger('mouseover')
        cy.get(addProductToCarts.continueShoppingSuccessMessage).should('have.text', addProductToCartHomePage.continueShoppingSuccessMessage) //Assertion
        cy.get(addProductToCartHomePage.continueShoppingBotton).click();

    });
    afterEach(() => {
        logout();
        cy.log('**Test Case Completed**');
        // Example to clear local storage or session storage
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    after(() => {
        cy.log('**Test Suite Execution Completed**');
    });
})