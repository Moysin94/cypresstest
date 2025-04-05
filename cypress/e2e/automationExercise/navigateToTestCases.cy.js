import navigateToTestCases from '../../pageObject/navigateToTestCases.json'
import testCases from '../../fixtures/testCases.json'
import { login, logout } from '../../commonFunctions/commonfunctions.cy.js'

describe('Navigate to Test Cases Suites', () => {
    before(() => {
        cy.log('**Test Suite Execution Started**');
    });
    beforeEach(() => {
        login();
        cy.log('**Test Case Started**');
    });
    it('Navigate to test case section', () => {
        cy.get(navigateToTestCases.testcaselistButton).click()
        cy.get(navigateToTestCases.testcase).should('have.text', testCases.testcaselist)
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