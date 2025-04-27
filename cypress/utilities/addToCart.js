import addProductToCartHomePage from '../pageObject/addProductToCartHomePage.json'
import addProductToCarts from '../fixtures/addProductToCarts.json'
import cartPage from '../pageObject/cartPage.json'

const addToCart = () => {
    cy.get(addProductToCartHomePage.productNewLoc).realHover().first().click();
    cy.get(addProductToCartHomePage.Product1).click();
    //Assertion
    cy.get(addProductToCartHomePage.continueShoppingSuccessMessage)
        .should('have.text', addProductToCarts.continueShoppingSuccessMessage);
    cy.wait(7000);
    cy.get(addProductToCartHomePage.continueShoppingNew).click();
}

const removeFromCart = () => {
    cy.get(cartPage.removeProductFirst).should('be.visible').click();
    cy.get(cartPage.productName).should('not.exist');
}

const verifyProductFromCart = () =>{
    cy.get(cartPage.productName).should('contain', 'Blue Top').and('contain','Rs. 500').and('contain','Rs. 500');
}

const verifyProductFromCartNotExist = () =>{
    cy.get(cartPage.productName).should('not.exist');
}

export { addToCart, verifyProductFromCart, removeFromCart, verifyProductFromCartNotExist}