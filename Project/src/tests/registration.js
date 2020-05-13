import { t } from 'testcafe';
const RegisterPage = require('../pages/registrationPage').default;
const userData = require('../data/user').userData;
const expectedMessage = 'Your customer account has been created';
import { baseUrl } from '../pages/basePage';

fixture `Registration`
    .page(RegisterPage.url);

test('Valid registration', async () => {
    await RegisterPage.registerUser(userData);
    await t.expect(await RegisterPage.getSuccessMessage()).eql(expectedMessage, 'Invalid message');
    await t.expect(RegisterPage.getPageUrl()).eql(baseUrl, 'Invalid URL');
    await t.expect(await RegisterPage.getUserNameAfterRegistration()).eql(userData.firstName);
})