import { modularLoginFunction, logout } from '../../utilities/loginFunctions.js'
import { contact } from '../../utilities/contactFunction.js'
import testData from '../../fixtures/testData.json'
import contactUsFormData from '../../fixtures/contactUsFormData.json'
import contactPage from '../../pageObject/contactPage.json'

describe('Contact Us Test Suites', () => {
    beforeEach(() => {
        cy.log('**Test Case Started**');
        modularLoginFunction({ useremail: testData.validemail, userpassword: testData.password });
    });
    it('Contact Form', () => {
        //cy.log('test case for contact function') 
        //File upload not working in contact() function, same is working in the below test case. 
        contact();  
    });
    afterEach(() => {
        logout();
        cy.log('**Test Case Completed**');
        //Example to clear local storage or session storage
        cy.clearCookies();
        cy.clearLocalStorage();
    });
})