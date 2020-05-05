const BasePage = require('../pages/basePage').default;
import { baseUrl } from '../pages/basePage';

class RegisterPage extends BasePage {
    constructor() {
        super();
    }
    url = `${baseUrl}/account/register`;
    firstName = 'input[id="first_name"]';
    lastName = 'input[id="last_name"]';
    email = 'input[id="email"]';
    password = 'input[id="password"]';
    acceptChackBox = 'input[id="customer[accepts_marketing]"]';
    signUpBtn = 'input[value="Sign Up"]';
}

export default new RegisterPage();