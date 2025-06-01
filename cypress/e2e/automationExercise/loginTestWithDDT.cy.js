import { afterEach } from 'mocha';
import {loginDDTData} from '../../fixtures/loginDDTTestData.js'
import { modularLoginFunction, logout } from '../../utilities/loginFunctions.js'

describe('login test suite', ()=>{
     loginDDTData.forEach((data) => {
it('login test with ddt test data', () => {
    modularLoginFunction({userEmail:data.userEmail, userPassword: data.userPassword});
    logout();
});
})
});