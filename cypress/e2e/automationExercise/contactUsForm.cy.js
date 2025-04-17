import { loginParameterized, logout } from '../../commonFunction/loginFunctions.js'
import { contact } from '../../commonFunction/contactFunction.js'
import testData from '../../fixtures/testData.json'
import contactUsFormData from '../../fixtures/contactUsFormData.json'

describe('Contact Us Test Suites', () => {
    before(() => {
        cy.log('**Test Suite Execution Started**');
    });
    beforeEach(() => {
        cy.log('**Test Case Started**');
        loginParameterized({ useremail: testData.validemail, userpassword: testData.password });

    });
    it('Contact Form', () => {
        // cy.log('test case for contact function')  
        // contact();  //File upload not working in contact() function, same is working in the below test case.
        cy.get(contactPage.contactButton).click()
        cy.get(contactPage.name).type(contactUsFormData.name)
        cy.get(contactPage.email).type(contactUsFormData.email)
        cy.get(contactPage.subject).type(contactUsFormData.subject)
        cy.get(contactPage.message).type(contactUsFormData.message)
        cy.get(contactPage.uploadfileButton).attachFile('samplefile.txt'); //uploading file from fixtures folder
        cy.get(contactPage.submitButton).click()
        cy.on('window:confirm', (confirmText) => {
            // Assertion confirm text
            expect(confirmText).to.eq(contactUsFormData.confirmText)

            // Automatically clicks 'OK' with true and 'Cancel' with false
            return true
        });
        cy.get(contactPage.successMessage).should('have.text', contactUsFormData.contactFormSuccessMessage)
    });
    afterEach(() => {
        logout();
        cy.log('**Test Case Completed**');
        // Example to clear local storage or session storage
        cy.clearCookies();
        cy.clearLocalStorage();
    });
    after(() => {
        cy.log('**Test Suite Execution Completed** 🎯');
    });
})