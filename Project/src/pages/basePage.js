import { t, ClientFunction } from 'testcafe';

export const baseUrl = 'http://ip-5236.sunline.net.ua:38015/';

export default class BasePage {
    async navigateTo(url) {
        await t.navigateTo(url);
    }
    getPageUrl = ClientFunction( () => window.location.href)
}
