import testData from '../../fixtures/testData.json'
import loginPage from '../../pageObject/loginPage.json'

describe('Login Test with Custom Commands', () => {
    beforeEach(() => {
        //Reading the testData from fixtures 
        cy.fixture('testData').then(function (runTimeData) {
            //Assigning the testData to a runTimeData (global variable)
            this.runTimeData = runTimeData;
        });
    });

    it('Login with Valid Data', function () {
        cy.login(this.runTimeData.url, this.runTimeData.validemail, this.runTimeData.password); // Calling Custom Command
        cy.get(loginPage.username).contains(testData.message) //Assertion, to check the css selector for this element  
    });

    it('Login with Invalid Data', function () {
        // Calling Custom Command
        cy.login(this.runTimeData.url, this.runTimeData.invalidemail, this.runTimeData.invalidpassword, this.runTimeData.invalidmessage);
        //A check the css selector for this element
        cy.get(loginPage.invalidMessage).contains(testData.invalidmessage)
    });

    afterEach(() => {
        cy.log('**Test Case Completed**');
    });
});
