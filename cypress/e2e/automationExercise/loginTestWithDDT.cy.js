import { afterEach } from 'mocha';
import {loginDDTData} from '../../fixtures/loginDDTTestData.js'
import { modularLoginFunction, logout } from '../../utilities/loginFunctions.js'

describe('login test suite', ()=>{
     loginDDTData.forEach((loginDDTData) => {
it('login test with ddt test data', () => {
    modularLoginFunction({userEmail:loginDDTData.userEmail, userPassword: loginDDTData.userPassword});
    logout();
});
})
});