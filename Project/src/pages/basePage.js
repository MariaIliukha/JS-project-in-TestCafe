import { t, ClientFunction } from 'testcafe';

export const baseUrl = 'https://xoticpc.com';

export default class BasePage {
    async navigateTo(url) {
        await t.navigateTo(url);
    }
    getPageUrl = ClientFunction( () => window.location.href)
}
