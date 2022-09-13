const DynamicPage = require('../pageobjects/dynamically.loaded.page');
const page = DynamicPage;

describe('Dynamically Loaded page tests', async function()
{

    it("should navigate to the first sub-page", async function()
    {
        //do it!
        await page.open();
        await page.click(await page.pageLink1);
        await browser.pause(500);
        //await browser.waitUntil(async function() {return await browser.getUrl().match(/(?:the-internet\.herokuapp\.com\/dynamic_loading\/1)/gi)})
        expect (await browser.getUrl()).toBe('https://the-internet.herokuapp.com/dynamic_loading/1');
    })
    it("should click the \"Start\" button", async function()
    {
        await page.open();
        await page.click(await page.pageLink1);
        await browser.pause(500);
        await browser.waitUntil(await async function() {return await page.startButton1})
        await page.click(await page.startButton1)
        await browser.waitUntil(await async function() {return await page.text.isDisplayed()})
        const h4Text = await page.text.getText()
        console.log ('The Text: ', h4Text);
        expect(h4Text).toBe('Hello World!');

    })
})