//Login function with parameterization
import homePage from '../pageObject/homePage.json'
import testData from '../fixtures/testData.json'
import loginPage from '../pageObject/loginPage.json'
import loginPageXpath from '../pageObject/loginPageXpath.json'
import signupPage from '../pageObject/signupPage.json'
import signupData from '../fixtures/signupData.json'

// //Login with backward compatibility (not use {})
// const modularLoginFunctionWithBackComp = ( userEmail=testData.validemail, userPassword=testData.password) => {
//     cy.visit(testData.url)
//     cy.get(homePage.loginButton).should('be.visible') //Assertion
//     cy.get(homePage.loginButton).click()
//     cy.get(loginPage.loginEmail).type(userEmail) //Parameterization
//     cy.get(loginPage.loginPassword).type(userPassword)
//     cy.get(loginPage.loginButton).click()
//     cy.get(loginPage.message).contains(testData.message) //Assertion, to check the css selector for this element
// };

//Login with flagging for valid and invalid creds
const modularLoginFunction = ({ userEmail= testData.validemail, userPassword= testData.password, isValid=true}) => {
    cy.visit(testData.url)
    cy.get(homePage.loginButton).should('be.visible') //Assertion
    cy.get(homePage.loginButton).click()
    cy.get(loginPage.loginEmail).type(userEmail) //Parameterization
    cy.get(loginPage.loginPassword).type(userPassword)
    cy.get(loginPage.loginButton).click()
    if(isValid==true){
    cy.get(loginPage.username).contains(testData.message) //Assertion, to check the css selector for this element
    }
    else{
    cy.get(loginPage.invalidMessage).should('have.text', testData.invalidmessage)
    }
};



//login name function without parameter (static nature)
function login() {
    cy.visit(testData.url)
    cy.get(loginPage.homeButton).should('be.visible') //Assertion
    cy.get(homePage.loginButton).click()
    cy.get(loginPage.loginEmail).type(testData.validemail) //Parameterization
    cy.get(loginPage.loginPassword).type(testData.password)
    cy.get(loginPage.loginButton).click()
    cy.get(loginPage.username).contains(testData.message) //Assertion, to check the css selector for this element
}

//logout name function
function logout() {
    cy.get(loginPage.logoutButton).click()
    cy.get(loginPage.homeButton).click()
    cy.get(homePage.loginButton).should('be.visible')
}

//login arrow function with css selector (dynamic nature)
const loginParameterized = ({ userEmail= testData.validemail, userPassword= testData.password }) => {
    cy.visit(testData.url)
    cy.get(homePage.loginButton).should('be.visible') //Assertion
    cy.get(homePage.loginButton).click()
    cy.get(loginPage.loginEmail).type(userEmail) //Parameterization
    cy.get(loginPage.loginPassword).type(userPassword)
    cy.get(loginPage.loginButton).click()
    cy.get(loginPage.username).contains(testData.message) //Assertion, to check the css selector for this element
};

//login with invalid email
function loginWithInvalidEmail() {
    cy.visit(testData.url)
    cy.get(homePage.loginButton).click()
    cy.get(loginPage.loginEmail).type(testData.invalidemail)
    cy.get(loginPage.loginPassword).type(testData.password)
    cy.get(loginPage.loginButton).click()
    cy.get(loginPage.invalidMessage).should('have.text', testData.invalidmessage)
};

//login with invalid password
function loginWithInvalidPassword() {
    cy.visit(testData.url)
    cy.get(homePage.loginButton).click()
    cy.get(loginPage.loginEmail).type(testData.validemail)
    cy.get(loginPage.loginPassword).type(testData.invalidpassword)
    cy.get(loginPage.loginButton).click()
    cy.get(loginPage.invalidMessage).should('have.text', testData.invalidmessage)
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

export {modularLoginFunction, logout, loginParameterized, loginWithInvalidEmail, loginWithInvalidPassword, signUpWithExistingUser }