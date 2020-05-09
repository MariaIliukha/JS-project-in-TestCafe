const BasePage = require('../pages/basePage').default;
import { baseUrl } from '../pages/basePage';
import { t } from 'testcafe';

class RegisterPage extends BasePage {
    constructor() {
        super();
    }
    url = `${baseUrl}/account/register`;
    firstName = 'input[id="first_name"]';
    lastName = 'input[id="last_name"]';
    email = 'input[id="email"]';
    password = 'input[id="password"]';
    acceptCheckBox = 'input[id="customer[accepts_marketing]"]';
    signUpBtn = 'input[value="Sign Up"]';

    async registerUser(userData) {
        await t.typeText(this.firstName, userData.firstName);
        await t.typeText(this.lastName, userData.lastName);
        await t.typeText(this.email, userData.email);
        await t.typeText(this.password, userData.password);
        await t.click(this.acceptCheckBox);
        await t.click(this.signUpBtn);
    }

    async getTheChallengePage() {
        await t.expect(this.getPageUrl()).contains('challenge');
        await t.click('[class="recaptcha-checkbox-border"]')
    }
}


export default new RegisterPage();