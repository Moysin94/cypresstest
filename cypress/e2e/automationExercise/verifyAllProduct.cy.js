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
    it('All product and product detail page test case', () => {
        cy.get(verifyProduct.productPage).click()
        cy.get('.title').should('have.text', verifyAllProducts.productTitle)
        cy.get(verifyProduct.firstProductDetails).click()
        cy.get(verifyProduct.productName).should('have.text', verifyAllProducts.productName)
        cy.get(verifyProduct.productCategory).should('have.text', verifyAllProducts.productCategory)
        cy.get(verifyProduct.productPrice).should('have.text', verifyAllProducts.productPrice)
        cy.get(verifyProduct.productAvailability).should('have.text', verifyAllProducts.productAvailability)
        cy.get(verifyProduct.productCondition).should('have.text', verifyAllProducts.productCondition)
        cy.get(verifyProduct.productBrand).should('have.text', verifyAllProducts.productBrand)
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