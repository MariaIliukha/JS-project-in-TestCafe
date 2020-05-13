import { baseUrl } from '../pages/basePage';
const BasePage = require('../pages/basePage').default;
import { t } from 'testcafe';

class LoginPage extends BasePage {
    constructor() {
        super();
    }
    url = baseUrl;
    signInElement = '[class="account dropdown"] [data-toggle="dropdown"]';
    email = '[name="email"]';
    password = '[name="password"]';
    signInBtn = '[name="login"]';

    async login(loginUser) {
        await t.click(this.signInElement);
        await t.typeText(this.email, loginUser.email);
        await t.typeText(this.password, loginUser.password);
        await t.click(this.signInBtn);
    }
}

export default new LoginPage();