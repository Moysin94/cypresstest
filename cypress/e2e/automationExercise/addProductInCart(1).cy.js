import { modularLoginFunction, logout } from '../../commonFunction/loginFunctions.js'
import addProductToCartHomePage from '../../pageObject/addProductToCartHomePage.json'
import contactPage from '../../pageObject/contactPage.json'
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
    it.only('Search product test case', () => {
        cy.get(addProductToCartHomePage.Product1).shadow().find().click();
        cy.get("[class='productinfo text-center']>[data-product-id='1']").trigger('mouseover')
        cy.get(addProductToCarts.continueShoppingSuccessMessage).should('have.text', addProductToCartHomePage.continueShoppingSuccessMessage) //Assertion
        cy.get(addProductToCartHomePage.continueShoppingBotton).click();

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
    // after(() => {
    //     cy.log('**Test Suite Execution Completed**');
    // });
})