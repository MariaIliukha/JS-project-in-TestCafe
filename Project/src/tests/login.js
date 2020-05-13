const LoginPage = require('../pages/loginPage').default;
const loginUser = require('../data/loginUser').loginUser;

fixture `Log in`
    .page(LoginPage.url);

test('Valid login', async () => {
    await LoginPage.login(loginUser);
})