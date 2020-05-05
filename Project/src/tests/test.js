const BasePage = require('../pages/basePage').default;
import { baseUrl } from '../pages/basePage';
import * as faker from 'faker';

class RegisterPage extends BasePage {
    constructor() {
        super();
    }
    url = `${baseUrl}/account/register`
}

const exClass = new RegisterPage();

fixture `Checking page`
    .page(exClass.url)

test('1', async t => {
    await t.typeText('input[id="first_name"]', faker.name.firstName(4))
})