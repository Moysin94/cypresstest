import verifyProduct from '../../pageObject/verifyProduct.json'
import verifyAllProducts from '../../fixtures/verifyAllProducts.json'
import { modularLoginFunction, logout } from '../../utilities/loginFunctions.js'
import { searchProduct } from '../../utilities/searchProduct.js'
import testData from '../../fixtures/testData.json'

describe('Product Page Test Cases Suites', () => {
    before(() => {
        cy.log('**Test Suite Execution Started**');
    });
    beforeEach(() => {
        modularLoginFunction({ userEmail: testData.validemail, userPassword: testData.validpassword, isValid: true });
        cy.log('**Test Case Started**');
    });
    it('Search product test case', () => {
        searchProduct();
    
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