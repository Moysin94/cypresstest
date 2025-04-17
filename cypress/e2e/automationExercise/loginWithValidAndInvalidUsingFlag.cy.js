import {modularLoginFunction} from '../../commonFunction/loginFunctions.js'
import testData from '../../fixtures/testData.json'
import loginPage from '../../pageObject/loginPage.json'

//login with valid/invalid creds using flag

it,only('login with invalid creds', () => {
    modularLoginFunction({ userEmail: testData.invalidemail, userPassword: testData.invalidpassword, isValid: false });
});
it('login with valid creds', () => {
    modularLoginFunction({ userEmail: testData.validemail, userPassword: testData.validpassword, isValid: true  });
});