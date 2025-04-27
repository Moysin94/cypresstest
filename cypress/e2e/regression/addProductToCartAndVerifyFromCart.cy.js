import { modularLoginFunction, logout } from '../../utilities/loginFunctions.js'
import { addToCart, verifyProductFromCart, verifyProductFromCartNotExist, removeFromCart } from '../../utilities/addToCart.js'
import { searchProduct } from '../../utilities/searchProduct.js'
import { navigateToCart, navigateToProduct } from '../../utilities/navigations.js'
import testData from '../../fixtures/testData.json'

describe('Product Page Test Cases Suites', () => {
  beforeEach(() => {
    modularLoginFunction({ userEmail: testData.validemail, userPassword: testData.validpassword, isValid: true });
  });
  it('Add product to cart and verify the same from cart', () => {
    //searchProduct();
    navigateToProduct();
    addToCart();
    navigateToCart();
    verifyProductFromCart();
    
  });
  afterEach(() => {
    //Remove the product from cart
    removeFromCart();
    //verifyProductFromCartNotExist();
    logout();
  });
})