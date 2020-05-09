const RegisterPage = require('../pages/registrationPage').default;
const userData = require('../data/user').userData;

fixture `Registration`
    .page(RegisterPage.url);

test('Valid registration', async () => {
    await RegisterPage.registerUser(userData);
})