import testData from '../../fixtures/testData.json'
import loginPage from '../../pageObject/loginPage.json'

describe('Login Test with Custom Commands', () => {
    beforeEach(() => {
        cy.log('**Test Case Started**');
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.fixture('testData').then(function (runTimeData) { //Reading the testData from fixtures 
        this.runTimeData = runTimeData; //Assigning the testData to a runTimeData (global variable)
        });
    });

    it('Login with Valid Data', function () {
        cy.login(this.runTimeData.url, this.runTimeData.validemail, this.runTimeData.password); // Calling Custom Command
        cy.get(loginPage.username).contains(testData.message) //Assertion, to check the css selector for this element  
    });

    it('Login with Invalid Data', function () {
        cy.login(this.runTimeData.url, this.runTimeData.invalidemail, this.runTimeData.invalidpassword, this.runTimeData.invalidmessage); // Calling Custom Command
        cy.get(loginPage.invalidMessage).contains(testData.invalidmessage)//A check the css selector for this element  
    });

    afterEach(() => {
        cy.log('**Test Case Completed**');
        cy.clearCookies();
        cy.clearLocalStorage();
    });
});
