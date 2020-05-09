const BasePage = require('../pages/basePage').default;
import { baseUrl } from '../pages/basePage';
import { t, Selector } from 'testcafe';

class RegisterPage extends BasePage {
    constructor() {
        super();
    }
    url = `${baseUrl}create_account`;
    firstName = 'input[name="firstname"]';
    lastName = 'input[name="lastname"]';
    country = 'select[class="form-control"][name="country_code"]';
    email = '[name="customer_form"] [name="email"]';
    password = '[name="customer_form"] [name="password"]';
    confirmedPassword = '[name="customer_form"] [name="confirmed_password"]';
    checkBoxNewsLetter = 'input[name="newsletter"]';
    createAccountBtn = '[name="create_account"]';

    async registerUser(userData) {
        await t.typeText(this.firstName, userData.firstName);
        await t.typeText(this.lastName, userData.lastName);
        await t
            .click(this.country)
            .click(Selector('option').withAttribute('value', userData.countryCode));
        await t.typeText(this.email, userData.email);
        await t.typeText(this.password, userData.password);
        await t.typeText(this.confirmedPassword, userData.confirmPassword);
        await t.click(this.checkBoxNewsLetter);
        await t.click(this.createAccountBtn);

    }

    async getTheChallengePage() {
        await t.expect(this.getPageUrl()).contains('challenge');
        await t.click('[class="recaptcha-checkbox-border"]')
    }
}


export default new RegisterPage();