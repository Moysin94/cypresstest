//Login function with parameterization
import homePage from '../pageObject/homePage.json'
import testData from '../fixtures/testData.json'
import loginPage from '../pageObject/loginPage.json'
import loginPageXpath from '../pageObject/loginPageXpath.json'
import signupPage from '../pageObject/signupPage.json'
import signupData from '../fixtures/signupData.json'

//Login with flagging for valid and invalid creds
const modularLoginFunction = ({ userEmail = testData.validemail, userPassword = testData.password, isvalid = testData.isValid }) => {
    cy.visit(testData.url)
    cy.get(homePage.loginButton).should('be.visible'); //Assertion
    cy.get(homePage.loginButton).click();
    cy.get(loginPage.loginEmail).type(userEmail) //Parameterization
    cy.get(loginPage.loginPassword).type(userPassword);
    cy.get(loginPage.loginButton).click();
    if (isvalid) {
        cy.get(loginPage.username).contains(testData.message); //Assertion, to check the css selector for this element
    }
    else {
        cy.get(loginPage.invalidMessage).should('have.text', testData.invalidmessage);
    }
};

//logout name function
function logout() {
    cy.get(loginPage.logoutButton).click();
    cy.get(loginPage.homeButton).click();
    cy.get(homePage.loginButton).should('be.visible');
}


//login arrow function with xpath selector
// const loginFunctionWithXpath = ({ userEmail, userPassword}) => {
//     cy.visit(testData.url)
//     cy.xpath(loginPageXpath.signupLoginButton).should('be.visible').click()  //Assertion
//     cy.xpath(loginPageXpath.signupLoginButton).click()
//     cy.xpath(loginPageXpath.loginEmail).type(useremail) //Parameterization
//     cy.xpath(loginPageXpath.loginPassword).type(userpassword)
//     cy.xpath(loginPageXpath.loginButton).click()
//     cy.get(loginPage.username).should('have.text', testData.message)
// };

//signup name function with existing user creds
function signUpWithExistingUser() {
    cy.visit(testData.url)
    cy.get(homePage.loginButton).click()
    cy.contains('New User Signup!')
    cy.get(signupPage.signupName).type(signupData.signupName)
    cy.get(signupPage.signupEmail).type(testData.validemail)
    cy.get(signupPage.signupButton).click()
    cy.get(signupPage.signupMessageExistingUser).should('have.text', signupData.userExistMessage)
}

export { modularLoginFunction, logout, signUpWithExistingUser }