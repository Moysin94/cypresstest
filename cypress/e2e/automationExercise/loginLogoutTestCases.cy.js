//Login, logout functionality with valid, invalid credentials
import { loginParameterized, loginFunctionWithXpath, logout, loginWithInvalidEmail, loginWithInvalidPassword, signUpWithExistingUser } from '../../commonFunction/loginFunctions.js'
import testData from '../../fixtures/testData.json'

describe('Login Test Suites', () => {
    before(() => {
        cy.log('**Test Suite Execution Started**');
    });
    beforeEach(() => {
        cy.log('**Test Case Started**');
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    it('login with parameterized arrow function', () => {
        loginParameterized({ userEmail: testData.validemail, userPassword: testData.password });
    });
    // it('login with parameterized arrow function and xpath selectors', () => {
    //     loginFunctionWithXpath({ userEmail: testData.validemail, userPassword: testData.password });
    // })
    it('Logout test case', () => {
        loginParameterized({ userEmail: testData.validemail, userPassword: testData.password });
        logout();
    });
    it('Login with invalid email', () => {
        loginWithInvalidEmail();
    });
    it('Login with invalid password', () => {
        loginWithInvalidPassword();
    });
    it('SignUp with existing user details', () => {
        signUpWithExistingUser();
    });
    afterEach(() => {
        cy.log('**Test Case Completed**');
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    after(() => {
        cy.log('**Test Suite Execution Completed**');
    });
})