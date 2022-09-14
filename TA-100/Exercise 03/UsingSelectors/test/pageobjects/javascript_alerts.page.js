const Page = require('./page');

class JSAlertsPage extends Page
{
    async clickButton(jsAlert)
    {
        console.log(await (jsAlert.isFocused()));
        await jsAlert.waitForDisplayed();
        await jsAlert.click();
    }

    async javascriptPopup(num)
    {
        return $('#content > div > ul > li:nth-child('+ num + ') > button')
    }

    get confirmMessage()
    {
        return($('#result'))
    }

    async sendText(text)
    {
        await browser.sendAlertText(text);
    }

    async returnAlertText()
    {
        return(browser.getAlertText())
    }

    async open()
    {
        return super.open('javascript_alerts');
    }
}
module.exports = new JSAlertsPage();