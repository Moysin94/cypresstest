import verifyProduct from '../pageObject/verifyProduct.json'
import verifyAllProducts from '../fixtures/verifyAllProducts.json'

//searchProduct function to search product from prodcut page
const searchProduct = () => {
    cy.get(verifyProduct.productPage).click();
    cy.get('.title').should('have.text', verifyAllProducts.productTitle);
    cy.get(verifyProduct.searchProductTextBox).type(verifyAllProducts.productName);
    cy.get(verifyProduct.searchProductButton).click();
    cy.get(verifyProduct.productNameAfterSearch).should('have.text', verifyAllProducts.productName);
}

export { searchProduct }