import { modularLoginFunction, logout } from '../../utilities/loginFunctions.js'
import { searchProduct } from '../../utilities/searchProduct.js'
import testData from '../../fixtures/testData.json'

describe('Product Page Test Cases Suites', () => {
    beforeEach(() => {
        modularLoginFunction({ userEmail: testData.validemail, userPassword: testData.validpassword, isValid: true });
    });
    it('Search product test case', () => {
        searchProduct();
    });
    afterEach(() => {
        logout();
    });
})