import subscriptionFunctionality from '../../pageObject/subscirptionFunctionality.json'
import subscription from '../../fixtures/subscription.json'
import loginPage from '../../pageObject/loginPage.json'
import { login, logout } from '../../commonFunctions/commonfunctions.cy.js'

describe('Product Page Test Cases Suites', () => {
    before(() => {
        cy.log('**Test Suite Execution Started**');
    });
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.log('**Test Case Started**');
        login();
    });
    it('Subscription in home page test case', () => {
        cy.get(loginPage.homeButton).should('be.visible') //Assertion
        cy.get(subscriptionFunctionality.subscriptionText).should('have.text', subscription.subscriptionText)
        cy.get(subscriptionFunctionality.subscriptionEmailTextBox).type(subscription.subscriptionEmail)
        cy.get(subscriptionFunctionality.subscriptionButton).click()
        cy.get(subscriptionFunctionality.subscriptionToastMessage).should('be.visible').and('have.text', subscription.subscriptionMessage)
    });
    it('Subscription in cart page test case', () => {
        cy.get(subscriptionFunctionality.cartPageButton).should('be.visible') //Assertion
        cy.get(subscriptionFunctionality.cartPageButton).click()
        cy.get(subscriptionFunctionality.subscriptionText).should('have.text', subscription.subscriptionText)
        cy.get(subscriptionFunctionality.subscriptionEmailTextBox).type(subscription.subscriptionEmail)
        cy.get(subscriptionFunctionality.subscriptionButton).click()
        cy.get(subscriptionFunctionality.subscriptionToastMessage).should('be.visible').and('have.text', subscription.subscriptionMessage)
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