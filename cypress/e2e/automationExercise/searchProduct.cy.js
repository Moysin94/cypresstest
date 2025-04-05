import verifyProduct from '../../pageObject/verifyProduct.json'
import verifyAllProducts from '../../fixtures/verifyAllProducts.json'
import { login, logout } from '../../commonFunctions/commonfunctions.cy.js'

describe('Product Page Test Cases Suites', () => {
    before(() => {
        cy.log('**Test Suite Execution Started**');
    });
    beforeEach(() => {
        login();
        cy.log('**Test Case Started**');
    });
    it('Search product test case', () => {
        cy.get(verifyProduct.productPage).click()
        cy.get('.title').should('have.text', verifyAllProducts.productTitle)
        cy.get(verifyProduct.searchProductTextBox).type(verifyAllProducts.productName)
        cy.get(verifyProduct.searchProductButton).click()
        cy.get(verifyProduct.productNameAfterSearch).should('have.text', verifyAllProducts.productName)
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