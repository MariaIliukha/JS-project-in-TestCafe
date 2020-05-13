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
    address = '[name="address1"]';
    zipCode = '[name="postcode"][data-type="text"]';
    city = '[name="city"][data-type="text"]';
    country = 'select[class="form-control"][name="country_code"]';
    email = '[name="customer_form"] [name="email"]';
    phone = '[name="phone"][data-type="phone"]';
    password = '[name="customer_form"] [name="password"]';
    confirmedPassword = '[name="customer_form"] [name="confirmed_password"]';
    checkBoxNewsLetter = 'input[name="newsletter"]';
    createAccountBtn = '[name="create_account"]';
    successMessage = '[class="alert alert-success"]';
    displayUserName = '[class="account dropdown"]';

    async registerUser(userData) {
        await t.typeText(this.firstName, userData.firstName);
        await t.typeText(this.lastName, userData.lastName);
        await t.typeText(this.address, userData.address);
        await t.typeText(this.zipCode, userData.zipCode);
        await t.typeText(this.city, userData.city);
        await t
            .click(this.country)
            .click(Selector('option').withAttribute('value', userData.countryCode));
        await t.typeText(this.email, userData.email);
        await t.typeText(this.phone, userData.phone);
        await t.typeText(this.password, userData.password);
        await t.typeText(this.confirmedPassword, userData.confirmPassword);
        await t.click(this.checkBoxNewsLetter);
        await t.click(this.createAccountBtn);
    }
    async getSuccessMessage() {
        const message = await Selector(this.successMessage).innerText;
        return message.replace(/[^a-zA-Z]/g, " ").trim();
    }
    async getUserNameAfterRegistration() {
        const name = await Selector(this.displayUserName).innerText;
        return name.replace(/[^a-zA-Z]/g, " ").trim();
    }
    
}


export default new RegisterPage();