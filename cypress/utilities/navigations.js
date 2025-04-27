import homePage from '../pageObject/homePage.json'

const navigateToProduct = () => {
    cy.get(homePage.productPage).click();
}

const navigateToCart = () => {
    cy.get(homePage.cartPage).click();
}


export {navigateToProduct, navigateToCart}