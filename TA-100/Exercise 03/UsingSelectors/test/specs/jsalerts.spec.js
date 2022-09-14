const { returnAlertText } = require('../pageobjects/javascript_alerts.page');
const JSAlertsPage = require('../pageobjects/javascript_alerts.page');

describe('test to try and access Javascript alerts functions and get a result from them.', async function()
{
    this.beforeEach( async function()
    {
        await JSAlertsPage.open();
    })
    it ('should access the first button and return the text.', async function()
    {
        const jsAlert = await JSAlertsPage.javascriptPopup(1);
        await JSAlertsPage.clickButton(jsAlert);
        console.log(await JSAlertsPage.returnAlertText());
        await expect(await JSAlertsPage.returnAlertText()).toEqual('I am a JS Alert');
        await jsAlert.acceptAlert();
    })

    it("should check the #result text.", async function()
    {
        const jsAlert = await JSAlertsPage.javascriptPopup(1);
        await JSAlertsPage.clickButton(jsAlert);
        await jsAlert.acceptAlert();
        const confirmMessage = await JSAlertsPage.confirmMessage
        await expect(await confirmMessage.getText()).toEqual('You successfully clicked an alert');
    })

    it ('should access the second button and return the text.', async function()
    {
        const jsConfirm = await JSAlertsPage.javascriptPopup(2);
        await JSAlertsPage.clickButton(jsConfirm);
        console.log(await JSAlertsPage.returnAlertText());
        await expect(await JSAlertsPage.returnAlertText()).toEqual('I am a JS Confirm');
        await jsConfirm.acceptAlert();
    })

    it("should check the #result text. and register an \"Ok\" click", async function()
    {
        const jsConfirm = await JSAlertsPage.javascriptPopup(2);
        await JSAlertsPage.clickButton(jsConfirm);
        await jsConfirm.acceptAlert();
        const confirmMessage = await JSAlertsPage.confirmMessage
        await expect(await confirmMessage.getText()).toEqual('You clicked: Ok');
    })
    it("should check the #result text. and register an \"Cancel\" click", async function()
    {
        const jsConfirm = await JSAlertsPage.javascriptPopup(2);
        await JSAlertsPage.clickButton(jsConfirm);
        await jsConfirm.dismissAlert();
        const confirmMessage = await JSAlertsPage.confirmMessage;
        await expect(await confirmMessage.getText()).toEqual('You clicked: Cancel');
    })

    it ('should access the third button, return the text, and enter in a test phrase.', async function()
    {
        const jsPrompt = await JSAlertsPage.javascriptPopup(3);
        await JSAlertsPage.clickButton(jsPrompt);
        console.log(await JSAlertsPage.returnAlertText());
        await expect(await JSAlertsPage.returnAlertText()).toEqual('I am a JS prompt');
        let testText = 'thisIsATest.';
        await JSAlertsPage.sendText(testText);
        await jsPrompt.acceptAlert();
        const confirmMessage = await JSAlertsPage.confirmMessage;
        await expect(await confirmMessage.getText()).toEqual('You entered: ' + testText);
    })

})